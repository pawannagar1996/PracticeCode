import { BsSendFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMap } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { ImMobile } from "react-icons/im";

import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

import "./contact.css"
import { useRef, useState } from "react";

function Contact(props) {

  const form = useRef()
  const fName = useRef()
  const eMail = useRef()
  const mobile = useRef()
  const subject = useRef()
  const message = useRef()
  const buttonRef = useRef()
  let [disabled , setDisabled]= useState(true)

  
  function buttonDisabled(e){
   if(e.target.value.length>0){
    console.log("pawan")

    setDisabled(false)
   }
   else{
    console.log("nagar")
    setDisabled(true)
   
   }
  
  // console.log(e.target.value)
  }
  console.log(disabled)


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k56teah', 'template_ne0fzz8', form.current, {
        publicKey: 'piDBPtKjgoXsxBAml',
      })
      .then(
        () => {
          console.log('SUCCESS!');
            toast('Send Message Successfully!');
            setDisabled(true)

        },
        (error) => {
          console.log('FAILED...', error.text);

        },
      );
      clearFormInput()
  };

  function clearFormInput(){
fName.current.value = "";
eMail.current.value = "";
mobile.current.value = "";
subject.current.value = "";
message.current.value = "";
  }

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
    <input type="text" id="fName" name="fName" ref={fName} placeholder="full name" onChange={(e)=>buttonDisabled(e)} required/>
    <input type="email" id="e-mail" name="e-mail" ref={eMail} placeholder="e-mail" required/>
    </div>
<div>
    <input type="tel" id="mobile" name="mobile" ref={mobile} placeholder="mobile number" required/>
    <input type="text" id="subject" name="subject" ref={subject} placeholder="subject" required/>
    </div>
<div>
    <textarea name="message" ref={message} placeholder="your message"></textarea>
    </div>
<div>

<div className="projectBtn">
          <button type="submit" onClick={sendEmail} ref={buttonRef}
          disabled = {disabled}
          className="magnatic"
          onMouseEnter={()=>{props.one()}} onMouseOut={()=>{props.two()}}
          >
            <span>send message</span> 
          <span><BsSendFill /></span>
          </button>
          <Toaster
         position="top-center"
         reverseOrder={false}
         gutter={8}
         containerClassName=""
         containerStyle={{}}
         toastOptions={{
           // Define default options
           className: '',
           duration: 5000,
           style: {
             background: '#363636',
             color: '#fff',
             fontSize:"1.6rem",
             textAlign:"center",
             width:"auto"}}}/>
        </div>

    </div>

          </form>

          </div>

          <div className="right">

            <div className="right-content">
                <h3>DON'T BE SHY !</h3>
                <p>Feel free to get in touch with me. I am always open to discussing new projects.
                  {/* , creative ideas or opportunities to be part of your visions. */}
                  </p>
            </div>
            
            {/* <div className="right-content right-content-icon">
               <div>
                <div className="head">Address</div><div><p className="para"><a href="#">C = 304 J. J. Coloney Tigri ,<br/>
                    New Delhi 110080 ,
                    India</a></p></div>
                </div>

               <div className="icon"><FaMap />
               </div>
            </div> */}

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
