function imgSlider(anything) {
    document.querySelector(".boxImg").src = anything;
}

function changeBgColor(color) {
    const sec = document.querySelector(".section1");
    sec.style.background = color;
}

function navBlock() {
    var Header = document.querySelector('.header');
    var logoHeader = document.querySelector('.logoHeader');
    var signInUp = document.querySelector('.signInUp');
    var navUl = document.querySelector('.navUl');
    if (navUl.style.display === 'none') {
        navUl.style.display = 'block';
        Header.style.height = '20px';
        logoHeader.style.display = 'none';
        signInUp.style.display = 'none';
    } else {
        navUl.style.display = 'none';
        logoHeader.style.display = 'block';
        Header.style.height = '70px';
        signInUp.style.display = 'block';
    }
}