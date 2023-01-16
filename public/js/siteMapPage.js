//사이트맵 tab
let tabContent = document.getElementsByClassName('sm_tabcont');
function SM_tabOpen(e, tabName) {
    for(i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    document.getElementById(tabName).style.display = "block";


let tabL = document.getElementsByClassName('siteMap_tabLink');
for(i=0; i<tabL.length; i++) {
    tabL[i].className = tabL[i].className.replace(' active' , ' ');
}
    e.currentTarget.className += ' active';
}
