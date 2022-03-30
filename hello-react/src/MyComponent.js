import { Component } from "react";
import PropTyeps from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    };
    static propTypes = {
        name: this.propTypes.string,
        favoriteNumber: PropTyeps.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props; //비구조화 할당
        return (
        <div>
           안녕하세요, 제 이름은 {name}입니다. <br />
           children 값은 {children}
           입니다.
           <br />
           제가 좋아하는 숫자는 {favoriteNumber}입니다.
           </div>
        );
    }
}

export default MyComponent;

// import { Component } from 'react';
// import PropTypes from 'prop-types';

// class MyComponent extends Component {
//     render() {
//         const { name, favoriteNumber, children } = this.props; //비구조화 할당
//         return (
//             <div>
//                 안녕하세요, 제 이름은 {name}입니다. <br />
//                 children 값은 {children}
//                 입니다.
//                 <br />
//                 제가 좋아하는 숫자는 {favoriteNumber}입니다.
//             </div>
//         );
//     }
// }

// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };

// export default MyComponent;


// import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}
//             입니다.
//             <br />
//             제가 좋아하는 숫자는 {favoriteNumber}입니다.
//         </div>
//     );
// };

// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };

// export default MyComponent;


// import PropTypes from 'prop-types';

// const MyComponent = ({name, children}) => {
//     return (
//         <div>
//             안녕하새요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}
//             입니다.
//         </div>
//     );
// };

// MyComponent.defualtProps = {
//     name: '기본 이름'
// };

// MyComponent.propTypes = {
//     naem : PropTypes.string
// };

// export default MyComponent;


// const MyComponent = ({name, children}) => {
//     return (
//         <div>
//             안녕하새요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}
//             입니다.
//         </div>
//     );
// };

// MyComponent.defualtProps = {
//     name: '기본 이름'
// };

// export default MyComponent;

// const MyComponent = props => {
//     const { name, children } = props;
//     return (
//         <div>
//             안녕하세요, 제 이름은 {name}입니다. <br />
//             children 값은 {children}
//             입니다.
//         </div>
//     );
// };

// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// export default MyComponent; 


// const MyComponent = props => {
//     return (
//         <div>
//             안녕하세요, 제 이름은 {props.name}입니다. <br />
//             children 값은 {props.children}
//             입니다.
//         </div>
//     );
// };

// MyComponent.defaultProps = {
//     name: '기본 이름'
// };

// export default MyComponent;


// const MyComponet = props => {
//     return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// };

// MyComponet.defaultProps = {
//     name: '기본 이름'
// };

// export default MyComponet;


// const MyComponet = props => {
//     return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
// };

// export default MyComponet;


// const MyComponent = () => { //함수를 작성할 때 function 키워드를 사용하는 대신에 () => {}를 사용하여 함수를 만듬.
//     return <div>나의 새롭고 멋진 컴포넌트</div>;
// };

// export default MyComponent; // 다른 파일에서 import할떄, 위에서 선언한 MyComponent 클래스를 불러오도록 설정