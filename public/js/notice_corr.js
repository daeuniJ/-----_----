// cate값 받아오기
const cateValue = document.querySelector("#corr_cate").value;
let cateCheck = document.querySelectorAll('input[name="radio"]');
for(let i = 0; i<cateCheck.length;i++){
  if(cateValue == cateCheck[i].value){
    cateCheck[i].setAttribute('checked',true);
  }
}