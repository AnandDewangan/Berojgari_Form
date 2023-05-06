import React from "react";
import Group4Header from '../imageshome/Group 4mobileheader.png';
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

export default function newAcc() {
  return (
    <>
    <Navbar />
      <div className="container-fluid mobilebanner  p-0">
        <img
          src={Group4Header}
          className="img-fluid"
          alt="top banner"
        />
      </div>

      <div className="container-fluid innerbanner">
        <div className="innerbannerheading">
          <p className="inerheading">नया खाता बनाएँ</p>
        </div>
      </div>
      <div className="container">
        <div className="srow clrleft mt-5 mb-5 login_cform">
          <div className="card card_shdaw">
            <div className="card-body">
              <div id="ContentPlaceHolder1_maindiv" className="srow clrleft">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <label className="form-label">मोबाईल नंबर </label>
                    <span
                      id="ContentPlaceHolder1_Label15"
                    >
                      *
                    </span>
                  </div>
                  <div className="col-md-6">
                    <div id="ContentPlaceHolder1_UpdatePanel17">
                      <input
                        name="ctl00$ContentPlaceHolder1$txt_mob"
                        type="number"
                        maxlength="10"
                        id="ContentPlaceHolder1_txt_mob"
                        className="form-control"
                      />

                      <span
                        id="ContentPlaceHolder1_RequiredFieldValidator11"
                      >
                        मोबाईल नंबर दर्ज करें
                      </span>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div id="ContentPlaceHolder1_UpdatePanel18">
                      <input
                        type="submit"
                        name="ctl00$ContentPlaceHolder1$btnSendOTP"
                        value="ओ.टी.पी. भेजें"
                        id="ContentPlaceHolder1_btnSendOTP"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="ContentPlaceHolder1_UpdatePanel1"></div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
}

