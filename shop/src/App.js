import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { createContext, lazy, Suspense, useEffect, useState } from "react";
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from "axios";
import { useQuery } from "react-query";
import Input from "./Input";

// import Detail from "./routes/Detail";
// import Cart from "./routes/Cart";
const Detail = lazy(() => import('./routes/Detail'));
const Cart = lazy(() => import('./routes/Cart'));

// import bg from './img/bg.png';
function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify( [] ))
  }, [])

  let obj = {name : 'kim'}
  // localStorage.setItem('data', obj); // array/object 저장하려면 JSON으로 바꾸면 됩니다.
  localStorage.setItem('data', JSON.stringify(obj)); // array/object -> JSON으로 변환
  let 꺼낸거 = localStorage.getItem('data')
  console.log(JSON.parse(꺼낸거).name); // JSON->array/object로 변환은 JSON.parse()
  
  let [shoes, setShoes] = useState(data);
  // let [재고, 재고변경] = useState([10,11,12]);
  let navigate = useNavigate();
  let [click, setClick] = useState(0);

  let result = useQuery('작명', ()=>{ // 성공/실패/로딩중 쉽게 파악가능
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      return a.data
    })
    // { staleTime : 2000 } refetch되는 시간
  })

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            {/* <Nav.Link onClick={() => { navigate(1) }}>Home</Nav.Link> {/* 앞으로 한 페이지 이동 */}
            {/* <Nav.Link onClick={() => { navigate(-1) }}>Home</Nav.Link> 뒤로 한 페이지 이동 */}
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {/* { result.isLoading ? '로딩중' : result.data.name} */}
            { result.isLoading && '로딩중'}
            {/* { result.error ? '에러' : result.data.name} */}
            { result.error && '에러'}
            {/* { result.data ? '성공' : result.data.name} */}
            { result.data && result.data.name}
          </Nav>
        </Container>
      </Navbar>
      
      {/* <Link style={{padding: '10px', textDecoration: 'none', color : 'black' }} to="/">홈</Link>
      <Link style={{padding: '10px', textDecoration: 'none', color : 'black' }} to="/detail">상세페이지</Link> */}
      <Suspense fallback={<div>로딩중임</div>}>
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
                        <Card shoes={shoes[i]} i={i} navigate={navigate} />
                      )
                    })
                  }
                </Row>
            </Container>
            <button onClick={()=> {
              setClick(click + 1);
              if(click === 1) {
                <Loding />
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                })
                .catch(() => {
                  console.log('실패함');
                })
              } else if(click === 2) {
                axios.get('https://codingapple1.github.io/shop/data3.json')
                .then((result) => {
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                })
                .catch(() => {
                  console.log('실패함');
                })
              } else {
                alert('더이상 상품이 없습니다.')
              }
            }}>더보기</button>
          </>
          } />
          <Route path="/detail/:id" element={
              <Detail shoes={shoes} />
          } />

          <Route path="/input" elemment={<Input />} />
          <Route path="/cart" element={<Cart />} />
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
      </Suspense>

    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4" onClick={()=>{ props.navigate('/detail/' + (props.i)) }}>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width={'80%'} />
      {/* <img src={process.env.PUBLIC_URL + '/logo192.png'} /> public 폴더 안에 있는 이미지 쓰는 권장방식 */}
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </div>
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

function Loding() {
  return (
    <p>로딩중입니다~!</p>
  )
}

export default App;
