import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import './contact.css';

function Footer() {
  return (
   
    <footer>
      
      <p>
        <ul>
          <h1 className='title'><u>CHECK OUT MY PROFILE:</u></h1>
          <a href="https://github.com/deeps-2003">
            <li className="logo">
            <h1 className='fontl'>GitHub url :-</h1>
              <VscGithubAlt />
            </li>
          </a>
          <br></br>
          <a href="https://www.linkedin.com/in/deepika-t-246418252">
            <li className="logo">
            <h1 className='fontl'>LinkedIn url :-</h1>
              <AiOutlineLinkedin />
            </li>
          </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;
