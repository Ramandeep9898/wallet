import bitcoin from "../assets/images/bitcoin.png";
export type CoinDetail = {
  id: Number;
  coin: string;
  holding: string;
  value: string;
  price: string;
  image: string;
};

export const coinDetailsData: CoinDetail[] = [
  {
    id: 1,
    //@ts-ignore
    coin: { bitcoin },
    holding: "BTC 0.5268",
    value: "0.5268",
    price: "1.2586",
    image: "../assets/images/bitcoin.png",
  },
  // {
  //   id: 2,
  //   coin: "ethereum",
  //   holding: "ETH 0.0025600",
  //   value: "0.5668",
  //   price: "1.2586",
  // },
  // {
  //   id: 3,
  //   coin: "bitcoin",
  //   holding: "BTC 0.5268",
  //   value: "0.5268",
  //   price: "1.2586",
  // },
  // {
  //   id: 4,
  //   coin: "ethereum",
  //   holding: "ETH 0.0025600",
  //   value: "0.5668",
  //   price: "1.2586",
  // },
  // {
  //   id: 5,
  //   coin: "bitcoin",
  //   holding: "BTC 0.5268",
  //   value: "0.5268",
  //   price: "1.2586",
  // },
  // {
  //   id: 6,
  //   coin: "ethereum",
  //   holding: "ETH 0.0025600",
  //   value: "0.5668",
  //   price: "1.2586",
  // },
];
