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


// // 게시글 번호 매기기
// let num = document.querySelectorAll(".num");
// let numArray = []
// for (let i = num.length; i>0; i--){
//     numArray.push(i)
// }
// for(let j = 0; j < numArray.length; j++){
//     num[j].innerHTML = `${numArray[j]}`
// }
// //총 게시물 수 구하기
// list_tt.innerText += `총 ${num.length}건, `;
