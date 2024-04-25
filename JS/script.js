// Construtor de Data
const date = new Date() // Chama o construtor de Data
const yearToday = date.getFullYear() // Captura o Ano Atual
footerText.innerText = `Direitos de Uso e Copyright | Oishi - ${yearToday}` // Mostra na Tela

// Manipula Eventos
const bodyElement = window.document.body // Captura o Body
menuResponsivo.addEventListener('click', abrirMenu) // Adiciona evento ao botão de Menu no Celular
fecharMenuMobile.addEventListener('click', fecharMenu) // Adiciona evento ao botão de fechar o Menu no Celular
document.addEventListener('scroll', getPosition) // Adiciona evento de Scroll a posição da tela

// Função para Abrir o Menu
function abrirMenu(){
    bodyElement.style.overflow = 'hidden' // Trava a Tela
    menuDesktop.classList.add('menu-desktop-celular') // Adiciona a classe do CSS ao Menu
    menuResponsivo.classList.add('menu-responsivo-celular') // Adiciona classe do CSS ao botão do menu
    fecharMenuMobile.classList.add('fechar-menu-mobile-celular') // Adiciona classe do CSS ao botão de fechar o menu
}

// Função para fechar o menu
function fecharMenu(){
    bodyElement.style.overflow = 'auto' // Reseta o Padrão
    menuDesktop.classList.remove('menu-desktop-celular') // Remove a classe do CSS ao Menu
    menuResponsivo.classList.remove('menu-responsivo-celular') // Remove a classe do CSS ao botão de Menu
    fecharMenuMobile.classList.remove('fechar-menu-mobile-celular') // Remove a classe do CSS ao botão de Fechar o Menu
}

// Captura a Posição
function getPosition(){
    const whatsappBtn = document.getElementById('whatsapp') // Armazena o botão do Whatsapp em uma variável
    const mainElement = document.querySelector('main') // Armazena o Main em uma Variável
    const footerElement = document.querySelector('footer') // Armazena o Footer em uma Variável
    const mainRect = mainElement.getBoundingClientRect() // Captura a posição do Main
    const footerRect = footerElement.getBoundingClientRect() // Captura a posição do Footer

    // Se a largura da tela for maior que 1024px
    if(window.innerWidth >= 1024){
        // Se o footer estiver no topo e o main estiver embaixo
        if(footerRect.top <= window.innerHeight && mainRect.bottom > footerRect.height){
            whatsappBtn.style.position = 'absolute' // Muda a posição para absoluta
            whatsappBtn.style.bottom = footerRect.height + -179 + 'px' // Corrige o Botão do Whatsapp
            whatsappBtn.style.right = '24px' // Botão do Whatsapp a direita com uma margem de 24px
        } else{
            whatsappBtn.style.position = 'fixed' // Reseta a posição
            whatsappBtn.style.bottom = '0px' // Reseta a posição
            whatsappBtn.style.right = '24px' // Reseta a posição
        }
    }  else {
        if(footerRect.top <= window.innerHeight && mainRect.bottom > footerRect.height){
            whatsappBtn.style.position = 'absolute' // Muda a posição para absoluta
            whatsappBtn.style.bottom = footerRect.height + -148 + 'px' // Corrige o botão do Whatsapp
            whatsappBtn.style.right = '8px' // Ajusta o botão a direita em 24px
        } else{
            whatsappBtn.style.position = 'fixed' // Reseta a posição
            whatsappBtn.style.bottom = '0px' // Reseta a posição
            whatsappBtn.style.right = '8px' // Reseta a posição
        }
    } 
}