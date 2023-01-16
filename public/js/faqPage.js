// tab 메뉴
function tabOpen(e, tabName) {
    let tabContent = document.querySelectorAll('.faq_tabcont');
    for(i=0; i<tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

document.getElementById(tabName).style.display = 'block';

let tabL = document.querySelectorAll('.faq_tablink');
for(i=0; i<tabL.length; i++) {
    tabL[i].className = tabL[i].className.replace(' active' , ' ');
};
    e.currentTarget.className += ' active';
}



// tab 내부 아코디언
let faq_accor = document.getElementsByClassName('faq_title');
// let faq_title2 = document.getElementById('faq_title');

// faq_title2.addEventListener('click', function () {
//     faq_title2.classList.toggle('faq_active');
// })

for(i=0; i<faq_accor.length; i++) {
    faq_accor[i].addEventListener('click', function() {
        this.classList.toggle('faq_active');
        let next = this.nextElementSibling;
        if(next.style.maxHeight) {
            next.style.maxHeight = null;
        } else {
            let act = document.querySelectorAll('.faq_title.faq_active');
            for(j = 0; j<act.length; j++) {
                act[j].classList.remove('faq_active')
                act[j].nextElementSibling.style.maxHeight = null;
            }
            this.classList.add('faq_active');
            next.style.maxHeight = '800px'
           
        }
    });
}


// TOP버튼
let topBtn = document.querySelector('#topBtn');

function scrollBtn() {
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop >300) {
        topBtn.classList.add('topActive');
    } else {
        topBtn.classList.remove('topActive');
    }
}

window.onscroll = function() {
    scrollBtn();
}


topBtn.addEventListener('click',() => {
    window.scrollTo({top : 0, behavior: 'smooth'});
})



