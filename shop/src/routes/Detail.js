import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

// let Btn = styled.button`
//   background: ${ props => props.bg };
//   color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding: 10px;
// `
// let NewBtn = styled.button(Btn)``

// let BlackBox = styled.div`
//   background: grey;
//   padding: 20px;
// `

// class Detail2 extends React.Component {
//   componentDidMount() {

//   }
//   componentDidUpdate() {

//   }
//   componentWillUnmount() {

//   }
// }

function Detail(props) {  

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x) {
    return x.id == id
  });
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);

  useEffect(() => { // mount, update시 코드 실행해줌
    // useEffect안에 있는 코드는 html 렌더링 후에 동작합니다.
    // - 어려운 연산
    // - 서버에서 데이터 가져오는 작업
    // - 타이머 장착하는거
    let a =setTimeout(() => { setAlert(false) }, 2000);
    return () => { // useEffect 동작 전에 실행됨
      // clearTimeout(a); // 타이머 제거해주는 함수
    }
  }, []) // []있어면 더 정확함
  // useEffect 실행 조건 넣을 수 있는 곳은 []
  // []안에 있는 state가 변할 때마다 실행해줌

  return (
    <div className="container">

      {/* <Btn bg="blue">버튼</Btn>
      <Btn bg="orange">버튼</Btn> */}
      {/* <BlackBox>
        <YellowBtn>버튼</YellowBtn>
      </BlackBox> */}

      {
        alert == true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
      }

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width={"100%"}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{ setTab(0) }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{ setTab(1) }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{ setTab(2) }}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent(props) {
  if(props.tab == 0) {
    return <div>내용0</div>
  } else if(props.tab == 1) {
    return <div>내용1</div>
  } else {
    return <div>내용2</div>
  }
}

export default Detail;
