const { connection } = require("./twitter.service");

var stream = connection.stream("statuses/filter", {
  track: ["bitcoin"],
  language: "pt",
});

stream.on("tweet", function (tweet: any) {
  let validSource = ["Android", "iPhone", "iPad", "Web App", "TweetDeck"];
  let inValidSource = validSource.filter(
    (value) => tweet.source.search(value) != -1
  );

  if (
    inValidSource.length &&
    !tweet.retweeted_status &&
    !tweet.is_quote_status
  ) {
    connection.post("favorites/create", {
      id: tweet.id_str,
    });
    console.log(`@${tweet.user.screen_name}: ${tweet.text}\n`);
  }
});
