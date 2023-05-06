import React from "react";
import MobileHeader from "../imageshome/Group 4mobileheader.png";
import Gallary6 from "../imageshome/Rectangle 6gallery1.png";
import Gallary7 from "../imageshome/Rectangle 7gallery2.png";
import Gallary8 from "../imageshome/Rectangle 8gallery3.png";
import Gallary9 from "../imageshome/Rectangle 9gallery4.png";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
export default function home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="container-fluid mobilebanner p-0">
          <img src={MobileHeader} className="img-fluid" alt="top banner" />
        </div>
        <form
          className="container-fluid m-0 midbanners"
          onSubmit={() => {
            var Name, pass, sum;
            Name = document.getElementById(
              "ContentPlaceHolder1_txtUserName"
            ).value;
            pass = document.getElementById(
              "ContentPlaceHolder1_txtPassword"
            ).value;

            if (Name === "") {
              alert("Please enter user name.");
              document.getElementById("txtUserName").focus();
              return false;
            } else if (pass === "") {
              alert("Please enter password.");
              document.getElementById("txtPassword").focus();
              return false;
            } else if (sum === "") {
              alert("Please enter the captcha text.");
              document.getElementById("txtInput").focus();
              return false;
            }
          }}
        >
          <div className="loginform">
            <div className="mb-3">
              <div className="morebtn p-2">
                <h5 className="formlogin">लॉग इन</h5>
                <h5 className="formlogin">
                  <u>
                    <small>
                      <a href="CandidateRegform.aspx">नया खाता बनाए</a>
                    </small>
                  </u>
                </h5>
              </div>

              <input
                name="ctl00$ContentPlaceHolder1$txtUserName"
                type="text"
                maxlength="10"
                id="ContentPlaceHolder1_txtUserName"
                tabindex="1"
                className="form-control"
                placeholder="मोबाइल नंबर"
              />
              <input
                type="hidden"
                name="ctl00$ContentPlaceHolder1$hdnRanNo"
                id="ContentPlaceHolder1_hdnRanNo"
                value="Rozgarprj@#$2022"
              />
            </div>
            <div className="mb-3">
              <input
                name="ctl00$ContentPlaceHolder1$txtPassword"
                type="password"
                id="ContentPlaceHolder1_txtPassword"
                tabindex="2"
                className="form-control"
                placeholder="पासवर्ड"
                autocomplete="off"
              />
            </div>
            <div className="formlogin">
              <h5 className="formlogin">
                <u>
                  <small>
                    <a href="ForgotPassword.aspx">पासवर्ड भूल गए?</a>
                  </small>
                </u>
              </h5>
            </div>

            <div className="d-grid gap-2 p-2">
              <button
                type="submit"
                name="ctl00$ContentPlaceHolder1$butLogin"
                value="लॉग इन"
                // onclick={SubmitsEncry()}
                id="ContentPlaceHolder1_butLogin"
                tabindex="3"
                className="btn btn-success btn-block mb-4"
              >
                लॉग इन
              </button>
              <br />
            </div>
          </div>
        </form>
        <div className="container-fluid text-center p-4">
          <p className="secondtitle">नियम और शर्तें</p>
        </div>
        <div className="container-fluid cardsection p-4">
          <div className="row">
            <div className="col-lg-3">
              <div className="card newcard">
                <div className="card-body">
                  <div className="navthree">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.2167 9.46669L21.7667 3.83336C20.6667 3.23336 19.3333 3.23336 18.2333 3.83336L7.78332 9.46669C7.01665 9.88336 6.54999 10.6834 6.54999 11.6C6.54999 12.5 7.01665 13.3167 7.78332 13.7334L18.2333 19.3667C18.7833 19.6667 19.4 19.8167 20 19.8167C20.6 19.8167 21.2167 19.6667 21.7667 19.3667L32.2167 13.7334C32.9833 13.3167 33.45 12.5167 33.45 11.6C33.45 10.6834 32.9833 9.88336 32.2167 9.46669Z"
                        fill="#2D9D30"
                      />
                      <path
                        opacity="0.4"
                        d="M16.5167 21.3167L6.78333 16.45C6.03333 16.0834 5.16666 16.1167 4.46666 16.55C3.75 17 3.33333 17.75 3.33333 18.5834V27.7667C3.33333 29.35 4.21666 30.7834 5.63333 31.5L15.35 36.3667C15.6833 36.5334 16.05 36.6167 16.4167 36.6167C16.85 36.6167 17.2833 36.5 17.6667 36.2667C18.3833 35.8334 18.8 35.0667 18.8 34.2334V25.05C18.8167 23.45 17.9333 22.0167 16.5167 21.3167Z"
                        fill="#2D9D30"
                      />
                      <path
                        opacity="0.4"
                        d="M35.5333 16.55C34.8167 16.1167 33.95 16.0667 33.2167 16.45L23.5 21.3167C22.0833 22.0333 21.2 23.45 21.2 25.05V34.2333C21.2 35.0667 21.6167 35.8333 22.3333 36.2667C22.7167 36.5 23.15 36.6167 23.5833 36.6167C23.95 36.6167 24.3167 36.5333 24.65 36.3667L34.3667 31.5C35.7833 30.7833 36.6667 29.3667 36.6667 27.7667V18.5833C36.6667 17.75 36.25 17 35.5333 16.55Z"
                        fill="#2D9D30"
                      />
                    </svg>
                    <p className="loginbtnone m-0">पात्रता की शर्तें</p>
                  </div>
                  <ul className="points">
                    <li>छत्तीसगढ़ का मूल निवासी</li>
                    <li>01 अप्रैल को आयु 18 वर्ष से 35 वर्ष</li>
                    <li>12वीं परीक्षा उत्तीर्ण हो</li>
                    <li>01 अप्रैल को 2 वर्ष पुराना रोजगार पंजीयन</li>
                    <li>वार्षिक आय रूपये 2,50,000/- से अधिक न हो</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card newcard">
                <div className="card-body">
                  <div className="navthree">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M17.9167 4.0832C19.0833 3.09987 20.9667 3.09987 22.1 4.0832L24.7333 6.3332C25.2333 6.74987 26.1833 7.09987 26.85 7.09987H29.6833C31.45 7.09987 32.9 8.54987 32.9 10.3165V13.1499C32.9 13.8165 33.25 14.7499 33.6667 15.2499L35.9167 17.8832C36.9 19.0499 36.9 20.9332 35.9167 22.0665L33.6667 24.6999C33.25 25.1999 32.9 26.1332 32.9 26.7999V29.6332C32.9 31.3999 31.45 32.8499 29.6833 32.8499H26.85C26.1833 32.8499 25.25 33.1999 24.75 33.6165L22.1167 35.8665C20.95 36.8499 19.0667 36.8499 17.9333 35.8665L15.3 33.6165C14.8 33.1999 13.85 32.8499 13.2 32.8499H10.2833C8.51667 32.8499 7.06667 31.3999 7.06667 29.6332V26.7832C7.06667 26.1332 6.73334 25.1832 6.31667 24.6999L4.06667 22.0499C3.10001 20.8999 3.10001 19.0332 4.06667 17.8832L6.31667 15.2332C6.73334 14.7332 7.06667 13.7999 7.06667 13.1499V10.3332C7.06667 8.56654 8.51667 7.11654 10.2833 7.11654H13.1667C13.8333 7.11654 14.7667 6.76654 15.2667 6.34987L17.9167 4.0832Z"
                        fill="#F06464"
                      />
                      <path
                        d="M20 28.1167C19.0833 28.1167 18.3333 27.3667 18.3333 26.4501C18.3333 25.5334 19.0667 24.7834 20 24.7834C20.9167 24.7834 21.6667 25.5334 21.6667 26.4501C21.6667 27.3667 20.9333 28.1167 20 28.1167Z"
                        fill="#F06464"
                      />
                      <path
                        d="M20 22.8667C19.3167 22.8667 18.75 22.3 18.75 21.6167V13.55C18.75 12.8667 19.3167 12.3 20 12.3C20.6833 12.3 21.25 12.8667 21.25 13.55V21.6C21.25 22.3 20.7 22.8667 20 22.8667Z"
                        fill="#F06464"
                      />
                    </svg>
                    <p className="loginbtnone m-0">अपात्रता की शर्तें</p>
                  </div>
                  <ul className="points">
                    <li>एक परिवार से एक ही सदस्य</li>
                    <li>
                      पूर्व और वर्तमान मंत्रीं, विधानसभा सदस्य, महापौर, नगरीय
                      निकाय, जिला पंचायत अध्यक्ष के परिवार
                    </li>
                    <li>
                      शासकीय कर्मचारियों के परिवार के सदस्य (चतुर्थ श्रेणी या
                      ग्रुप-डी के कर्मचारियों को छोड़कर)
                    </li>
                    <li>
                      10,000 रूपये मासिक या उससे अधिक के पेंशन भोगी के परिवार
                    </li>
                    <li>आयकर दाता परिवार</li>
                    <li>
                      इंजीनियर, डॉक्टर, वकील, चार्टड एकाउंटेंट आदि पेशेवर के
                      परिवार
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card newcard">
                <div className="card-body">
                  <div className="navthree">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M34.9667 5.03338C33.5167 3.58338 31.4667 3.01672 29.4833 3.51672L13.15 7.60005C10.4 8.28338 8.28332 10.4167 7.59999 13.1501L3.51666 29.5001C3.01666 31.4834 3.58332 33.5334 5.03332 34.9834C6.13332 36.0667 7.58332 36.6667 9.08332 36.6667C9.54999 36.6667 10.0333 36.6167 10.5 36.4834L26.85 32.4001C29.5833 31.7167 31.7167 29.6001 32.4 26.8501L36.4833 10.5001C36.9833 8.51672 36.4167 6.46672 34.9667 5.03338Z"
                        fill="#2250A7"
                      />
                      <path
                        d="M20 26.4668C23.5714 26.4668 26.4667 23.5716 26.4667 20.0001C26.4667 16.4287 23.5714 13.5334 20 13.5334C16.4286 13.5334 13.5333 16.4287 13.5333 20.0001C13.5333 23.5716 16.4286 26.4668 20 26.4668Z"
                        fill="#2250A7"
                      />
                    </svg>
                    <p className="loginbtnone m-0">आवेदन की प्रक्रिया</p>
                  </div>
                  <ul className="points">
                    <li>केवल ऑनलाईन आवेदन</li>
                    <li>रोजगार कार्यालय के पंजीयन क्रमांक</li>
                    <li>मोबाइल नंबर अनिवार्य</li>
                    <li>
                      आधार अगर राशन कार्ड में ना हो तो आधार कार्ड अनिवार्य
                    </li>
                    <li>बैंक खाता जानकारी डी.बी.टी. के लिये</li>
                    <li>कौशल प्रशिक्षण हेतु चॉयस</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card newcard">
                <div className="card-body">
                  <div className="navthree">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.4"
                        d="M34.1667 16.9835H29.35C25.4 16.9835 22.1834 13.7668 22.1834 9.81683V5.00016C22.1834 4.0835 21.4334 3.3335 20.5167 3.3335H13.45C8.31669 3.3335 4.16669 6.66683 4.16669 12.6168V27.3835C4.16669 33.3335 8.31669 36.6668 13.45 36.6668H26.55C31.6834 36.6668 35.8334 33.3335 35.8334 27.3835V18.6502C35.8334 17.7335 35.0834 16.9835 34.1667 16.9835Z"
                        fill="#E09400"
                      />
                      <path
                        d="M26.3334 3.68346C25.6501 3.00013 24.4667 3.4668 24.4667 4.4168V10.2335C24.4667 12.6668 26.5334 14.6835 29.0501 14.6835C30.6334 14.7001 32.8334 14.7001 34.7167 14.7001C35.6667 14.7001 36.1667 13.5835 35.5001 12.9168C33.1001 10.5001 28.8001 6.15013 26.3334 3.68346Z"
                        fill="#E09400"
                      />
                      <path
                        d="M19.2167 20.7835L15.8834 17.4502C15.8667 17.4335 15.8501 17.4335 15.8501 17.4168C15.7501 17.3168 15.6167 17.2335 15.4834 17.1668C15.4667 17.1668 15.4667 17.1668 15.4501 17.1668C15.3167 17.1168 15.1834 17.1002 15.0501 17.0835C15.0001 17.0835 14.9667 17.0835 14.9167 17.0835C14.8167 17.0835 14.7001 17.1168 14.6001 17.1502C14.5501 17.1668 14.5167 17.1835 14.4834 17.2002C14.3501 17.2668 14.2167 17.3335 14.1167 17.4502L10.7834 20.7835C10.3001 21.2668 10.3001 22.0668 10.7834 22.5502C11.2667 23.0335 12.0667 23.0335 12.5501 22.5502L13.7501 21.3502V28.3335C13.7501 29.0168 14.3167 29.5835 15.0001 29.5835C15.6834 29.5835 16.2501 29.0168 16.2501 28.3335V21.3502L17.4501 22.5502C17.7001 22.8002 18.0167 22.9168 18.3334 22.9168C18.6501 22.9168 18.9667 22.8002 19.2167 22.5502C19.7001 22.0668 19.7001 21.2668 19.2167 20.7835Z"
                        fill="#E09400"
                      />
                    </svg>
                    <p className="loginbtnone m-0">दस्तावेज अपलोड</p>
                  </div>
                  <ul className="points">
                    <li>रोजगार पंजीयन कार्ड</li>
                    <li>10वीं एवं 12वीं की मार्कशीट/प्रमाण पत्र</li>
                    <li>आय प्रमाण पत्र</li>
                    <li>मूल निवासी प्रमाण पत्र</li>
                    <li>फोटो</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid thirdsection">
          <div className="container-fluid thirdone">
            <div className="container-fluid text-center p-5">
              <p className="loginbtntwo m-0">गैलरी</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 gallerypart">
                <img src={Gallary6} className="img-thumbnail" alt="" />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 gallerypart">
                <img src={Gallary7} className="img-thumbnail" alt="..." />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 gallerypart">
                <img src={Gallary8} className="img-thumbnail" alt="..." />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 gallerypart">
                <img src={Gallary9} className="img-thumbnail" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
