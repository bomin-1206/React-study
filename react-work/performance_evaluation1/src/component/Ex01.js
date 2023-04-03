import './Style.css';

const Ex01 = () => {
    const getNum = () => {
        const num = parseInt(Math.random()*255);
        alert(num);
    }
    return (
        <div className="Ex01">
            <h1>난수 생성</h1>
            <button onClick={getNum} className="btn">클릭</button>
        </div>
    );
}
 
export default Ex01; 