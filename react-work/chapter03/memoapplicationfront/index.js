document.addEventListener('DOMContentLoaded', () => {
    const $button = document.querySelector('button');
    const $ul = document.querySelector('ul');
    const $input = document.querySelector('input');
    const $span = document.querySelector('span');

    $button.addEventListener('click', () => {
        // alert(`경고창 ${$input.value}`);
        if ($input.value.length === 0) {
            $span.textContent = '메모 입력하세요.';
            return;
        }

        const obj = {};
        obj['comm'] = $input.value;

        fetch(`http://localhost:5000/insert`, {
            method: 'post',
            body: JSON.stringify(obj),
            headers: {
                'Content-Type': 'application/json',
            },
            
        })
            .then((result) => result.text())
            .then((data) => {
                console.log(data);
                const $li = document.createElement('li');
                $li.textContent = $input.value;
                $ul.appendChild($li);
                $input.value = '';
                $span.textContent = '';
            });
    });
});