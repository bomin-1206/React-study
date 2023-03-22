document.addEventListener('DOMContentLoaded', () => {
    const $button = document.querySelector('button');
    const $ul = document.querySelector('ul');
    const $input = document.querySelector('input');
    const $span = document.querySelector('span');

    const doselect = ()=>{
        fetch(`http://localhost:5000/memos`)
        .then((result) => result.json())
        .then((data) => {
            $ul.textContent = '';
            data.map((memo) => {
                const $li = document.createElement('li');
                $li.textContent = memo.comm;
                const $del_btn = document.createElement('button');
                $del_btn.textContent = '삭제';
                $del_btn.setAttribute('data-key', memo.idx);
                $del_btn.addEventListener('click', (e) => {
                    alert(e.target.dataset.key);
                    fetch(`http://localhost:5000/delete`, {
                        method: 'post',
                        body: JSON.stringify({ key: e.target.dataset.key }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((result) => result.text())
                        .then((data) => {
                            console.log(data);
                            doselect();
                        });
                });
                $li.appendChild($del_btn);
                $ul.appendChild($li);
            });
        });
    }

    doselect();

    $button.addEventListener('click', () => {
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

                const $del_btn = document.createElement('button');
                $del_btn.textContent = '삭제';
                $del_btn.setAttribute('data-key', data);
                $del_btn.addEventListener('click', (e) => {
                    alert(e.target.dataset.key);
                    fetch(`http://localhost:5000/delete`, {
                        method: 'post',
                        body: JSON.stringify({ key: e.target.dataset.key }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((result) => result.text())
                        .then((data) => {
                            console.log(data);
                            doselect();
                        });
                });
                $li.appendChild($del_btn);

                fetch(`http://localhost:5000/memos`)
                    .then((result) => result.json())
                    .then((data) => {
                        $ul.textContent = '';
                        data.map((memo) => {
                            const $li = document.createElement('li');
                            $li.textContent = memo.comm;
                            const $del_btn = document.createElement('button');
                            $del_btn.textContent = '삭제';
                            $del_btn.setAttribute('data-key', memo.idx);
                            $del_btn.addEventListener('click', (e) => {
                                alert(e.target.dataset.key);
                                fetch(`http://localhost:5000/delete`, {
                                    method: 'post',
                                    body: JSON.stringify({
                                        key: e.target.dataset.key,
                                    }),
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                })
                                    .then((result) => result.text())
                                    .then((data) => {
                                        console.log(data);
                                        doselect();
                                    });
                            });
                            $li.appendChild($del_btn);
                            $ul.appendChild($li);
                        });
                    });
            });
    });
});