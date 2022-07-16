// zoom .container aside 
const aside = document.querySelector('aside');
aside.addEventListener('mouseenter', function () {
    aside.classList.toggle('zoom');
    aside.style.height = '365px';
    const sosmed = document.querySelector('.sosmed');
    sosmed.style.display = 'flex';
    if (this.addEventListener('mouseleave', function () {
            aside.classList.remove('zoom');
            sosmed.style.display = 'none';
            aside.style.height = '300px';
        }));

});

aside.addEventListener('click', function () {
    aside.classList.toggle('flip');
    const about = document.querySelector('.about');
    const sub = document.querySelector('sub');
    sub.innerHTML = 'Tekan kembali untuk mengembalikan';
    about.style.display = 'flex';

    const container = document.querySelector('.container');
    if (aside.classList.contains('flip')) {
        container.style.display = 'none';
    } else {
        container.style.display = 'flex';
        about.style.display = 'none';
        sub.innerHTML = 'Tekan untuk melihat about';
    }
});

function login() {
    document.location = 'login.html';
}

const hamb = document.getElementById('hamb');
const hambChild = document.querySelector('.hamb-child');
hamb.addEventListener('click', function () {
    hambChild.classList.toggle('on');
    if (hambChild.classList.contains('on')) {
        hambChild.classList.remove('off');
    } else {
        hambChild.classList.add('off');
    }
});

const pProduct = document.querySelector('.card ul li p');