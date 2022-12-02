/* eslint-disable */ // WARNING 메세지 없애기
import "./App.css";
import React, { useState } from "react";

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
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

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
                setTitle(i);
              }}
            >
              {e}
              <span
                onClick={(e) => {
                  e.stopPropagation(); // 이게 없으면 좋아요를 누르면 상위에 있는 onClick이 실행이 되면서 모달창이 열리는데
                  // 이 한줄을 통해 모달창이 열리는 것을 막는다.
                  let good = [...따봉];
                  good[i] = good[i] + 1;
                  따봉변경(good);
                }}
              >
                ❤️
              </span>
              {따봉[i]}
            </h4>
            {/* <h4>{글제목[i]}</h4> */}
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.push(입력값);
          글제목변경(copy);
        }}
      >
        글발행
      </button>
      {/*{modal % 2 == 0 ? null : <Modal />}*/} {/* 내가 한 방법 */}
      {modal == true ? (
        <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} />
      ) : null}
      <Modal2 />
      {/* 강의에서 한 방법 */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자코트 추천", "강남 우동맛집", "파이썬 독학"]);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kim",
      age: "20",
    };
  }
  render() {
    return (
      <div>
        안녕 {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
