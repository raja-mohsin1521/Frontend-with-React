import React, { useState } from "react";

import "./App.css";
import LandingBody from "./Components/LandingBody";
import Results from "./Components/Results";
import Working from "./Components/Working";
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Nav from "./Components/Nav";

const data={
  'BeforeTreatmentSkinCondition':'Average',

  'AfterTreatmentSkinCondition':'Good',

  'PercentageBefore':'  23%',

  'PercentageAfter':'70%',

  'Acne_Pimples':'The bounding area is showing the acne spots on skin.',

  'first_image_des':'Convallis duis sodales integer in arcu aliquet amet sed. Fusce gravida lectus proin nunc at congue. Posuere orci in luctus tincidunt. At nullam risus sed viverra ut. Consectetur arcu.',

  'second_image_des':'Convallis duis sodales integer in arcu aliquet amet sed. Fusce gravida lectus proin nunc at congue. Posuere orci in luctus tincidunt. At nullam risus sed viverra ut. Consectetur arcu.',

  'Conclusion':`Ultrices id nibh purus iaculis nisi. Vitae amet porttitor eget laoreet pharetra a. Placerat sed fringilla amet neque. Quis massa rutrum eget consequat amet in. Justo quam orci sed mi. Congue auctor nam nunc porta lacus.
  Lobortis fringilla ut pretium tellus amet eget lectus velit at. Varius phasellus adipiscing commodo tellus massa habitasse in sagittis. Ut ultricies augue posuere justo amet.`,

  'image_before':'/Images/Group 1000001436 (1).png',

  'image_after':'/Images/Group 1000001436.png',
  
}

function App() {
  const [ans, setAns] = useState(false);
  const [res,setRes]=useState(data);
  const [loading,setLoading]=useState(false);

  const[url1,setUrl1]=useState("")
  const[url2,setUrl2]=useState("")
  function landingscreen(){
    setAns(false);
  }
  function fetching(){
    setLoading(true)
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
  setLoading(false)
  setRes(response.json)
        })
 
  }
  return <>
<Nav/>
{!loading?<></>:<Loader/> }
  
  {!ans ?  <LandingBody  blur={loading} show={fetching} res={res} url1={setUrl1} url2={setUrl2}  /> : <Results hide={landingscreen} response={res}/>}
  <Working/>
  <About/>
  <Reviews/>
  <Footer/>
  </>;
  
}

export default App;
