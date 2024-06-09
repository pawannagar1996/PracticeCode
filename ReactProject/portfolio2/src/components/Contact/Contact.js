import "./contact.css"

function Contact() {
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

          <form action="" method="get" id="form1">
<div>
    <input type="text" id="fName" name="fName" placeholder="full name" required/>
    <input type="email" id="e-mail" name="e-mail" placeholder="e-mail" required/>
    </div>
<div>
    <input type="tel" id="mobile" name="mobile" placeholder="mobile number" required/>
    <input type="text" id="subject" name="subject" placeholder="subject" required/>
    </div>
<div>
    <textarea placeholder="your message"></textarea>
    </div>
<div>

<div className="projectBtn">
          <button><span>send message</span> 
          <span>i</span>
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

               <div className="icon">Icon</div>
            </div>

            <div className="right-content right-content-icon">
               <div>
                <div className="head">Mail Me</div><div><p className="para"><a href="#">pawannagar1996@gmail.com</a></p></div>
                </div>

               <div className="icon">Icon</div>
            </div>

            <div className="right-content right-content-icon">
               <div>
                <div className="head">call me</div><div><p className="para"><a href="#">+91 705 356 0066</a></p></div>
                </div>

               <div className="icon">Icon</div>
            </div>

            <div className="right-content social-icons"> 
                <span>i</span>
                <span>i</span>
                <span>i</span>
                <span>i</span>
            </div>

          </div>
        </div>

        </div>
      </div>
    </>
  );
}


export default Contact
