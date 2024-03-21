window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.header');
    scroll.classList.toggle("active", window.scrollY > 600);

    var scroll = document.querySelector('.header_logo');
    scroll.classList.toggle("active", window.scrollY > 600);

    var scroll = document.querySelector('.header_navbar');
    scroll.classList.toggle("active", window.scrollY > 600);

});

// test Y
// window.addEventListener('scroll', function (e) {
//     console.log(window.scrollY)
// });

