import { BsSendFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMap } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { ImMobile } from "react-icons/im";

import emailjs from '@emailjs/browser';

import "./contact.css"
import { useRef } from "react";

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k56teah', 'template_ne0fzz8', form.current, {
        publicKey: 'piDBPtKjgoXsxBAml',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="wrapper">
        <div className="contact layout pTB100">
          <div className="main-title">
            <h1>
              get in <span>touch</span>
            </h1>
            <span className="main-title-title-bg">contact</span>
          </div>

          <div className="leftRight">

          <div className="left">

          <form action="" method="post" id="form1" ref={form} onSubmit={sendEmail}>
<div>
    <input type="text" id="fName" name="fName" placeholder="full name" required/>
    <input type="email" id="e-mail" name="e-mail" placeholder="e-mail" required/>
    </div>
<div>
    <input type="tel" id="mobile" name="mobile" placeholder="mobile number" required/>
    <input type="text" id="subject" name="subject" placeholder="subject" required/>
    </div>
<div>
    <textarea name="message" placeholder="your message"></textarea>
    </div>
<div>

<div className="projectBtn">
          <button type="submit"><span>send message</span> 
          <span><BsSendFill /></span>
          </button>
        </div>

    </div>

          </form>

          </div>

          <div className="right">

            <div className="right-content">
                <h3>DON'T BE SHY !</h3>
                <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>
            
            <div className="right-content right-content-icon">
               <div>
                <div className="head">Address</div><div><p className="para"><a href="#">C = 304 J. J. Coloney Tigri ,<br/>
                    New Delhi 110080 ,
                    India</a></p></div>
                </div>

               <div className="icon"><FaMap />
               </div>
            </div>

            <div className="right-content right-content-icon">
               <div>
                <div className="head">Mail Me</div><div><p className="para"><a href="#">pawannagar1996@gmail.com</a></p></div>
                </div>

               <div className="icon"><IoIosMailOpen /></div>
            </div>

            <div className="right-content right-content-icon">
               <div>
                <div className="head">call me</div><div><p className="para"><a href="#">+91 705 356 0066</a></p></div>
                </div>

               <div className="icon"><ImMobile /></div>
            </div>

            <div className="right-content social-icons"> 
                <span><a href="#"><RiInstagramFill /></a></span>
                <span><a href="#"><FaFacebook /></a></span>
                <span><a href="#"><FaLinkedin /></a></span>
                <span><a href="#"><FaGithub /></a></span>
            </div>

          </div>
        </div>

        </div>
      </div>
    </>
  );
}


export default Contact
