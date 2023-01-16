let menu = document.querySelector('.menu');
let gnb_bg = document.querySelector('#gnb_bg');
let lnb = document.querySelectorAll('.lnb');

// nav 마우스 오버 시 세부 메뉴 보이기
menu.addEventListener('mouseover',()=>{
    gnb_bg.style.height = '217px';
    for(i=0; i<lnb.length; i++) {
        lnb[i].style.height = '217px';
      }
})
menu.addEventListener('mouseleave',()=>{
    gnb_bg.style.height = '0px';
    for(i=0; i<lnb.length; i++) {
        lnb[i].style.height = '0px';
      }
})

//로그인&메뉴 아이콘 이미지 바꾸기
let gnbBtn_Login = document.querySelector('.gnbBtn_Login');
let gnbBtn_Login_b = document.querySelector('.gnbBtn_Login_b');
let gnbBtn_Login_y = document.querySelector('.gnbBtn_Login_y');

let gnbBtn_Sitemap = document.querySelector('.gnbBtn_Sitemap');
let gnbBtn_Sitemap_b = document.querySelector('.gnbBtn_Sitemap_b');
let gnbBtn_Sitemap_y = document.querySelector('.gnbBtn_Sitemap_y');

gnbBtn_Login.addEventListener('mouseover',()=>{
  gnbBtn_Login_b.style.top = '-34px'
  gnbBtn_Login_y.style.top = '0px'
})
gnbBtn_Login.addEventListener('mouseleave',()=>{
  gnbBtn_Login_b.style.top = '0px'
  gnbBtn_Login_y.style.top = '34px'
})

gnbBtn_Sitemap.addEventListener('mouseover',()=>{
  gnbBtn_Sitemap_b.style.top = '-34px'
  gnbBtn_Sitemap_y.style.top = '0px'
})
gnbBtn_Sitemap.addEventListener('mouseleave',()=>{
  gnbBtn_Sitemap_b.style.top = '0px'
  gnbBtn_Sitemap_y.style.top = '34px'
})





//모바일 햄버거 메뉴

