function tabs (tabsSelector, tabsContent, tabsParent, activeClass) {
    let collections = document.querySelectorAll (tabsSelector),
          nav = document.querySelectorAll (tabsContent),
          link = document.querySelector (tabsParent);
  
    function hideContent () {
    collections.forEach (item => {
    item.style.display = 'none';
    });

    nav.forEach (item => {
    item.classList.remove (activeClass);
    });
    }

    function showContent (i = 0) {
    collections[i].style.display = 'block';
    nav[i].classList.add (activeClass);
    }

    link.addEventListener ('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains (tabsContent.slice(1))) {
    nav.forEach ((item, num) => {
        if (target == item) {
            hideContent ();
            showContent (num);
        }
    });
    }
    });
    hideContent ();
    showContent ();
}

export default tabs;