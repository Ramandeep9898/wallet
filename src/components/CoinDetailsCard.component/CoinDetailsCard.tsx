import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { CoinDetail } from "../../data/coinDetails";
import { ReceiveModel } from "../ReceiveModel/ReceiveModel";
import { useState } from "react";

type CoinCardType = {
  coinDetail: CoinDetail;
};

export const CoinDetailsCard = ({ coinDetail }: CoinCardType) => {
  const [modelOpen, setModelOpen] = useState(false);
  return (
    <>
      <section className="coin-detail-card flex margin-t10">
        <div className="coin-name flex gap10 w-20 flex-grow flex-align-center">
          <div className="coin-logo flex flex-align-justify-center">
            <img src={coinDetail.image} alt="" />
          </div>
          <span className="color-white">{coinDetail.coin.toUpperCase()}</span>
        </div>
        <div className="color-white flex-grow w-20">
          <span>{coinDetail.holding}</span>
        </div>
        <div className="color-white flex-grow w-20">
          <span>$ {coinDetail.value}</span>
        </div>
        <div className="color-white flex-grow w-20">
          <span>$ {coinDetail.price}</span>
        </div>

        <div className="coin-action flex gap10 w-174">
          <span className="color-cta-blue flex gap10">
            <span>
              <BsArrowDownLeft />
            </span>
            <span
              className="cursor"
              onClick={() => setModelOpen((wasOpened) => !wasOpened)}
            >
              RECEIVE
            </span>
          </span>

          <span className="part-color">|</span>

          <span className="color-yellow flex gap10">
            <span>
              <BsArrowUpRight />
            </span>

            <span className="cursor">SEND</span>
          </span>
        </div>
      </section>

      {modelOpen && <ReceiveModel setModelOpen={setModelOpen} />}
    </>
  );
};
