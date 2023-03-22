document.addEventListener('DOMContentLoaded', () => {
    const $ul = document.querySelector('ul');

    fetch(`http://localhost:5000/memos`)
        .then((result) => result.json())
        .then((data) => {
            data.map((memo) => {
                // console.log(memo);
                const $li = document.createElement('li');
                $li.textContent = memo.comm;
                $ul.appendChild($li);
            });
        });

});