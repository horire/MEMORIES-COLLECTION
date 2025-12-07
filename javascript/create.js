
// スクロール表記切り替え

const scrollDown = document.querySelector('#scrollDown');
const arrow = document.querySelector('#arrow')
const getscrollPercent = () => {
    const scrolled = window.scrollY;

    const pageHight = document.documentElement.scrollHeight
    const clientHight = document.documentElement.clientHeight
    const canScroll = scrolled / (pageHight - clientHight) * 100;
    const top = document.querySelector('#topOrscroll')
    console.log(`${canScroll}%`)
    if (canScroll > 15) {
        arrow.classList.add('arrow-up')

        top.textContent = 'Top';
        top.style.color = '#333';


    } else {
        arrow.classList.remove('arrow-up')
        top.textContent = 'Scroll';
        top.style.color = '#fff';
    }
}

window.addEventListener('scroll', getscrollPercent);









