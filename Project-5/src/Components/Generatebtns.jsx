import React from 'react'


function Generatebtns(props) {
  function results(event){
    let x=event.target.innerHTML
 if(x=='Generate PDF'){
 
  const resultsstate={
    'pdfresult':true,
    'pptresult':false,
    'summaryresult':false,
    'captionresult':false,
    'chatresult':false
    }
    props.result(resultsstate)
 }
 if(x=='Generate PPT'){
  const resultsstate={
    'pdfresult':false,
    'pptresult':true,
    'summaryresult':false,
    'captionresult':false,
    'chatresult':false
    }
    props.result(resultsstate)
 }
 if(x=='Summarize'){
  const resultsstate={
    'pdfresult':false,
    'pptresult':false,
    'summaryresult':true,
    'captionresult':false,
    'chatresult':false
    }
    props.result(resultsstate)
 }
 if(x=='Translate'){
  const resultsstate={
    'pdfresult':false,
    'pptresult':false,
    'summaryresult':false,
    'captionresult':true,
    'chatresult':false
    }
    props.result(resultsstate)
 }
 if(x=='Start Chat'){
  const resultsstate={
    'pdfresult':false,
    'pptresult':false,
    'summaryresult':false,
    'captionresult':false,
    'chatresult':true
    }
    props.result(resultsstate)
 }

   }
   
  return (
    <>
      <button className={`btn btn-${props.btnstate} mb-5 mx-3`} onClick={(event)=>results(event)} >{props.btn}</button>
    </>
  )
}



export default Generatebtns

