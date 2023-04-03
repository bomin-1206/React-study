import './Style.css';

const Ex03 = () => {
    var hour = 0;
    var min = 0;
    var second = 0;
    const time = () => {
        const num = document.getElementById('time').value;
        hour = Math.floor(num/3600)
        min = Math.floor((num - hour*3600) / 60)
        second = Math.floor((num - hour*3600) % 60)
        alert(hour + '시 ' + min + '분 ' + second + '초 ')
    }
    return (
        <div className="Ex03">
            <input id="time" className="input" />
            <button onClick={time} className="btn">버튼</button>
        </div>
    );
}
 
export default Ex03;