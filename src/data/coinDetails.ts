import bitcoin from "../assets/images/bitcoin.png";
import binance from "../assets/images/binance.png";
import ethereum from "../assets/images/ethereum.png";
export type CoinDetail = {
  id: Number;
  coin: string;
  holding: string;
  value: string;
  price: string;
  image: any;
};

export const coinDetailsData: CoinDetail[] = [
  {
    id: 1,
    coin: "bitcoin",
    holding: "BTC 0.5268",
    value: "0.5268",
    price: "1.2586",
    image: bitcoin,
  },
  {
    id: 2,
    coin: "ethereum",
    holding: "ETH 0.0025600",
    value: "0.5668",
    price: "1.2586",
    image: ethereum,
  },
  {
    id: 3,
    coin: "BINANCE",
    holding: "BTC 0.5268",
    value: "0.5268",
    price: "1.2586",
    image: binance,
  },
  {
    id: 1,
    coin: "bitcoin",
    holding: "BTC 0.5268",
    value: "0.5268",
    price: "1.2586",
    image: bitcoin,
  },
  {
    id: 2,
    coin: "ethereum",
    holding: "ETH 0.0025600",
    value: "0.5668",
    price: "1.2586",
    image: ethereum,
  },
  {
    id: 3,
    coin: "BINANCE",
    holding: "BTC 0.5268",
    value: "0.5268",
    price: "1.2586",
    image: binance,
  },
];
