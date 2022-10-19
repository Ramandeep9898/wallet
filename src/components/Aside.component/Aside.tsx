import "./aside.css";
import { RiOpenArmLine } from "react-icons/ri";
import { BsWallet2 } from "react-icons/bs";
import { MdMoreHoriz, MdOutlineImportExport } from "react-icons/md";
import { AiOutlineYoutube, AiOutlineSetting } from "react-icons/ai";

export const Aside = () => {
  return (
    <>
      <section className="aside-container margin-t30">
        <li className="aside-items">
          <ul className="aside-item">
            <div className="aside-item-logo">
              <RiOpenArmLine />
            </div>
            <div className="aside-item-typo">Portfolio</div>
          </ul>
          <div className="divider margin-t20"></div>

          <ul className="wallet margin-t20">
            <div className="aside-heading">
              <div className="aside-item-logo ">
                <BsWallet2 />
              </div>

              <div className="aside-item-typo color-yellow">Wallets</div>
            </div>

            <div className="wallets-container ">
              <li className="wallets color-yellow-active margin-t10">
                <ul className="color-yellow-active ">Wallet 1</ul>
                <span>
                  <MdMoreHoriz />
                </span>
              </li>

              <li className="wallets color-yellow-inactive margin-t10">
                <ul className="color-yellow-inactive ">Wallet 2</ul>
                <span>
                  <MdMoreHoriz />
                </span>
              </li>

              <li className="wallets color-yellow-inactive margin-t10">
                <ul className="color-yellow-inactive ">Wallet 3</ul>
                <span>
                  <MdMoreHoriz />
                </span>
              </li>
            </div>
          </ul>

          <div className="divider margin-t20"></div>
          <ul className="aside-item margin-t20">
            <div className="aside-item-logo">
              <MdOutlineImportExport />
            </div>
            <div className="aside-item-typo">Last Transaction</div>
          </ul>
          <div className="divider margin-t20"></div>

          <ul className="aside-item margin-t20">
            <div className="aside-item-logo">
              <AiOutlineYoutube />
            </div>
            <div className="aside-item-typo">Tutorials</div>
          </ul>
          <div className="divider margin-t20"></div>
          <ul className="aside-item margin-t20">
            <div className="aside-item-logo">
              <AiOutlineSetting />
            </div>
            <div className="aside-item-typo">Settings</div>
          </ul>

          <div className="btn-container margin-t30">
            <button className="outline-btn">Make Beneficiary</button>
          </div>
        </li>
        <div className="support-div">
          <button className="support-btn">Support</button>
        </div>
      </section>
    </>
  );
};