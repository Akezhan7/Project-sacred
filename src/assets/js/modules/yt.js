function youtube (btn, blocks, all, e1, e2, e3, e4) {
    const btns = document.querySelectorAll ('.fa-play'),
          block = document.querySelector ('.block-yt');
    function openModal (item) {
        block.classList.remove ('hidden');
        document.querySelectorAll ('.youtube').forEach (item => {
            item.classList.add ('hidden');
        })
        document.querySelector (item).classList.add ('active-yt');
        document.querySelector (item).classList.remove ('hidden');
        document.body.style.overflow = 'hidden';
    }
    function closeModal () {
        block.classList.add ('hidden');
        document.body.style.overflow = '';
    }
    block.addEventListener ('click', (e) => {
        if (e.target === block) {
            closeModal ();
        }
        });
    document.addEventListener ('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal ();
        }
    });
    try {
        btns[0].addEventListener ('click', () => {
            openModal ('.tube-e');
        });
        btns[1].addEventListener ('click', () => {
            openModal ('.tube-d');
        });
        btns[2].addEventListener ('click', () => {
            openModal ('.tube-a');
        });
        btns[3].addEventListener ('click', () => {
            openModal ('.tube-t');
        });
    } catch  (error){
        console.log ('error');
    }
}
export default youtube;