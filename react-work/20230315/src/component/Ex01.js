const Ex01 = () => {
    const getNum = () => {
        const num = parseInt(Math.random()*255); // 0 < X < 1
        alert('함수 호출' + num);
        // alert(`함수 호출 ${num}`);
    }
    return (
        <div>
            <h1>Ex01</h1>
            <button onClick = {getNum}>난수 생성</button>
        </div>
    );
}
 
export default Ex01;