/* eslint-disable */ /* WARNING 문구 끄기 */

import React, { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [date, setDate] = useState('2월 17일 발행');
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  // let [modal, setModal] = useState(0); // 내가 한 모달 띄우기 숙제
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // [1,2,3].map(function(a) {
  //   // array 자료 갯수만큼 함수안의 코드 실행해줌
  //   // 함수의 파라미터는 array안에 있던 자료임
  //   // return에 뭐 적으면 array로 담아줌
  // })


  // let num = [1,2];

  // let [a,c] = [1,2]; // Destructuring 문법
  // let a = num[0];
  // let c = num[1];

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
        {/* style 넣을 땐 style = { { 스타일명 : '값' } } */}
      </div>
      {/* <button onClick={() => { 글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학'])}}>글 변경</button> */}
      {/* <button onClick={() => { 글제목[0] = '여자코트 추천'; 글제목변경(글제목) }}>글 변경</button> */} {/* 원본은 보존하는게 좋기에 잘 사용하지 않음 */}
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>글 변경</button>
      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>
      {/* <div className='list'>
        <h4>{글제목[0]}<span onClick={() => { 좋아요변경(좋아요 + 1) }}>❤️</span> {좋아요} </h4>
        <p>{date}</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{date}</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {
          setModal(!modal);
          // setModal(modal + 1)
        }}>{글제목[2]}</h4>
        <p>{date}</p>
      </div> */}

      {
        글제목.map(function(title, i) {
          return (
            <div className='list'>
              <h4 onClick={() => { setModal(!modal); setTitle(i) }}>{title}<span onClick={(e) => { 
                e.stopPropagation(); // 상위 HTML로 퍼지는 이벤트버블링을 막고싶으면
                let copy = [...좋아요];
                copy[i] = copy[i] + 1;
                좋아요변경(copy);
                }}>❤️</span> {좋아요[i]} </h4>
              <p>{date}</p>
              <button onClick={() => {
                let copy = [...글제목]
                copy.splice(i, 1);
                글제목변경(copy);
              }}>글삭제</button>
            </div>
          )
        }) 
      }
      
      <input onChange={(e) => { 입력값변경(e.target.value) }}/>
      {/* <button onClick={() => { 글제목.unshift(입력값) }}>등록</button> */}
      <button onClick={()=> {
        let copy = [...글제목]
        copy.unshift(입력값)
        글제목변경(copy)
      }}>글 등록</button>
      
      {
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} title={title}/> : null
      }
      {/* {
        modal%2 == 1 ? <Modal /> : null
      } */} 

      {/* <h4>{post}</h4> */}
    </div>
  );
}

// const Modal = () => {
//   return (
//     <div></div>
//   )
// }

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        props.글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학']);
      }}>글수정</button>
    </div>
  )
}

// class Modal2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name : 'kim',
//       age : 20
//     }
//   }
//   render() {
//     return (
//       <div>
//         안녕 {this.state.name}
//         <button onClick={() => {
//           this.setState({ name : 'park'}) // state 수정
//         }}>버튼</button>
//       </div>
//     )
//   }
// }

export default App;
