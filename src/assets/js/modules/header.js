function header () {
    let scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 100) {
            document.querySelector ('.header').style.background = '#050103cd';
            document.querySelector ('.header__log').style.background = 'url("/assets/images/logo/White.png") no-repeat';
            document.querySelector ('.header-navs').style.color = 'white';
            document.querySelectorAll ('.header__link').forEach (item => {
                item.style.color = 'white';
            });
        }
        if (300 > scrolled) {
            document.querySelector ('.header').style.background = '';
            document.querySelector ('.header__log').style.background = '';
            document.querySelector ('.header-navs').style.color = '';
            document.querySelectorAll ('.header__link').forEach (item => {
                item.style.color = '';
            });
        }
    }
}
header ();
export default header; 