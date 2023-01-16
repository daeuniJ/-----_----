// 카드 승인 여부에 따라 색 바꾸기
const present = document.querySelectorAll(".present")

for(let i = 0; i<present.length;i++){
  if(present[i].innerHTML !== "미발급"){
    present[i].style.backgroundColor = "#FFCF00";
    present[i].style.color = "#000";
  }
}