import React from 'react';
import './Style.css';

class Ex06 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const number = Number(document.getElementById("number").value);
    const { numbers } = this.state;
    if (numbers.length < 10) {
      this.setState({
        numbers: [...numbers, number]
      });
    }
  }

  render() {
    const { numbers } = this.state;

    return (
      <div>
        <label>숫자를 입력하세요 </label>
        <input type="number" id='number' className='input' />
        <button onClick={this.handleChange} className='btn'>추가</button>
          <div>
            <h2>오름차순</h2>
              {[...numbers].sort((a, b) => a - b).map((number, index) => (
                <p key={index}>{number}</p>
              ))}
          </div>
          <div>
            <h2>내림차순</h2>
              {[...numbers].sort((a, b) => b - a).map((number, index) => (
                <p key={index}>{number}</p>
              ))}
          </div>
      </div>
    );
  }
}

export default Ex06;