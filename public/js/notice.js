// 작성 공란 검사
function notice_ck(e){ 
  var writeWriter= document.getElementById('write_writer'); 
  var writeTitle = document.getElementById('write_title'); 
  var writeCont = document.getElementById('write_cont'); 

  if (writeWriter.value==''){
    alert("작성자 이름은 비워둘 수 없습니다.");
    writeWriter.focus();
    e.preventDefault()
  }
  if (writeTitle.value==''){
    alert("제목을 비워둘 수 없습니다.");
    writeTitle.focus();
    e.preventDefault()
  }
  if (writeCont.value==''){
    alert("내용을 비워둘 수 없습니다.");
    writeCont.focus();
    e.preventDefault()
  }
} 

const submit = document.querySelector("input[type=submit]");
submit.addEventListener("click",notice_ck)
// 예약업로드 선택시 date 활성화

//예약업로드 일자 제어하기
let today = new Date();
let year = today.getFullYear(); 
let month = today.getMonth() + 1
let date = today.getDate();

let uploadBtn = document.querySelectorAll('input[name="upload_radio"]');
let uploadDate = document.getElementById('upload_date');// 예약업로드 일자
uploadBtn[0].setAttribute('value',year+"-"+month+"-"+date);
uploadDate.setAttribute("value", `${year}-`+`${month}-`+`${date}`);

for(let i = 0; i<uploadBtn.length; i++){
  uploadBtn[i].addEventListener('click', ()=>{
    if(uploadBtn[i].value == "") {
      uploadDate.disabled = false;
      uploadDate.addEventListener("change",()=>{
        uploadBtn[i].setAttribute('value',uploadDate.value);
      })
    }
    else{
      uploadDate.disabled = true;
      uploadBtn[i].setAttribute('value',year+"-"+month+"-"+date);
    }
  });
}

uploadDate.setAttribute("min", `${year}-`+`${month}-`+`${date+1}`);
uploadDate.setAttribute("max", `${year}-`+`${month}-`+`${date+3}`);
