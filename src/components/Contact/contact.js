import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

export default function contact() {
  return (
    <>
    <Navbar />
      <div className="container-fluid mobilebanner p-0">
        <img
          src="images/Group 4mobileheader.png"
          className="img-fluid"
          alt="top banner"
        />
      </div>

      <div className="container-fluid innertwobanner">
        <div className="innertwobannerheading">
          <p className="inerheading">संपर्क</p>
        </div>
      </div>
      <div className="container-fluid mapside p-5">
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.824213277521!2d81.79281321595553!3d21.159392850282334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28c6be51cf96c3%3A0xe40473fed9c102cb!2sMahanadi%20Bhawan!5e0!3m2!1sen!2sin!4v1679545332466!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4 innerborder">
              <div className="container">
                <p className="adressinner m-0">Address:</p>
                <p className="points">
                  Mahanadi Bhavan, Sector 19, Naya Raipur Chhattisgarh
                </p>
              </div>
            </div>
            <div className="col-lg-4 innerborder">
              <div className="container">
                <p className="adressinner m-0">Call:</p>
                <p className="points">+0771 222 1039</p>
              </div>
            </div>
            <div className="col-lg-4 innerborder">
              <div className="container">
                <p className="adressinner m-0">Email:</p>
                <p className="points">employmentcg@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
}
