import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Gallary6 from "../imageshome/Rectangle 6gallery1.png";
import Gallary7 from "../imageshome/Rectangle 7gallery2.png";
import Gallary8 from "../imageshome/Rectangle 8gallery3.png";
import Gallary9 from "../imageshome/Rectangle 9gallery4.png";

export default function about() {
  return (
    <>
      <Navbar />
      <div className="container-fluid mobilebanner  p-0">
        <img
          src="imageshome/Group 4mobileheader.png"
          className="img-fluid"
          alt="top banner"
        />
      </div>

      <div className="container-fluid innerbanner">
        <div className="innerbannerheading">
          <p className="inerheading">हमारे बारे में</p>
        </div>
      </div>

      <div className="container iner-title ">
        <p className="innerpara">
          छत्तीसगढ़ बेरोजगारी भत्ता के लिए योग्यता / ( CG Berojgari Bhatta
          Eligibility ) – इस योजना के अंतर्गत बेरोजगारी भत्ता के लिए पात्र
          शिक्षित युवा को प्रथमतः एक वर्ष के लिए बेरोजगारी भत्ता देय होगा। यदि
          व्यक्ति विशेष को एक वर्ष की उक्त अवधि में लाभकारी नियोजन नहीं हो पाता
          है तो बेरोजगारी भत्ते की अवधि एक वर्ष के लिए और बढ़ाई जा सकेगी। किसी भी
          प्रकरण में यह अवधि दो वर्ष से अधिक नहीं होगी। आवेदक छत्तीसगढ़ का मूल
          निवासी हो। आवेदन किये जाने वाले वित्तीय वर्ष के 01 अप्रैल को आवेदक की
          आयु 18 वर्ष से 35 वर्ष के मध्य हो।
        </p>
        <p className="innerpara">
          आवेदक मान्यता प्राप्त बोर्ड से न्यूनतम हायर सेकंडरी ( 12वी उत्तीर्ण )
          शैक्षणिक योग्यताधारी हो। जिला रोजगार एवं स्वरोजगार मार्गदर्शन केंद्र
          में पंजीकृत हो एवं आवेदन के वर्ष के 01 अप्रैल को हायर सेकेंडरी अथवा
          उसके अधिक योग्यता में उसका रोजगार पंजीयन न्यूनतम दो वर्ष पुराना हो।
          आवेदक के आय का कोई स्त्रोत न हो एवं आवेदक के परिवार की समस्त स्त्रोतों
          से आय रूपये 2,50,000 /- वार्षिक से अधिक न हो परिवार से तात्पर्य है
          पति, पत्नी एवं आश्रित बच्चे एवं आश्रित माता – पिता।
        </p>
        <p className="innerpara">
          छत्तीसगढ़ राज्य में मुख्यमंत्री जी ने छत्तीसगढ़ के बेरोजगार अभ्यर्थियों
          को भत्ता देने का ऐलान किया है। इस योजना के तहत अभ्यर्थी को कम से कम
          12वी की परीक्षा उत्तीर्ण होना अनिवार्य है और रोजगार कार्यालय में गत 2
          वर्ष का पंजीयन होना आवश्यक है । आय प्रमाण पत्र जरुरी है।
        </p>
      </div>

      <div className="container-fluid thirdsection">
        <div className="container thirdone">
          <div className="container text-center p-5">
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
          <div className="container p-5 text-center">
            <button type="button" className="btn btn-warning btn-lg thirdbtn">
              और देखें
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
