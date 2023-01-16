let allchecked = document.querySelector('.allChecked');
let essentialCheck = document.querySelectorAll('.essentialCheck')

let surviceCheck = document.querySelector('#surviceCheck');
let privacyCheck = document.querySelector('#privacyCheck');

allchecked.addEventListener('click',()=>{
  essentialCheck.forEach(() =>{
    surviceCheck.checked = allchecked.checked;
    privacyCheck.checked = allchecked.checked;
  })
})

surviceCheck.addEventListener('click',()=>{
  if(allchecked.checked == true && surviceCheck.checked == false){
    allchecked.checked = surviceCheck.checked
  }
  e();
  console.log(chk);
})

privacyCheck.addEventListener('click',()=>{
  if(allchecked.checked == true && privacyCheck.checked == false){
    allchecked.checked = privacyCheck.checked
  }
  e();
})

function e(){
  if(surviceCheck.checked == true && privacyCheck.checked == true){
    allchecked.checked = surviceCheck.checked;
  }
}

let join1Btn = document.querySelector('.join1_btn');
let join1form = document.querySelector('#join1_form');

join1Btn.addEventListener('click',()=>{
  if(allchecked.checked == true){
    
  } else{
    alert('필수 약관에 모두 동의해주세요.')
    join1form.action = '/join1'
  }
})
