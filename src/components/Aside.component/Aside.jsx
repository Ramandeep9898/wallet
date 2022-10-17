import "./aside.css";
import { RiOpenArmLine } from "react-icons/ri";
import { BsWallet2 } from "react-icons/bs";
import { MdMoreHoriz, MdOutlineImportExport } from "react-icons/md";
import { AiOutlineYoutube, AiOutlineSetting } from "react-icons/ai";

export const Aside = () => {
  return (
    <>
      <section className="aside-container">
        <li className="aside-items">
          <ui className="aside-item">
            <div className="aside-item-logo">
              <RiOpenArmLine />
            </div>
            <div className="aside-item-typo">Portfolio</div>
          </ui>
          <div className="divider margin-t20"></div>

          <ui className="wallet margin-t20">
            <div className="aside-heading">
              <div className="aside-item-logo ">
                <BsWallet2 />
              </div>

              <div className="aside-item-typo color-yellow">Wallets</div>
            </div>

            <div className="wallets-container ">
              <li className="wallets color-yellow-active margin-t10">
                <ui className="color-yellow-active ">Wallet 1</ui>
                <span>
                  <MdMoreHoriz />
                </span>
              </li>

              <li className="wallets color-yellow-inactive margin-t10">
                <ui className="color-yellow-inactive ">Wallet 2</ui>
                <span>
                  <MdMoreHoriz />
                </span>
              </li>

              <li className="wallets color-yellow-inactive margin-t10">
                <ui className="color-yellow-inactive ">Wallet 3</ui>
                <span>
                  <MdMoreHoriz />
                </span>
              </li>
            </div>
          </ui>

          <div className="divider margin-t20"></div>
          <ui className="aside-item margin-t20">
            <div className="aside-item-logo">
              <MdOutlineImportExport />
            </div>
            <div className="aside-item-typo">Last Transaction</div>
          </ui>
          <div className="divider margin-t20"></div>

          <ui className="aside-item margin-t20">
            <div className="aside-item-logo">
              <AiOutlineYoutube />
            </div>
            <div className="aside-item-typo">Tutorials</div>
          </ui>
          <div className="divider margin-t20"></div>
          <ui className="aside-item margin-t20">
            <div className="aside-item-logo">
              <AiOutlineSetting />
            </div>
            <div className="aside-item-typo">Settings</div>
          </ui>

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
