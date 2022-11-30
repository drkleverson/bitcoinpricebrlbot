export const moneyFormat = (value: string) => {
  return parseFloat(value)
    .toFixed(2)
    .replace(".", ",")
    .replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}

export const numberFormat = (number: number, decimal = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: decimal,
  }).format(number);
}

export const timePtBr = (time = Date()) => {
  var data = new Date(
    new Date(time).toLocaleString("pt-br", {
      timeZone: "America/Sao_Paulo",
    })
  ),
    hora = data.getHours().toString(),
    horaF = hora.length == 1 ? "0" + hora : hora,
    minuto = data.getMinutes().toString(),
    minutoF = minuto.length == 1 ? "0" + minuto : minuto;
  return horaF + ":" + minutoF;
}

export const datePtBr = (date = Date()) => {
  return new Date(date).toLocaleString("pt-br", {
    timeZone: "America/Sao_Paulo",
  });
}

export const percentageChangeFormat = (number: number) => {
  return (number > 0 ? "+" : "") + moneyFormat(number.toFixed(2)) + "%";
}