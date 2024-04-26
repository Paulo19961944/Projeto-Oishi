// Construtor de Data
const date = new Date();
const yearToday = date.getFullYear();
footerText.innerText = `Direitos de Uso e Copyright | Oishi - ${yearToday}`;

// Manipula Eventos
const bodyElement = document.body;
menuResponsivo.addEventListener('click', abrirMenu);
fecharMenuMobile.addEventListener('click', fecharMenu);
document.addEventListener('scroll', getPosition);

// Função para Abrir o Menu
function abrirMenu() {
    bodyElement.style.overflow = 'hidden';
    menuDesktop.classList.add('menu-desktop-celular');
    menuResponsivo.classList.add('menu-responsivo-celular');
    fecharMenuMobile.classList.add('fechar-menu-mobile-celular');
}

// Função para fechar o menu
function fecharMenu() {
    bodyElement.style.overflow = 'auto';
    menuDesktop.classList.remove('menu-desktop-celular');
    menuResponsivo.classList.remove('menu-responsivo-celular');
    fecharMenuMobile.classList.remove('fechar-menu-mobile-celular');
}

// Captura a Posição
function getPosition() {
    const whatsappBtn = document.getElementById('whatsapp');
    const mainElement = document.querySelector('main');
    const footerElement = document.querySelector('footer');
    const mainRect = mainElement.getBoundingClientRect();
    const footerRect = footerElement.getBoundingClientRect();
    const isDesktop = window.innerWidth >= 1024;
    const isEndPositionMain = footerRect.top <= window.innerHeight && mainRect.bottom > footerRect.height;
    const footerRectHeightDesktop = footerRect.height - 179;
    const footerRectHeightMobile = footerRect.height - 148;

    const positionStyle = isEndPositionMain ? 'absolute' : 'fixed';
    const bottomValue = isEndPositionMain ? (isDesktop ? footerRectHeightDesktop : footerRectHeightMobile) + 'px' : '0px';

    whatsappBtn.style.position = positionStyle;
    whatsappBtn.style.bottom = bottomValue;
    whatsappBtn.style.right = isDesktop ? '24px' : '8px';
}
