function newblog () {
    const blocks = document.querySelectorAll ('.content-block'),
          btns = document.querySelectorAll ('.content__btn'),
          contents = document.querySelectorAll ('.content-show__block');
    
    function closeBlogs () {
        blocks.forEach (item => {
            item.classList.add ('hidden');
        })
    }
    function closeContent () {
        contents.forEach (item => {
            item.classList.add ('hidden');
        })
        document.querySelector ('.content-show__btn').classList.add ('hidden');
    }
    function openContent () {
        blocks.forEach (item => {
            item.classList.remove ('hidden');
        })
        document.querySelector ('.content-show__btn').classList.remove ('hidden');
    }
    closeContent ();
    document.querySelector ('.content-show__btn').addEventListener ('click', () => {
        openContent ();
        closeContent ();
    })
    btns[0].addEventListener ('click', () => {
      closeBlogs ();
      contents[0].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
    btns[1].addEventListener ('click', () => {
      closeBlogs ();
      contents[1].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
    btns[2].addEventListener ('click', () => {
      closeBlogs ();
      contents[2].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
    btns[3].addEventListener ('click', () => {
      closeBlogs ();
      contents[3].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
    btns[4].addEventListener ('click', () => {
      closeBlogs ();
      contents[4].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
    btns[5].addEventListener ('click', () => {
      closeBlogs ();
      contents[5].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
    btns[6].addEventListener ('click', () => {
      closeBlogs ();
      contents[6].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
    btns[7].addEventListener ('click', () => {
      closeBlogs ();
      contents[7].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
    btns[8].addEventListener ('click', () => {
      closeBlogs ();
      contents[8].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
    btns[9].addEventListener ('click', () => {
      closeBlogs ();
      contents[9].classList.remove ('hidden');
      document.querySelector ('.content-show__btn').classList.remove ('hidden');
    })
}
export default newblog;