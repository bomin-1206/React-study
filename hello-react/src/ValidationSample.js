import { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validate: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handelButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          //ref를 만드는 가장 기본적인 방법은
          //콜백 함수를 사용하는 것
          //ref를 달고자 하는 요소에 ref라는 콜백 함수를
          //props로 전달해주면 된다.
          //콜백 함수는 ref값을 파라미터로 전달받습니다.
          //함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handelButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;

// import { Component } from 'react';
// import './ValidationSample.css';

// class ValidationSample extends Component {
//   state = {
//     password: '',
//     clicked: false,
//     validate: false,
//   };

//   handleChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

//   handelButtonClick = () => {
//     this.setState({
//       clicked: true,
//       validated: this.state.password === '0000',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           ref={(ref) => (this.input = ref)}
//           type="password"
//           value={this.state.password}
//           onChange={this.handleChange}
//           className={
//             this.state.clicked
//               ? this.state.validated
//                 ? 'success'
//                 : 'failure'
//               : ''
//           }
//         />
//         <button onClick={this.handelButtonClick}>검증하기</button>
//       </div>
//     );
//   }
// }

// export default ValidationSample;

// import { Component } from 'react';
// import './ValidationSample.css';

// class ValidationSample extends Component {
//   state = {
//     password: '',
//     clicked: false,
//     validate: false,
//   };

//   handleChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

//   handelButtonClick = () => {
//     this.setState({
//       clicked: true,
//       validated: this.state.password === '0000',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="password"
//           value={this.state.password}
//           onChange={this.handleChange}
//           className={
//             this.state.clicked
//               ? this.state.validated
//                 ? 'success'
//                 : 'failure'
//               : ''
//           }
//         />
//         <button onClick={this.handelButtonClick}>검증하기</button>
//       </div>
//     );
//   }
// }

// export default ValidationSample;
