import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import data from './data';

// import bg from './img/bg.png';
function App() {

  let [shoes] = useState(data);
  let [image] = useState(['https://codingapple1.github.io/shop/shoes1.jpg', 'https://codingapple1.github.io/shop/shoes2.jpg', 'https://codingapple1.github.io/shop/shoes3.jpg'])

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <div className='main-bg' style={{backgroundImage : 'url(' + bg + ')'}}></div> */}
      <div className="main-bg"></div>
      <Container>
        <Row>
          {
            shoes.map(function(e, i) {
              return (
                <Card shoes={shoes} image={image} i={i}/>
              )
            })
          }
        </Row>
    </Container>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      <img src={props.image[props.i]} width={'80%'}/>
      {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} /> public 폴더 안에 있는 이미지 쓰는 권장방식 */}
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
    </Col>
  )
}

export default App;
