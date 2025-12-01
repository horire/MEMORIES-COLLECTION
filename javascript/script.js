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



const swiper = new Swiper('.swiper', {
    // Optional parameters
    //   direction: 'vertical',　縦方向
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1400, // 少しゆっくり(デフォルトは300)
    autoplay: { // 自動再生
        delay: 1500, // 1.5秒後に次のスライド
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px

        768: {
            slidesPerView: 4,
        }
    }
});

