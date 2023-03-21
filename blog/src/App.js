/* eslint-disable */ /* WARNING 문구 끄기 */

import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [date, setDate] = useState('2월 17일 발행');
  let [좋아요, 좋아요변경] = useState(0);
  // let [modal, setModal] = useState(false);
  let [click, setClick] = useState(0);

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
      <div className='list'>
        <h4>{글제목[0]}<span onClick={() => { 좋아요변경(좋아요 + 1) }}>❤️</span> {좋아요} </h4>
        <p>{date}</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>{date}</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {
          // setModal(true);
          setClick(click + 1)
        }}>{글제목[2]}</h4>
        <p>{date}</p>
      </div>
      
      {/* {
        modal == true ? <Modal /> : null
      } */}
      {
        click%2 == 1 ? <Modal /> : null
      }

      {/* <h4>{post}</h4> */}
    </div>
  );
}

// const Modal = () => {
//   return (
//     <div></div>
//   )
// }

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
