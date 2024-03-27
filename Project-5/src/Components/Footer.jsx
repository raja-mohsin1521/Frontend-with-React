import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <>
      <FooterBox className="container-fluid pt-5">
  
  
  <div className="row text-center pb-3">
    <div className="col"><p>Copyright © 2023  | Design & Develop by <a   href=""></a></p></div>
  </div>
</FooterBox>
    </>
  )
}

export default Footer
const FooterBox=styled.footer`
    a{
        color: white; 
        text-decoration: underline;
    }
`