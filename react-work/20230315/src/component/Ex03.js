const Ex03 = () => {
    // const a = 10 > 2 && "test"; // true
    // const b = 10 < 2 && "bbb"; // false

    const doA = (num) => {
        console.log(typeof num);
        const formatnum = typeof num === "number" ? num.toLocaleString():"숫자가 아님";
        return formatnum;
    }

    console.log(doA(1300));
    console.log(doA("1300"));

    return (
        <div>
            {/* <h2>a = {a}</h2> */}
            {/* <h2>b = {b}</h2> */}
        </div>
    );
}
 
export default Ex03;