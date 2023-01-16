// 유효성 검사

function card_ck(){ 
  let name= document.getElementById('name'); 
  let tellnum = document.getElementById('tellnum'); 
  let bankAccount = document.getElementById('bankAccount'); 
  let address = document.getElementById('sample6_address'); 
  let pay = document.querySelector(".pay");

  // 숫자만 입력
  let num_partten = /[0-9]/;

  if (name.value==''){
    alert("이름은 비워둘 수 없습니다.");
    name.focus();
    return false
  }

// 전화번호 입력
  var phoneRegExp = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

  if (tellnum.value==''){
    alert("연락처를 비워둘 수 없습니다.");
    tellnum.focus();
    return false
  }
  if(!phoneRegExp.test(tellnum)){
    alert("잘못된 번호입니다.");
    tellnum.focus();
    return false
  }
  if(pay.value =="결제기관"){
    alert("결제기관을 선택해주세요.");
    pay.focus();
    return false
  }
  if (bankAccount.value==''){
    alert("결제 계좌를 입력해주세요");
    bankAccount.focus();
    return false
  }
  if (address.value==''){
    alert("수령주소를 입력해주세요");
    address.focus();
    return false
  }

  if( !(num_partten.test(tellnum.value))){
    alert("숫자만 입력 가능합니다.");
    tellnum.focus()
    return false
  };
  if(!(num_partten.test(bankAccount.value))){
    alert("숫자만 입력 가능합니다.");
    bankAccount.focus()
    return false
  };
} 
// 휴대폰 하이픈(-)자동
const autoHyphen = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
 }
 
// 결제일 지정 선택시 활성화
let accountDay = document.querySelectorAll('input[name="account_day"]');
let accountSelect = document.querySelector("#accountSelect");

for(let i = 0; i<accountDay.length; i++){
  accountDay[i].addEventListener('click', ()=>{
    if(accountDay[i].value == "") {
      accountSelect.disabled = false;
      accountSelect.addEventListener("change",()=>{
        accountDay[i].setAttribute('value',accountSelect.value);
      })
    }
    else{
      accountSelect.disabled = true;
    }
  });
}
// 결제일 보여주기(승인페이지)
let accountView = document.querySelector("#accountday");
for(let i = 0; i<accountDay.length; i++){
  if(accountView.value == accountDay[i].value){
    accountDay[i].setAttribute('checked',true);
  }
  else{
    accountDay[4].setAttribute('checked',true);
    accountSelect.setAttribute("value", `${accountView.value}`)
  }
}
// 교통카드 신청 여부(승인페이지)
let transcard = document.querySelector("#transcard");
let transcardapp = document.querySelectorAll('input[name="transportationCard"]');
for(let i = 0; i<transcardapp.length; i++){
  if(transcard.value == transcardapp[i].value){
    transcardapp[i].setAttribute('checked',true);
  }
}
