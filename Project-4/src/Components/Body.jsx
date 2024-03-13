import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import { useState } from "react";
import Top from "./Top";
const food = [
  {
    src: "Images/Ellipse 1 (1).png",
    title: "BOILED EGGS",
    disc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
    price: "$10.00",
    type:"Breakfast"
  },
  {
    src: "Images/Ellipse 1 (2).png",
    title: "RAMEN",
    disc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
    price: "$5.00",
    type:"Breakfast"
  },
  {
    src: "Images/Ellipse 1 (3).png",
    title: "GRILLED CHICKEN",
    disc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
    price: "$43.00",
    type:"Lunch"
  },
  {
    src: "Images/Ellipse 1 (4).png",
    title: "CAKE",
    disc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
    price: "$35.00",
    type:"Dinner"
  },
  {
    src: "Images/Ellipse 1 (5).png",
    title: "BURGER",
    disc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
    price: "$17.00",
    type:"Dinner"
  },
  {
    src: "Images/Ellipse 1 (6).png",
    title: "PANCAKE",
    disc: "Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ",
    price: "$20.00",
    type:"Lunch"
  },
];

function Body(props) {
  const [isActive, setIsActive] = useState(false);

  const [data, setData] = useState(food);
  const filter = [ "Breakfast", "Lunch", "Dinner"];
  function filtring(event) {
    const value = event.target.value.toLowerCase();
    console.log(value);
    let f = food.filter((food) => food.title.toLowerCase().includes(value));
    setData(f);
  }

  function btnfiltring(value) {
 let val=value.value.toLowerCase()
 console.log(val)
   
    let f = food.filter((food) => food.type.toLowerCase().includes(val));
    setData(f);
  }

  return (
    <>
      <Top filter={filter} search={filtring} btn={btnfiltring} />
      <Box className="container-fluid">
        <div className="row mainrow text-center ">
          {data.map((value, i) => (
            <Cards
              key={i}
              src={value.src}
              title={value.title}
              disc={value.disc}
              price={value.price}
            />
          ))}
        </div>
      </Box>
    </>
  );
}

export default Body;

const Box = styled.div`
  background: url("/Images/bg.png");
  min-height: 140vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .mainrow {
    width: 90%;
  }
`;
