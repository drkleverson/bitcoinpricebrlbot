import "dotenv/config";
import { client } from "./connection/twitter";
import axios from "axios";
import { env } from "./env";

const fearAndGreedResult = async () => {
  const response = await axios.get("https://api.alternative.me/fng/");
  return response.data.data[0];
};

const indexDescription = [
  {
    description: "ganância extrema 🤑🤑",
    gt: 90,
  },
  {
    description: "ganância extrema 🤑",
    gt: 75,
  },
  {
    description: "ganância 😎",
    gt: 63,
  },
  {
    description: "ganância 🙂",
    gt: 54,
  },
  {
    description: "neutro 😐",
    gt: 46,
  },
  {
    description: "medo 😨",
    gt: 35,
  },
  {
    description: "medo 😨",
    gt: 25,
  },
  {
    description: "medo extremo 😱",
    gt: 10,
  },
  {
    description: "medo extremo 😱😱",
    gt: 0,
  },
];

(async () => {
  const result = await fearAndGreedResult();
  const findIndexResult = indexDescription.findIndex(
    (description) => result.value > description.gt
  );

  const descriptionResult = indexDescription[findIndexResult];
  let rangeBarArray = Array.from(Array(9), () => "─");
  rangeBarArray[findIndexResult] = "●";

  const tweet = `nível de medo e ganância do mercado

medo ${rangeBarArray.reverse().join("")} ganância

${descriptionResult.description}

#bitcoin
`;
  console.log(tweet);
  client.v2.tweet({ text: tweet });
})();
