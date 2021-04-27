import slider from './modules/slider';
import mainSlider from './modules/mainslide';
import sportslider from './modules/sportslider';
import tabs from './modules/tabs';
import youtube from './modules/yt';
import map from './modules/map';
import header from './modules/header';
import newblog from './modules/newblog'

window.addEventListener ('DOMContentLoaded', () => {
    try {
        newblog ();
    } catch (error) {
        console.log ('error');
    }
    try {
        map ();
    } catch (error) {
        console.log ('error');
    }
    try {
        sportslider ({
            blocks: '.blog__block',
            btnLeft: '.fa-chevron-left',
            btnRight: '.fa-chevron-right',
            numberBlocks: '.main__nav-block',
            container: '.blog__item',
            field: '.blog__field',
        });
    } catch (error) {
        console.log ('error');
    }
    try {
        tabs ('.news-block', '.news-nav__link', '.news-nav', 'news-active');
    } catch (error) {
        console.log ('error');
    }
    try {
        tabs ('.ev-block', '.farrow', '.ev-nav__link', 'active-arrow');
    } catch (error) {
        console.log ('error');
    }
    try {
        youtube ();
    } catch (error) {
        console.log ('error');
    }
    try {
        slider ({
            blocks: '.places-block',
            btnLeft: '.fa-chevron-left',
            btnRight: '.fa-chevron-right',
            numberBlocks: '.main__nav-block',
            container: '.places__item',
            field: '.places__field'
        });
    } catch (error) {
        console.log ('error');
    }
    try {
        mainSlider ();
    } catch (error) {
        console.log ('error');
    }
});
