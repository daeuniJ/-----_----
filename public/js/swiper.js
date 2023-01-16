/**************** 메인페이지 스크롤 스와이퍼 ****************/
var nowWidth = window.innerWidth;
var swiper0 = undefined;

function initSwiper() {
  if (nowWidth >= 1200 && swiper0 == undefined) {
    swiper0 = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      mousewheel: true,
      allowTouchMove: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `
          <div class="${className}" id="${className}${index}">
            <span class="navBtn"></span>
            <span class="navTxt"></span>
          </div>
          `;
        },
      },
    });

    // 왼쪽 내비에 텍스트 넣기
    let swiperBtn0 = document.querySelector('#swiper-pagination-bullet0>.navTxt');
    let swiperBtn1 = document.querySelector('#swiper-pagination-bullet1>.navTxt');
    let swiperBtn2 = document.querySelector('#swiper-pagination-bullet2>.navTxt');
    let swiperBtn3 = document.querySelector('#swiper-pagination-bullet3>.navTxt');
    swiperBtn0.innerText = 'With KB';
    swiperBtn1.innerText = 'KB저축은행 솔루션';
    swiperBtn2.innerText = 'KB Info';
    swiperBtn3.innerText = '저축은행 공지사항';

  } else if (nowWidth < 1200 && swiper0 != undefined) {
    swiper0.destroy();
    swiper0 = undefined;

    // 남아있는 페이지네이션 없애기
    function removePageNav() {
      let pageNation = document.querySelector('.swiper>.swiper-pagination');
      while (pageNation.firstChild) {
        pageNation.removeChild(pageNation.firstChild);
      };
    };
    removePageNav();
  };
};

initSwiper();

window.addEventListener('resize', function () {
  nowWidth = window.innerWidth;
  initSwiper();
  // swiper0 = undefined;
});
/**************** 메인페이지 스크롤 스와이퍼 ****************/



// 첫번째 섹션(mainSlide)의 swiper
var swiper1 = new Swiper(".mySwiper1", {
  // spaceBetween: 30,
  effect: "fade",
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}> 0${index + 1} </span>`
    },
  },
  autoplay: {
    delay: 5000,
    // disableOnInteraction: false,
  },
  allowTouchMove: false,
});

// 세번째 섹션(kbinfo)의 swiper
var swiper2 = new Swiper(".mySwiper2", {
  breakpoints: {
    799: {
      slidesPerView: 2
    }
  },
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  loopAdditionalSlides: 1,
  loopFillGroupWithBlank: true,
  allowTouchMove: true,

  navigation: {
    nextEl: "#kbinfo1_rightArrow",
    prevEl: "#kbinfo1_leftArrow",
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  breakpoints: {
    799: {
      slidesPerView: 2
    }
  },
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  loopAdditionalSlides: 1,
  loopFillGroupWithBlank: true,
  allowTouchMove: true,

  navigation: {
    nextEl: "#kbinfo2_rightArrow",
    prevEl: "#kbinfo2_leftArrow",
  },
});

var swiper4 = new Swiper(".mySwiper4", {
  breakpoints: {
    599: {
      slidesPerView: 2
    },
    699: {
      slidesPerView: 3
    },
    819: {
      slidesPerView: 4
    },
  },
  spaceBetween: 0,
  // slidesPerGroup: 1,
  loop: false,
  loopAdditionalSlides: 1,
  loopFillGroupWithBlank: true,
  allowTouchMove: true,

  navigation: {
    nextEl: "#kbinfo3_rightArrow",
    prevEl: "#kbinfo3_leftArrow",
  },
});

// 2번째 섹션 스와이퍼
var swiper1 = new Swiper(".solutionSwiper", {
  pagination: {
    pagination: {
      el: ".swiper-pagination",
    },
  },
  loop: true,
  autoplay: {
    delay: 4000,
  },
});