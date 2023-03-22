import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from "./routes/Detail";

// import bg from './img/bg.png';
function App() {

  let [shoes] = useState(data);
  let [image] = useState(['https://codingapple1.github.io/shop/shoes1.jpg', 'https://codingapple1.github.io/shop/shoes2.jpg', 'https://codingapple1.github.io/shop/shoes3.jpg']);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            {/* <Nav.Link onClick={() => { navigate(1) }}>Home</Nav.Link> {/* 앞으로 한 페이지 이동 */}
            {/* <Nav.Link onClick={() => { navigate(-1) }}>Home</Nav.Link> 뒤로 한 페이지 이동 */}
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      {/* <Link style={{padding: '10px', textDecoration: 'none', color : 'black' }} to="/">홈</Link>
      <Link style={{padding: '10px', textDecoration: 'none', color : 'black' }} to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={
          <>
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
        </>
        } />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<p>멤버임</p>} />
          <Route path="location" element={<p>위치정보임</p>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        {/* <Route path="/about/member" element={<About />} />
        <Route path="/about/location" element={<About />} /> */}

        <Route path="*" element={<div>404</div>} />
      </Routes>
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

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
