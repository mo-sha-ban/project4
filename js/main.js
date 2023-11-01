

    let open = document.getElementById('toggel');
    let close = document.getElementById('close');
    let container = document.querySelector('.ul');

    close.onclick  = function () {
        container.classList.add('hide');
        close.classList.add('hide');
        open.classList.remove('hide');
    }

    open.onclick  = function () {
        container.classList.remove('hide');
        close.classList.remove('hide');
        open.classList.add('hide');
    }