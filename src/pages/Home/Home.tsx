import "./home.css";
import {
  AiOutlineCheckCircle,
  AiOutlinePlus,
  AiOutlineDelete,
  AiOutlineSearch,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Header } from "../../components/Header.component/Header";
import { Aside } from "../../components/Aside.component/Aside";
import { CoinDetailsCard } from "../../components/CoinDetailsCard.component/CoinDetailsCard";
import { coinDetailsData } from "../../data/coinDetails";

export const Home = () => {
  return (
    <>
      <div className="contanier">
        <Header />
        <div className="flex">
          <Aside />
          <main className="main-contanier margin-t30">
            <div className="color-yellow flex gap20 flex-end">
              <span className="color-yellow-active">
                <AiOutlineCheckCircle />
              </span>
              <span className="color-yellow">Synchronized</span>
              <span>|</span>
            </div>

            <div className="flex gap20 margin-t30 flex-end">
              <div className="main-search-input ">
                <span className="search-icon">{/* <AiOutlineSearch /> */}</span>
                <input
                  type="text"
                  placeholder="Search Your Coin."
                  className="search-btn btn"
                />
              </div>

              <div className="main-add-delete-btn-section ">
                <div className="add-coin-btn btn color-yellow flex gap10">
                  <span className="color-yellow-active">
                    <AiOutlinePlus />
                  </span>{" "}
                  ADD COIN
                  <span className="part-color">|</span>
                  <span className="color-yellow-active">
                    <AiOutlineDelete />
                  </span>
                  DELETE
                </div>
              </div>
            </div>

            <h1 className="color-yellow fontW-500 ">Wallet 1</h1>
            <section className="coin-fliter-section flex search-btn  flex-space-btw margin-t30">
              <div className="color-light-grey">Total coins - 7</div>
              <div className="color-light-grey">
                Amount High-Low{" "}
                <span className="color-yellow">
                  <RiArrowDropDownLine />
                </span>
              </div>
            </section>

            <div className="divider margin-t10"></div>

            <section className="coins-detials-section margin-t20">
              <li className="coins-details flex flex-space-btw fontW-500">
                <ul className="color-dark-grey flex-grow w-20">Coin</ul>
                <ul className="color-dark-grey flex-grow w-20">Holding</ul>
                <ul className="color-dark-grey flex-grow w-20">Value</ul>
                <ul className="color-dark-grey flex-grow w-20">Price</ul>
                <ul className="color-dark-grey w-174">Action</ul>
              </li>
              {coinDetailsData.map((coinDetail) => (
                <CoinDetailsCard coinDetail={coinDetail} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </>
  );
};
