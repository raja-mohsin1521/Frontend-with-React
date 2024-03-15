import React, { useState } from "react";

import "./App.css";
import LandingBody from "./Components/LandingBody";
import Results from "./Components/Results";
import Working from "./Components/Working";
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

function App() {
  const [ans, setAns] = useState(false);
  const [res,setRes]=useState();


  const[url1,setUrl1]=useState("")
  const[url2,setUrl2]=useState("")
  function fetching(){
    let data = new FormData();
    data.append("image_before", url1);
    data.append("image_after", url2);
    let p = fetch('http://178.16.141.33:8500/improvement',{
            method: "POST",
          
    body:data,
    redirect: 'follow'}
    )
        p.then((x) => {

            return x.json()

        })
.then(response =>{ 
  setAns(true);
       setRes(response)
    console.log(res)
        })
 
  }
  return <>

{ans?<></>:<Loader/>}
  
  {!ans ? <LandingBody show={fetching} res={res} url1={setUrl1} url2={setUrl2}  /> : <Results />}
  <Working/>
  <About/>
  <Reviews/>
  <Footer/>
  </>;
  
}

export default App;
