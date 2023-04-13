document.addEventListener("DOMContentLoaded",()=>{

    const btn = document.querySelector('#btn');
    btn.addEventListener('click',()=>{

        const num1 = document.getElementById('num1').value;
        const num2= document.getElementById('num2').value;

        for(let i=num1; i<=num2; i++){
            document.write(i + '단' + "<br>")
            for(let j=1; j<=9; j++) {
                document.write(i + '*' + j + '=' + i*j + "<br>")
            }
        }

    })

});