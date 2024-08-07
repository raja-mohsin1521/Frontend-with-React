import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo,removeAllTodo } from "../Features/Todo/todoSlice";
import { Col, Container, InputGroup, Row,Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";

function Todo() {
  const [text, setText] = useState(null);

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);

  function changeText(event) {
    setText(event.target.value);
    console.log(todo);
  }
  function addToList() {
    if (text != "") {
      dispatch(addTodo(text));
      setText('')
    }
  }


  return (
    <TodoApp>
    <Container fluid >
      <Row className="text-center">
<h1 className="display-3 mb-5">Todo List</h1>
<p>Total Items: {todo.length}</p>
        <Col>
          <input
            type="text"
            onChange={(event) => changeText(event)}
            value={text}
            name=""
            id=""
          />
          <Button variant="success" className="mx-2" onClick={addToList}>Add</Button>
          <Button  variant="danger" onClick={()=>dispatch(removeAllTodo())}>Clear</Button>
        </Col>
      </Row>
      <Row className="  mt-4 item-list">
        <Col>
        <ol>
        {
        todo.length==0?<p className="text-center">No Items</p>:
   

      
        todo.map((data) => (
        <Row key={data.id} className="item my-4 ">
           
          <Col xs={6}>
          <li className="text-capitalize pt-2">{data.text}</li>

          </Col>
          <Col xs={6} className="text-end">
          <Button variant="warning" onClick={()=>dispatch(removeTodo(data.id))}>
          <MdDelete />  </Button> 
          </Col>
        </Row>
      ))}
        </ol>
        </Col>
      </Row>
      
    </Container>
    </TodoApp>

    
  );


}
const TodoApp=styled.div`

h1{
font-weight:500;
color:grey;}
input{
width:40%;
padding:8px 10px;
}
li{
 list-style-type: decimal; 

}
margin-top:30px;
.item-list {
  height: 65vh;
  overflow-y: scroll;
}

.item{
 border-radius: 3px;
 color:white;
  padding: 10px;
  background-color: black;
  width:55%;
  margin:auto;
  border-radius:10px;
  }
  
`
export default Todo;

