import "./receive-model.css";
import { BsArrowRight, BsCheck2 } from "react-icons/bs";
import { useState } from "react";
import "../Aside.component/aside.css";
import { MdOutlineClose } from "react-icons/md";
import { Checkbox } from "./Checkbox";
//@ts-ignore
export const ReceiveModel = ({ modelOpen, setModelOpen }) => {
  const [checkState, setCheckState] = useState({
    check1: false,
  });

  const handleCheckbox = (e: any) => {
    if (typeof e.target.name === "string") {
      setCheckState((prev) => {
        const next = { ...prev };
        //@ts-ignore
        next[e.target.name] = !next[e.target.name];
        return next;
      });
    }
  };
  //@ts-ignore
  const { check1, check2, check3, check4 } = checkState;

  return (
    <>
      <main className="model">
        <section className="model-container">
          <div className="close">
            <span
              className="cursor"
              //@ts-ignore
              onClick={() => setModelOpen((wasOpened) => !wasOpened)}
            >
              <MdOutlineClose />
            </span>
          </div>
          <h1 className="color-white fontW-500">Receive</h1>
          <div className="slider-container flex margin-t30">
            <div className="flex flex-column align-center">
              {check1 && check2 && check3 ? (
                <div className="slider slider-active flex done-slider">
                  <BsCheck2 />
                </div>
              ) : (
                <>
                  <div className="active-slider-border ">
                    <div className="slider slider-active">1</div>
                  </div>
                </>
              )}
            </div>
            {check4 ? (
              <div className="seprate"></div>
            ) : (
              <div className="divider width"></div>
            )}

            {check4 === undefined ? (
              check1 && check2 && check3 ? (
                <div className="active-slider-border ">
                  <div className="slider slider-active">2</div>
                </div>
              ) : (
                <div className="slider inactive-slider">2</div>
              )
            ) : check1 && check2 && check3 && check4 ? (
              <div className="slider slider-active flex done-slider">
                <BsCheck2 />
              </div>
            ) : (
              <div className="slider inactive-slider">2</div>
            )}

            {check4 ? (
              <div className="seprate"></div>
            ) : (
              <div className="divider width"></div>
            )}

            {check4 ? (
              <div className="slider slider-active">3</div>
            ) : (
              <div className="slider inactive-slider">3</div>
            )}
          </div>
          <div className="typograpy flex margin-t10">
            <div className="margin-LR10 color-yellow-active">Device</div>
            {check1 && check2 && check3 ? (
              <div className="color-yellow-active">Verification</div>
            ) : (
              <div className="color-light-grey">Verification</div>
            )}
            {check4 ? (
              <div className="color-yellow-active">Receive</div>
            ) : (
              <div className="color-light-grey">Receive</div>
            )}
          </div>

          {check1 && check2 && check3 ? (
            ""
          ) : (
            <>
              <div className="heading margin-t30">
                <p className="color-light-grey">
                  Follow the instruction on device
                </p>
              </div>

              <div className="instruction-div flex margin-t10">
                <div className="flex gap20">
                  <span className="color-yellow">
                    <BsArrowRight />
                  </span>
                  <span>Select the Wallet On device</span>
                </div>
                <Checkbox
                  handleCheckbox={handleCheckbox}
                  checked={check1}
                  name="check1"
                />
              </div>
              <div className="instruction-div flex margin-t10">
                <div className=" flex gap20">
                  <span className="color-yellow">
                    <BsArrowRight />
                  </span>
                  <span>Select the Wallet On device</span>
                </div>

                {/* <label className="container"> */}
                {/* <input
                    name="check2"
                    type="checkbox"
                    onClick={handleCheckbox}
                  /> */}

                {/* <span className="checkmark"></span>
                </label> */}
                <Checkbox
                  handleCheckbox={handleCheckbox}
                  checked={check2}
                  name="check2"
                />
              </div>
              <div className="instruction-div flex margin-t10">
                <div className=" flex gap20">
                  <span className="color-yellow">
                    <BsArrowRight />
                  </span>
                  <span>Select the Wallet On device</span>
                </div>

                {/* <label className="container">
                  <input
                    name="check3"
                    type="checkbox"
                    onClick={handleCheckbox}
                  />
                  <span className="checkmark"></span>
                </label> */}
                <Checkbox
                  handleCheckbox={handleCheckbox}
                  checked={check3}
                  name="check3"
                />
              </div>
            </>
          )}
          {check4 === undefined ? (
            check1 && check2 && check3 ? (
              <>
                <div className="verification-section margin-t50">
                  <div className="verification-code">
                    25BKJNKNLJL58fjkdhfk26dnfds15
                  </div>
                </div>
                <div className="heading margin-t30">
                  <p className="color-light-grey">Verify address on device</p>
                </div>
                <div className="instruction-div flex margin-t10">
                  <div className=" flex gap20">
                    <span className="color-yellow">
                      <BsArrowRight />
                    </span>
                    <span>
                      Please match the address to be shown in X1 Wallet
                    </span>
                  </div>

                  {/* <label className="container"> */}
                  {/* <input
                      type="checkbox"
                      name="check4"
                      onClick={handleCheckbox}
                    /> */}
                  <Checkbox
                    handleCheckbox={handleCheckbox}
                    checked={check4}
                    name="check4"
                  />

                  {/* <span className="checkmark"></span>
                  </label> */}
                </div>
              </>
            ) : (
              ""
            )
          ) : (
            <>
              <div className="heading margin-t50">
                <p className="color-light-grey">Coin Address</p>
              </div>
              <div className="coin-address-section margin-t20  flex flex-space-btw">
                <div className="verification-code">
                  25BKJNKNLJL58fjkdhfk26dnfds15
                </div>
                <button className="copy-btn">Copy</button>
              </div>

              <div className="verifyed margin-t20">
                <p className="color-cta-blue padL20">
                  !<span className="padL20">address Verifyed</span>{" "}
                </p>
                <button className="outline-btn margin-t50">Re-verify</button>
              </div>
            </>
          )}

          {/* <>
          <div className="heading margin-t50">
            <p className="color-light-grey">Coin Address</p>
          </div>
          <div className="coin-address-section margin-t20  flex flex-space-btw">
            <div className="verification-code">
              25BKJNKNLJL58fjkdhfk26dnfds15
            </div>
            <button className="copy-btn">Copy</button>
          </div>

          <div className="verifyed margin-t20">
            <p className="color-cta-blue padL20">
              !<span className="padL20">address Verifyed</span>{" "}
            </p>
            <button className="outline-btn margin-t50">Re-verify</button>
          </div>
        </> */}
        </section>
      </main>
    </>
  );
};
