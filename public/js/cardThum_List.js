//검색 구현
function filter(){

    var value, name, item, i;

    value = document.getElementById("value").value.toUpperCase();
    item = document.getElementsByClassName("cardItem");

    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("cardName");
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        item[i].style.display = "flex";
      }else{
        item[i].style.display = "none";
      }
    }
  }


//카드상품 총 게시물 수
  let cardThum_tol = document.querySelector('#cardThum_tol');
  let card_li = document.getElementsByClassName('card_li');
  cardThum_tol.innerText = card_li.length;

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


//카테고리 선택
let cardT = document.getElementById('card_cate_1');
let cardCredit = document.getElementById('card_cate_2');
let cardcheck = document.getElementById('card_cate_3');


let cardCategory = document.querySelectorAll('.cardCategory');
let cardItem = document.querySelectorAll('.cardItom_wrap');

//카드전체
cardT.addEventListener('click', ()=>{
  for( var i = 0; i < cardCategory.length; i++ ){
    if(cardCategory[i].innerText == ``) {
        cardItem[i].style.display = 'none';
    } else {
      cardItem[i].style.display = 'block';
    }
  }
})

//신용카드
cardCredit.addEventListener('click', ()=>{
  for( var i = 0; i < cardCategory.length; i++ ){
    if(cardCategory[i].innerText == `체크카드`) {
        cardItem[i].style.display = 'none';
    } else {
      cardItem[i].style.display = 'block';
    }
  }
})

//체크카드
cardcheck.addEventListener('click', ()=>{
  for( var i = 0; i < cardCategory.length; i++ ){
    if(cardCategory[i].innerText == `신용카드`) {
        cardItem[i].style.display = 'none';
    } else {
      cardItem[i].style.display = 'block';
    }
  }
})

