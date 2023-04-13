import React from 'react';
import './Style.css';

class Ex05 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
      oddNumbers: [],
      evenNumbers: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const number = Number(document.getElementById("number").value);
    const { numbers, oddNumbers, evenNumbers } = this.state;
    if (numbers.length < 10) {
      this.setState({
        numbers: [...numbers, number],
        oddNumbers: number % 2 !== 0 ? [...oddNumbers, number] : oddNumbers,
        evenNumbers: number % 2 === 0 ? [...evenNumbers, number] : evenNumbers
      });
    }
  }

  render() {
    const { oddNumbers, evenNumbers } = this.state;

    return (
      <div>
        <label>숫자를 입력하세요 </label>
        <input id='number' className='input' />
        <button onClick={this.handleChange} className='btn'>추가</button>
          <div>
            <h2>홀수</h2>
              {oddNumbers.map((number, index) => (
                <p key={index}>{number}</p>
              ))}
          </div>
          <div>
            <h2>짝수</h2>
              {evenNumbers.map((number, index) => (
                <p key={index}>{number}</p>
              ))}
          </div>
      </div>
    );
  }
}

export default Ex05;