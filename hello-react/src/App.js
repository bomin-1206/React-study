import Counter from './Counter';

const App = () => {
  return <Counter />;
};

export default App;

// import MyComponent from "./MyComponent";

// const App = () => {
//   return (
//     <MyComponent name = "React" favoriteNumber={1}>
//       리액트
//     </MyComponent>
//   );
// };

// export default App;

// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent name ="React">리액트</MyComponent>;
// };

// export default App;

// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent>리액트</MyComponent>;
// };

// export default App;

// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent />
// };

// export default App;

// import MyComponent from './MyComponent';

// const App = () => {
//   return <MyComponent />
// };

// export default App;

// import { Component } from 'react';

// class App extends Component {
//   render() { //클래스형 컴포넌트에는 render함수가 꼭 있어야 함.
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }

// export default App;

// // 컴포넌트를 선언하는 방식은 2가지
// // 하나는 함수 컴포넌트이고, 하나는 클래스형 컴포넌트
// import './App.css';
// // 함수 컴포넌트
// function App() {
//   const name = '리액트';
//   return <div className = "react">{name}</div>;
// }

// export default App;

// import "./App.css";

// function App() {
//   const name = "리액트";
//   return (
//     <div>
//       <div className="react">{name}</div>
//       <h1>들여쓰기가 이상한</h1>
//       <h2>코드</h2>
//       <p>입니다.</p>
//     </div>
//   );
// }

// export default App;

// import './App.css';

// function App() {
//   const name = '리액트';
//   return (
//     <>
//       {/* 주석은 이렇게 작성합니다. */}
//       <div
//         className="react" //시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성할 수 있습니다.
//       >
//         {name}
//       </div>
//       //하지만 이런 주석이나
//       /* 이런 주석은 페이지에 그대로 나타나게 됩니다. */
//       <input />
//     </>
//   );
// }

// export default App;

// import './App.css';

// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input /> {/* 이렇게 선언하면서 동시에 닫을 수도 있다.*/}
//       {/* <input></input> input태그를 사용할떄 html에서는 안닫아줘도 실행이 되지만 react는 안된다. */}
//     </>
//   );
// }

// export default App;

// import './App.css';

// function App() {
//   const name = '리액트';
//   return <div className="react">{name}</div>
// }

// export default App;

// function App() {
//   const name = '리액트';
//   return (
//     <div
//       style={{
//         // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
//         backgroundColor : 'black',
//         color : 'aqua',
//         fontSize : '48px', //font-size -> fontSize
//         fontWeight: 'bold', //font-weight -< fontWeight
//         padding: 16 //단위를 생략하면 px로 지정됩니다.
//       }}
//     >
//       {name}
//     </div>
//   );
// }

// export default App;

// function App() {
//   const name = '리액트';
//   const style = {
//     // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
//     backgroundColor : 'black',
//     color : 'aqua',
//     fontSize : '48px', //font-size -> fontSize
//     fontWeight: 'bold', //font-weight -< fontWeight
//     padding: 16 //단위를 생략하면 px로 지정됩니다.
//   };
//   return <div style={style}>{name} </div>;
// }

// export default App;

// import './App.css';

// function App() {
//   const name = undefined;
//   return <div>{name || '리액트'}</div>;
// }

// export default App;

// import './App.css';

// function App() {
//   const name = undefined;
//   return name || '값이 undefined입니다.';
// }

// export default App;

// function App() {
//   const name = '뤼액트';
//   return <div> {name === '리액트' && <h1>리액트입니다.</h1>}</div>;
//   // 위의 코드로 하면 아무것도 나오지 않음
//   // return <div> {name === '리액트' ? <h1>리액트입니다.</h1> : null} </div>;
//   // 위의 코드로 하면 아무것도 나오지 않음
//   // return (
//   // <div>
//   //   { name === '리액트' ? (
//   //     <h1>리액트입니다.</h1>
//   //   ) : (
//   //     <h2>리액트가 아닙니다.</h2>
//   //   )}
//   //   </div>
//   // );
// }

// export default App;

// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <h1>{name} 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </>
//   );
// }

// export default App;

// function App() {
//   return (
//     <>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </>
//   );
// }

// export default App;

// div 요소를 사용하고 싶지 않으면 Fragment를 사용
// import { Fragment } from 'react';

// function App() {
//   return (
//     <Fragment>
//       <h1>리액트 안녕!</h1>
//       <h2>잘 작동하니?</h2>
//     </Fragment>
//   );
// }

// export default App;

// function App() {
//   return (
//     // <div>
//     //   <h1>리액트 안녕!</h1>
//     //   <h2>잘 작동하니?</h2>
//     // </div>
//   )
// }
// 컴포넌트에서 요소 여러 개를 하나의 요소로 묶어줘야 하는 이유는
// Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는
// 하나의 DOM트리 구조로 이루어져야 한다는 규칙이 있다.
// export default App;

// import logo from './logo.svg'; //import 구문은 특정 파일을 불러오는 것을 의미한다.
// import './App.css'; //리액트로 만든 프로젝트의 자바스크립트 파일에서는 import를 사용하여 다른 파일들을 불러와 사용할 수 있다.
// // 참고로 Node.js에서는 import가 아닌 require라는 구문으로 패키지를 불러올 수 있다.
// // 이러한 긴으을 부라우저에서도 사용하기 위해 번들러(bundler)를 사용한다.
// // 번들(bundle)은 묶는다는 뜻이다. 즉, 파일을 묶듯이 연결하는 것이다.

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/*
JSX코드 변환 전
function App() {
  return (
    <div>
      Hello <b>react</b>
    </div>
  );
}

JSX코드 변환 후
function App() {
  return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
}
*/
