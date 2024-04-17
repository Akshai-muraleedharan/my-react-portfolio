import React from "react";
import "./Home.css"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

function Home() {
  return (
    <div className="container">
      <section className="wrapper display-grid">
        <div className="content-wrapper">
          <h3>Hi there.</h3>
          <h1>I'm Akshai Muraleedharan</h1>
          <p>Fullstack web developer and UX/UI designer</p>
          <div style={{ marginTop: "15px" }}>
            <span className="facebook"><FaFacebook /></span>
            <span className="linkindn"><FaLinkedin /></span>
            <span className="instagram"><FaInstagram /></span>
            <span className="twitter"><FiTwitter /></span>
          </div>
          <div className="btn-wrapper">
            <button >Hire Me</button>
            <button >Download Cv</button>
          </div>

        </div>
        <div className="photo">photo</div>

      </section>
    </div>
  )
}


export default Home;