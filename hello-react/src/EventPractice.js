import { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보새요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;

// import { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     username: '',
//     massage: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.username + ': ' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.usernmae}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// import { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//   };

//   handleClick = () => {
//     alert(this.state.message);
//     this.setState({
//       message: '',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// import { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     message: '',
//   };

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleChange(e) {
//     this.setState({
//       message: e.target.value,
//     });
//   }
//   handleClick() {
//     alert(this.state.message);
//     this.setState({
//       message: '',
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </div>
//     );
//   }
// }

// export default EventPractice;

// import { Component } from 'react';

// class EventPractice extends Component {

//     state = {
//         message: ''
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value = {this.state.message}
//                     onChange={
//                         (e) => {
//                             this.setState({
//                                 message: e.target.value
//                             })
//                         }
//                     }
//                 />
//                 <button onClick={
//                     () => {
//                         alert(this.state.message);
//                         this.setState({
//                             mesage: ''
//                         });
//                     }
//                 }>확인</button>
//             </div>
//         );
//     }
// }

// export default EventPractice;

// import { Component } from 'react';

// class EventPractice extends Component {

//     state = {
//         message: ''
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <intput
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     value={this.state.message}
//                     onChange={
//                         (e) => {
//                             this.setState({
//                                 message: e.target.value
//                             })
//                         }
//                     }
//                 />
//             </div>
//         );
//     }
// }

// export default EventPractice;

// import { Component } from 'react';

// class EventPractice extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                     type="text"
//                     name="message"
//                     placeholder="아무거나 입력해 보세요"
//                     onChange={
//                         (e) => {
//                             console.log(e.target.value);
//                         }
//                     }
//                     />
//             </div>
//         );
//     }
// }

// export default EventPractice;

// import { Component } from 'react';

// class EventPractice extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//             </div>
//         );
//     }
// }

// export default EventPractice;
