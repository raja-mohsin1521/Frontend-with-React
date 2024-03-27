import React, { useState } from "react";
import Service from "./Service";
import ServiceBox from "./ServiceBox";
import GenetationResult from "./Results/GenetationResult";
import Generateppt from "./Results/Generateppt";
import CaptionResult from "./Results/CaptionResult";
import SummarizeResult from "./Results/SummarizeResult";
import ChatBox from "./Results/ChatBox";

function ServicsContainer(props) {



 



  const [img, setImg] = useState("");
  const [heading, setHeading] = useState("");
  const [para, setPara] = useState("");
  const [btn1, setBtn1] = useState("");
  const [btn2, setBtn2] = useState("");
  const [btnState2, setBtnState2] = useState("");
  const [secondBtn, setSecondBtn] = useState(false);
  const [selected, setSelected] = useState(false);
  const [url,setUrl]=useState('')
  const [selectBtnTexts, setSelectBtnTexts] = useState({
    "Video Converter": "Select",
    "Summarization Studio": "Select",
    "Caption Translator": "Select",
    "Chat Assistant": "Select",
  });

  function selectService(event, title) {
    const updatedSelectBtnTexts = {
      "Video Converter": "Select",
      "Summarization Studio": "Select",
      "Caption Translator": "Select",
      "Chat Assistant": "Select",
    };
    updatedSelectBtnTexts[title] = "Selected";
    setSelectBtnTexts(updatedSelectBtnTexts);
    const resultsstate={
      'pdfresult':false,
      'pptresult':false,
      'summaryresult':false,
      'captionresult':false,
      'chatresult':false
      }
      setresult(resultsstate)
  
    servicebox(title);
    setSelected(true);

  }

  function servicebox(a) {
    // Your existing code to set states based on the selected service title
    if (a === "Video Converter") {


      setImg("/pics/convert.jpeg");
      setHeading("Video Converter");
      setPara(
        `Revolutionary Video-to-PDF/Video-to-PPT Transformation! Turn any Video link into a stunning PDF presentation effortlessly. Unleash your creativity with our seamless and user-friendly conversion tool!`
      );
      setBtn1("Generate PDF");
      setBtn2("Generate PPT");
      setBtnState2("danger");
      setSecondBtn(true);
     
     
    }
    if (a === "Summarization Studio") {
      setImg("/pics/summary.jpeg");
      setHeading("Summarization Studio");
      setPara(
        `Transform any Video URL into a Brilliantly Summarized Paragraph by ChatGPT. Unleash the Power of Artificial Intelligence for Instant, Engaging Content!`
      );
      setBtn1("Summarize");
      setSecondBtn(false);
     
    }
    if (a === "Caption Translator") {
      setImg("/pics/caption.jpeg");
      setHeading("Caption Translator");
      setPara(
        `Effortlessly Translate Video Captions to English! Seamlessly Convert Video Content into Engaging English Narratives. Uncover the World of Communication with AI-Powered Language Mastery!`
      );
      setBtn1("Translate");
      setSecondBtn(false);
      
    }
    if (a === "Chat Assistant") {
      setImg("/pics/chat.jpeg");
      setHeading("Chat Assistant");
      setPara(
        `Seamlessly Blend Video Insights and Chat Queries! Transform Video URLs into Dynamic Conversations with ChatGPT. Your Gateway to Effortless Communication, Enhanced by AI-Powered Understanding!`
      );
      setBtn1("Start Chat");
      setSecondBtn(false);
      
    }
  }
  const resultsstate={
    'pdfresult':false,
    'pptresult':false,
    'summaryresult':false,
    'captionresult':false,
    'chatresult':false
    }


const [result,setresult]=useState(resultsstate)


  return (
    <>
      <div className="container screen6" id='services'>
        <div className="row text-center py-5">
          <div className="offset-md-2 col-md-8">
            <h1 className="display-4 mt-5 pt-5">Services</h1>
          </div>
        </div>
        <div className="row justify-content-around">
          <Service
            src="https://ezitech.org/wp-content/uploads/2022/11/lqAnYIWetmy83To78KmRLYFY2Pb6INY7nVqpfrfE.jpg"
            click={(event) => selectService(event, "Video Converter")}
            selectbtntext={selectBtnTexts["Video Converter"]}
            title="Video Converter"
          />
          <Service
            src="https://ezitech.org/wp-content/uploads/2022/10/app-tips-google-my-business-00-hero.jpg"
            click={(event) => selectService(event, "Summarization Studio")}
            selectbtntext={selectBtnTexts["Summarization Studio"]}
            title="Summarization Studio"
          />
          <Service
            src="https://ezitech.org/wp-content/uploads/2022/10/what-is-copywriter-hero.png"
            click={(event) => selectService(event, "Caption Translator")}
            selectbtntext={selectBtnTexts["Caption Translator"]}
            title="Caption Translator"
          />
          <Service
            src="https://ezitech.org/wp-content/uploads/2022/10/post-3.jpg"
            img={img}
            click={(event) => selectService(event, "Chat Assistant")}
            selectbtntext={selectBtnTexts["Chat Assistant"]}
            title="Chat Assistant"
          />
        </div>
        <div className="row">
          {selected ? (
            <ServiceBox
      result={setresult}
              url={setUrl}
              btn1={btn1}
              btn2={btn2}
              secondbtn={secondBtn}
              btnState2={btnState2}
              heading={heading}
              para={para}
              img={img}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="row text-center">
          {result.pdfresult?<GenetationResult/>:<></>}
          {result.pptresult?<Generateppt/>:<></>}
          {result.summaryresult?<SummarizeResult/>:<></>}
          {result.captionresult?<CaptionResult/>:<></>}
          {result.chatresult?<ChatBox/>:<></>}
          
          

            
      

        </div>
      </div>
    </>
  );
}

export default ServicsContainer;
