import React,{useState} from 'react'
import styles from'../Components/main.module.css'
import { MdOutlineMessage } from "react-icons/md";


import { IoCall } from "react-icons/io5";






export default function Main() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const onSubmit =() =>{
let names=document.getElementById('name')
names.value
let mail=document.getElementById('email')
mail.value
let message=document.getElementById('text')
mail.value
   
    setName(names.value)
    setEmail(mail.value)
    setText(message.value)
  }
  console.log(name+"    "+email+"     "+text)
  return (


    <>
      <div className="container">
        <div className="row ">
        <h1 className={`${styles.mainheading}`}>CONTACT US</h1>
            <p className={`${styles.mainpara}`}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            <div className="col-md-6 col-12">
           
            <div className='row justify-content-around'>
                <div className="col">
                <button className={`${styles.smallbtn}`}><MdOutlineMessage /> VIA SUPPORT CHAT</button>
                <button className={`${styles.smallbtn}`}><IoCall />  VIA CALL</button>
                </div>
                
   <button className={`${styles.bigbtn}`}><MdOutlineMessage /> VIA EMAIL FORM</button>
            </div>
            <div className="row ">
              <div className="col">
                <label htmlFor="name" className={`${styles.lable}`}>Name</label><br />
                <input type="text" className={`${styles.input}`} name="name" id="name" required /><br />
                <label htmlFor="name" className={`${styles.lable}`}>E-mail</label><br />
                <input type="text" className={`${styles.input}`} name="name" id="email" required /><br />
                <label htmlFor="text" className={`${styles.lable}`}>Message</label><br />
                <textarea name="text" className={`${styles.input}`} id="text" cols="70" rows="10" required></textarea>
                <div className="row text-end"> <div className="col">
                <button onClick={onSubmit} className={`${styles.smallbtn}`}>Submit</button></div>  </div>
             
              </div>
            </div>

            </div>
            <div className="col-md-6 col-12">
              <img src="/Images/Service 24_7-pana 1 (1).svg" className='img-fluid' alt="" />
            </div>
            
           
        </div>
      </div>
    </>
  )
}
