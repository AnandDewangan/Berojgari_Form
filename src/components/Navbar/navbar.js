import React from 'react'
import TitleBanner from "../imageshome/Titlebanner1.png";
import BerojgariPdf from "../Pdf/Berojgaribatta_guidelines.pdf";
import FAQ from "../Pdf/FAQ.pdf";

export default function navbar() {
  return (
    <div>
        <header>
        <nav className="navbar navbar-expand-lg p-0 fixed-top bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler border-0 collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
              <div className="infomails">
                <ul className="">
                  <li>
                    <a href="#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                          stroke="#F06464"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                          stroke="#F06464"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <a href='mailto:employmentcg@gmail.com'>employmentcg@gmail.com</a>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <svg
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z"
                          stroke="#F06464"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11 4.5H7"
                          stroke="#F06464"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.00001 18.1C9.85605 18.1 10.55 17.406 10.55 16.55C10.55 15.694 9.85605 15 9.00001 15C8.14397 15 7.45001 15.694 7.45001 16.55C7.45001 17.406 8.14397 18.1 9.00001 18.1Z"
                          stroke="#F06464"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      +0771 222 1039
                    </a>
                  </li>
                </ul>
              </div>

              <div className="topborder">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      होम
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/about"
                      title="हमारे बारे में"
                    >
                      हमारे बारे में
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={BerojgariPdf}
                      target="_blank"
                      title="Contact"
                    >
                      मार्गदर्शिका
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/newUser"
                      title="Register"
                    >
                      नया खाता बनाएँ
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/complaints"
                      title="Complaint"
                    >
                      शिकायत
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={FAQ}
                      target="_blank"
                      title="FAQ"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact" title="Contact">
                      संपर्क
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navtwo">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.14 22.12C17.26 22.38 16.22 22.5 15 22.5H8.99998C7.77998 22.5 6.73999 22.38 5.85999 22.12C6.07999 19.52 8.74998 17.47 12 17.47C15.25 17.47 17.92 19.52 18.14 22.12Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 19.28 3.14 21.35 5.86 22.12C6.08 19.52 8.75 17.47 12 17.47C15.25 17.47 17.92 19.52 18.14 22.12C20.86 21.35 22 19.28 22 15.5V9.5C22 4.5 20 2.5 15 2.5ZM12 14.67C10.02 14.67 8.42 13.06 8.42 11.08C8.42 9.10002 10.02 7.5 12 7.5C13.98 7.5 15.58 9.10002 15.58 11.08C15.58 13.06 13.98 14.67 12 14.67Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.58 11.08C15.58 13.06 13.98 14.67 12 14.67C10.02 14.67 8.41998 13.06 8.41998 11.08C8.41998 9.10002 10.02 7.5 12 7.5C13.98 7.5 15.58 9.10002 15.58 11.08Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="loginbtn m-0">
                  <b>
                    <a href="Login.aspx" title="लॉग इन">
                      लॉग इन
                    </a>
                  </b>{" "}
                  <span>
                    <u>
                      <a href="ForgotPassword.aspx" title="पासवर्ड भूल गए?">
                        पासवर्ड भूल गए?
                      </a>
                    </u>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </nav>

        <div className="container-fluid desktopbanner p-0">
          <img src={TitleBanner} className="img-fluid" alt="top banner" width="100%"/>
        </div>
      </header>
    </div>
  )
}
