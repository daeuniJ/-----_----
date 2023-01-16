let tabAllbtn = document.querySelectorAll('.tab_link');
let tabBtn1 = document.querySelector('.tabBtn1');
let tabBtn2 = document.querySelector('.tabBtn2');
let tabBtn3 = document.querySelector('.tabBtn3');

let tabAllcon = document.querySelectorAll('.calcul_inner>div');
let tab1Con = document.querySelector('.tab1');
let tab2Con = document.querySelector('.tab2');
let tab3Con = document.querySelector('.tab3');

tabBtn1.addEventListener('click', () => {
  tabAllcon.forEach(div => {
    div.classList.remove('on');
  });
  tabAllbtn.forEach(li => {
    li.classList.remove('on');
  });
  tabBtn1.classList.add('on');
  tab1Con.classList.add('on');
})

tabBtn2.addEventListener('click', () => {
  tabAllcon.forEach(div => {
    div.classList.remove('on');
  });
  tabAllbtn.forEach(li => {
    li.classList.remove('on');
  });
  tabBtn2.classList.add('on');
  tab2Con.classList.add('on');
})

tabBtn3.addEventListener('click', () => {
  tabAllcon.forEach(div => {
    div.classList.remove('on');
  });
  tabAllbtn.forEach(li => {
    li.classList.remove('on');
  });
  tabBtn3.classList.add('on');
  tab3Con.classList.add('on');
})

let calculBtn = document.querySelectorAll('.calculating'); /* 계산하기 버튼 */
let reset = document.querySelectorAll('.reset'); /* 초기화 버튼 */

let depositMoney = document.querySelector('.depositinput1'); /* 예치금액 */
let depositPeriod = document.querySelector('.depositinput2'); /* 예치기간 */
let depositRate = document.querySelector('.depositinput3'); /* 예치금리 */

let savingMoney = document.querySelector('.savinginput1'); /* 적금액 */
let savingPeriod = document.querySelector('.savinginput2'); /* 적금기간 */
let savingRate = document.querySelector('.savinginput3'); /* 적금금리 */

let loanMoney = document.querySelector('.loaninput1'); /* 대출금액 */
let loanPeriod = document.querySelector('.loaninput2'); /* 대출기간 */
let loanRate = document.querySelector('.loaninput3'); /* 대출금리 */


calculBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let resultDeposit1 = document.querySelector('.resultdeposit1'); /* 일반세율 계산금액 */
    let resultDeposit2 = document.querySelector('.resultdeposit2'); /* 비과세율 계산금액 */

    let resultSaving1 = document.querySelector('.resultSaving1'); /* 입력한 금액 */
    let resultSaving2 = document.querySelector('.resultSaving2'); /* 입력한 기간 */
    let resultSaving3 = document.querySelector('.resultSaving3'); /* 입력한 이자율 */
    let resultSaving4 = document.querySelector('.resultSaving4'); /* 계산된 단순적금액 */
    let resultSaving5 = document.querySelector('.resultSaving5'); /* 이자금액 */
    let resultSaving6 = document.querySelector('.resultSaving6'); /* 일반세율 총계산금액 */

    let resultLoan1 = document.querySelector('.resultLoan1'); /* 월별 상환금 */

    /* 예금계산기 */
    if (tabBtn1.classList[3]) {
      resultDeposit1.innerText = Number(depositMoney.value) + Number(depositMoney.value * (depositRate.value / 100) * depositPeriod.value) - Number((depositMoney.value * (depositRate.value / 100) * depositPeriod.value) * 0.154);
      resultDeposit2.innerText = Number(depositMoney.value) + Number(depositMoney.value * (depositRate.value / 100) * depositPeriod.value);

    /* 적금계산기 */
    } else if (tabBtn2.classList[3]) {
      resultSaving1.innerText = savingMoney.value;
      resultSaving2.innerText = savingPeriod.value;
      resultSaving3.innerText = savingRate.value / 100;
      resultSaving4.innerText = savingMoney.value * savingPeriod.value
      resultSaving5.innerText = Number(savingMoney.value) * Number(savingRate.value / 100) * Number(savingPeriod.value);
      resultSaving6.innerText = Number(resultSaving4.innerText) + Number(resultSaving5.innerText) - Number(resultSaving5.innerText * 0.154);

    /* 대출계산기 */
    } else {
      resultLoan1.innerText = Number(loanMoney.value) + Number(loanMoney.value * (loanRate.value / 100));

    }
  })
})

/* 초기화 버튼 */
reset.forEach(btn => {
  btn.addEventListener('click', () => {
    depositMoney.value = '';
    depositPeriod.value = '';
    depositRate.value = '';
    savingMoney.value = '';
    savingPeriod.value = '';
    savingRate.value = '';
    loanMoney.value = '';
    loanPeriod.value = '';
    loanRate.value = '';
  })
})