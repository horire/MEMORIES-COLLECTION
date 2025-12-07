// ローディング画面

const spinnerImg = document.querySelector('#loading-section');
const loadingClass = () => {
    spinnerImg.classList.add('loaded');
};


window.addEventListener('load', loadingClass);


// トップタイトルフェードイン

const TopTitles = document.querySelectorAll('#top-img-title');


const TopTitleFadein = () => {

    TopTitles.forEach((TopTitle, idx) => {

        const TopTitleKeyframe = {
            translate: ['0 20px', '0'],
            opacity: [0, 1],
        };
        const TopTitleOption = {
            duration: 1500,
            easing: 'ease',
            fill: 'forwards',
            delay: 350 * idx,
        };

        TopTitle.animate(TopTitleKeyframe, TopTitleOption);

    });




}

window.addEventListener('load', TopTitleFadein);


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




// このサイトについて

const aboutContents = document.querySelector('.about-site-TextContainer');
const aboutFade = (entries,aboutObs) => {

    const flowFadeKeyframe = {
        opacity: [0, 1],
        translate: ['0 60px', 0],
    };
    const flowFadeOption = {
        duration: 1000,
        fill: 'forwards',
        delay: 150,
        easing: 'ease',
    };

    if (entries[0].isIntersecting === true) {
        entries[0].target.animate(flowFadeKeyframe, flowFadeOption);
        aboutObs.unobserve(entries[0].target);

    }





};


const aboutfadeObs = new IntersectionObserver(aboutFade);
aboutfadeObs.observe(aboutContents);



// 制作の流れフェードイン

const flowContents = document.querySelectorAll('.creation-flow-content-section');
const flowFade = (entries, obs) => {

    entries.forEach((entry, index) => {

        const flowFadeKeyframe = {
            opacity: [0, 1],
            translate: ['0 60px', 0],
        };
        const flowFadeOption = {
            duration: 1000,
            delay: 750 * index,
            fill: 'forwards',
            easing: 'ease',
        };

        if (entry.isIntersecting === true) {
            entry.target.animate(flowFadeKeyframe, flowFadeOption);
            obs.unobserve(entry.target);
        }

    })



};


const flowfadeObs = new IntersectionObserver(flowFade);

flowContents.forEach((flowContent) => {
    flowfadeObs.observe(flowContent);
});


// スワイパー

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

// 自分の写真を選択するフェードイン



const originalContents = document.querySelectorAll('.original-fade');
const originalFade = (orientries, oriobs) => {

    orientries.forEach((orientry, oriindex) => {

        const oriFadeKeyframe = {
            opacity: [0, 1],
            translate: ['0 60px', 0],
        };
        const oriFadeOption = {
            duration: 1000,
            delay: 750 * oriindex,
            fill: 'forwards',
            easing: 'ease',
        };

        if (orientry.isIntersecting === true) {
            orientry.target.animate(oriFadeKeyframe, oriFadeOption);
            oriobs.unobserve(orientry.target);
        }

    })



};

const orifadeObs = new IntersectionObserver(originalFade);

originalContents.forEach((oriContent) => {
    orifadeObs.observe(oriContent);
});