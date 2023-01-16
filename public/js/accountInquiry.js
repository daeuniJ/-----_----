let date = document.querySelector("#user_birth");

// 문자열, 하이픈을 막기 위해 input event 사용
date.addEventListener("input", () => {

  // 사용자 입력값은 모두 숫자만 받는다.(나머지는 ""처리)
  let val = date.value.replace(/\D/g, "");
  let leng = val.length;

  // 출력할 결과 변수
  let result = '';

  // 5개일때 - 20221 : 바로 출력
  if (leng < 6) result = val;
  // 6~7일 때 - 202210 : 2022-101으로 출력
  else if (leng < 8) {
    result += val.substring(0, 4);
    result += "-";
    result += val.substring(4);
    // 8개 일 때 - 2022-1010 : 2022-10-10으로 출력
  } else {
    result += val.substring(0, 4);
    result += "-";
    result += val.substring(4, 6);
    result += "-";
    result += val.substring(6);
  }
  date.value = result;

})

function checkInquriy(){
  if (!checkbirth(inquiryform.user_birth.value)) {
    return false;
  }
}


// 공백 체크 함수
function checkNull(value, data) {
  // 유효성 검사
  if (value == "") {
    alert(data + " 입력해주세요.");
    return false;
  }
  return true;
}


// 생년월일 체크 함수
function checkbirth(birth) {
  // 공백 체크 함수 호출
  if (!checkNull(birth, "생년월일을")) return false;

  // 정규표현식 사용
  var birthRegExp = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  // 생년월일 유효성 검사
  if (!birthRegExp.test(birth)) {
    alert("잘못된 생년월일입니다. 다시 입력해 주십시오.");
    return false;
  }
  return true;
}


/* 10보다 작다면 앞에 0을 붙이기 */
function modifyN(a){
  if (a < 10){
    return '0' + a;
  } else{
    return a;
  };
};

function timer1(){
  let date = new Date();
  let toyear = modifyN(date.getFullYear());
  let tomonth = modifyN(date.getMonth() + 1);
  let todate = modifyN(date.getDate());
  let tohour = modifyN(date.getHours());
  let tomin = modifyN(date.getMinutes());
  let nowTime = document.querySelector('.nowTime');
  nowTime.innerHTML = '기준일시' + ':' + ' ' + toyear + '.' + tomonth + '.' + todate + ' ' + tohour + ':' + tomin;
}; 


/************ 처음부터 시계보이게 하기 ************/
window.onload = function(){
  timer1();
};