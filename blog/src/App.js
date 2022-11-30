/* eslint-disable */ // WARNING 메세지 없애기

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집"; // let, var, const
  let [글제목, 글제목변경] = useState([
    "남자코드 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]); // a는 state에 보관했던 자료, b는 state 변경도와주는 함수
  // let [글제목1, b] = useState("남자코드 추천");
  // let [글제목2, b] = useState("강남 우동맛집");
  // let [글제목3, b] = useState("파이썬 독학");
  let logo = "ReactBlog";
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  // let [modal, setModal] = useState(0); // 내가 한 방법
  let [modal, setModal] = useState(false); // 강의에서 한 방법

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4> {/* <h4>ReactBlog</h4> */}
      </div>
      <button
        onClick={() => {
          let ret = [...글제목];
          ret = ret.sort();
          글제목변경(ret);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          let copy = [...글제목]; // 아무리 copy를 수정해도 copy가 가르키는 화살표는 바뀌지 않음. -> [...이름]을 하면 화살표를 바꿔주세요가 됨.
          copy[0] = "여자코트 추천";
          글제목변경(copy);
          // 글제목[0] = "여자코트 추천";
          // 글제목변경(글제목);
          // 글제목변경(["여자코트 추천", "강남 우동맛집", "파이썬 독학"]);
        }}
      >
        글수정
      </button>
      {/* <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            ❤️
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal); // 강의에서 한 방법, !는 반대를 의미
            // moal이 true인데 !modal을 하면 false가 된다.
            // setModal(modal + 1); // 내가 한 방법
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {글제목.map(function (e, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {e}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                ❤️
              </span>
              {따봉[i]}
            </h4>
            {/* <h4>{글제목[i]}</h4> */}
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {/*{modal % 2 == 0 ? null : <Modal />}*/} {/* 내가 한 방법 */}
      {modal == true ? <Modal /> : null} {/* 강의에서 한 방법 */}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
