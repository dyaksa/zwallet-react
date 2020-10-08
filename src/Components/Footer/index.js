import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/footer.css";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-around align-items-center footer mt-5">
      <p>2020 Zwallet. All right reserved.</p>
      <section className="info__company">
        <p>+62 5637 8882 9901</p>
        <p>contact@zwallet.com</p>
      </section>
    </footer>
  );
};

export default Footer;
