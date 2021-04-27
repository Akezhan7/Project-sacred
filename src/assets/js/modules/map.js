function map () {
    const btns = document.querySelectorAll ('.cart-btn'),
          block = document.querySelector ('.block-map');
    function openModal (item) {
        block.classList.remove ('hidden');
        document.querySelectorAll ('.block-map__cart').forEach (item => {
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
    btns[0].addEventListener ('click', () => {
        openModal ('.map-yl');
    });
    btns[1].addEventListener ('click', () => {
        openModal ('.map-p');
    });
    btns[2].addEventListener ('click', () => {
        openModal ('.map-y');
    });
    btns[3].addEventListener ('click', () => {
        openModal ('.map-a');
    });
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
    document.querySelector ('.map-close').addEventListener ('click', () => {
        closeModal ();
    })
}
export default map;