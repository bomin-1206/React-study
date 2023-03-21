document.addEventListener("DOMContentLoaded",()=>{
    const $button = document.querySelector("button");
    const $ul = document.querySelector("ul");
    const $input = document.querySelector("input");
    const $span = document.querySelector("span");

    $button.addEventListener("click",()=>{
        // alert(`경고창 ${$input.value}`);
        if ($input.value.length ===0 ){
            $span.textContent = "메모 입력하세요.";
            return;
        }
        const $li = document.createElement("li");
        $li.textContent= $input.value;
        $ul.appendChild($li);
        $input.value = "";
        $span.textContent = "";
    })
});