let cardThumW_btn = document.querySelector('.cardThumW_btn');

function cardWCheck(e) {

    var card_name = document.getElementById('card_name');
    var card_img = document.getElementById('card_img');
    var card_info = document.getElementById('card_info');
    var card_benefit = document.getElementById('card_benefit');
    var card_cont = document.getElementById('card_cont');

    if(card_name.value=='') {
        alert("제품명을 입력해주세요.");
        e.preventDefault();
        return false;
    }
    if(card_img.value=='') {
        alert("제품 이미지를 첨부해주세요.");
        e.preventDefault();
        return false;
    }
    if(card_info.value=='') {
        alert("카드 소개란을 입력해주세요.");
        e.preventDefault();
        return false;
    }
    if(card_benefit.value=='') {
        alert("제품 혜택을 입력해주세요.");
        e.preventDefault();
        return false;
    }
    if(card_cont.value=='') {
        alert("내용을 입력해주세요.");
        e.preventDefault();
        return false;
    } 
}

cardThumW_btn.addEventListener("click",cardWCheck);