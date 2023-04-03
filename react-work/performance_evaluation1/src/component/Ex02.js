import './Style.css';

const Ex02 = () => {
    let win = 0
    let lose = 0
    let tie = 0
    const 가위바위보 = () => {
        const user = document.getElementById('num').value;
        const computer = parseInt(Math.random()*3); // 0 = 가위 1 = 바위 2 = 보
        if(user === '가위') {
            if(computer === 0) {
                tie += 1
                alert('컴퓨터 가위 너는 가위 ' + win + '승' + lose + '패' + tie + '무');
            } else if(computer === 1) {
                lose += 1
                alert('컴퓨터 바위 너는 가위 ' + win + '승' + lose + '패' + tie + '무');
            } else {
                win += 1
                alert('컴퓨터 보 너는 가위 ' + win + '승' + lose + '패' + tie + '무');
            }
        } else if(user === '바위') {
            if(computer === 0) {
                win += 1
                alert('컴퓨터 가위 너는 바위 ' + win + '승' + lose + '패' + tie + '무');
            } else if(computer === 1) {
                tie += 1
                alert('컴퓨터 바위 너는 바위 ' + win + '승' + lose + '패' + tie + '무');
            } else {
                lose += 1
                alert('컴퓨터 보 너는 바위 ' + win + '승' + lose + '패' + tie + '무');
            }
        } else if(user === '보') {
            if(computer === 0) {
                lose += 1
                alert('컴퓨터 가위 너는 보 ' + win + '승' + lose + '패' + tie + '무');
            } else if(computer === 1) {
                win += 1
                alert('컴퓨터 바위 너는 보 ' + win + '승' + lose + '패' + tie + '무');
            } else {
                tie += 1
                alert('컴퓨터 보 너는 보 ' + win + '승' + lose + '패' + tie + '무');
            }
        }
    }
    return (
        <div className="Ex02">
            <h1>가위바위보</h1>
            <input id="num" className='input' />
            <button onClick={가위바위보} className="btn">버튼</button>
        </div>
    );
}
 
export default Ex02;