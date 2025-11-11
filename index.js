function darkMode() {

    const bottonDark = document.querySelector('#dark')

    function handleKeyboard(event) {
        event.preventDefault();
        document.body.classList.toggle('black');
        if (document.body.classList.contains('black')) {
            bottonDark.innerText = 'Light Mode';
        } else {
            bottonDark.innerText = 'Dark Mode';
        }
    };

    bottonDark.addEventListener('click', handleKeyboard);

};
darkMode();


function tabMenuFuncionalidades() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    };


    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index)
        });
    });

};
tabMenuFuncionalidades();


function accordionTab() {
    function activeAccordion(event) {

        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
    }

    const accordionList = document.querySelectorAll('.js-accordion dt');
    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })
};
accordionTab();


function initScrollSuave() {

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // forma alternativa
        // const topo = section.offsetTop;
        // window.scrollTo({
        //     top: 1000,
        //     behavior: 'smooth'
        // });
    }

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })

};

initScrollSuave();

function scrollAddRemove(){
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight * 0.5;

function animaScroll(){

    sections.forEach((section) =>{
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        
        if(isSectionVisible)    
          section.classList.add('ativo');
        else
           section.classList.remove('ativo');

    })
};
animaScroll();
window.addEventListener('scroll', animaScroll)
};

scrollAddRemove();