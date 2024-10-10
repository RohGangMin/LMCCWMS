var openInbox = document.getElementById("myBtn");
openInbox.click();

function w3_open() {
  document.getElementById("mySidebar ").style.display = "block";
  document.getElementById("myOverlay ").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar ").style.display = "none";
  document.getElementById("myOverlay ").style.display = "none ";
}

function myFunc(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show ") == -1) {
    x.className += " w3-show ";
    x.previousElementSibling.className += " w3-red ";
  } else {
    x.className = x.className.replace(" w3-show ", " ");
    x.previousElementSibling.className =
      x.previousElementSibling.className.replace(" w3-red ", " ");
  }
}

openMail("VH 001L")
function openMail(personName) {
  var i;
  var x = document.getElementsByClassName("person ");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none ";
  }
  x = document.getElementsByClassName("test ");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" w3-light-grey ", " ");
  }
  document.getElementById(personName).style.display = "block ";
  event.currentTarget.className += " w3-light-grey ";
}

function add_VHtr(table_id) {//VH행 추가
  let table_VHbody = document.getElementById(table_id);
  let first_tr = table_VHbody.firstElementChild;
  let tr_clone = first_tr.cloneNode(true);//*1)복제된 node 반환

  table_VHbody.append(tr_clone);
  clean_first_tr(table_VHbody.firstElementChild);
}

function clean_first_tr(firstTr) {//값 초기화
  let children = firstTr.children;//*2) 자식 요소가 포함된 HTMLCollection을 반환

  children = Array.isArray(children) ? children : Object.values(children);//*3)
  children.forEach(x => {
    if (x !== firstTr.lastElementChild) {//마지막child가 아닐때
      x.firstElementChild.value = '';//td의 첫번째 child > input값 초기화
    }
  });
}

function add_V6tr(table_id) {//VH6행 추가
  let table_V6body = document.getElementById(table_id);
  let first_tr = table_V6body.firstElementChild;
  let tr_clone = first_tr.cloneNode(true);//*1)복제된 node 반환

  table_V6body.append(tr_clone);
  clean_first_tr(table_V6body.firstElementChild);
}

function clean_first_tr(firstTr) {//값 초기화
  let children = firstTr.children;//*2) 자식 요소가 포함된 HTMLCollection을 반환

  children = Array.isArray(children) ? children : Object.values(children);//*3)
  children.forEach(x => {
    if (x !== firstTr.lastElementChild) {//마지막child가 아닐때
      x.firstElementChild.value = '';//td의 첫번째 child > input값 초기화
    }
  });
}

function add_Ctr(table_id) {//고객사 행 추가
  let table_Cbody = document.getElementById(table_id);
  let first_tr = table_Cbody.firstElementChild;
  let tr_clone = first_tr.cloneNode(true);//*1)복제된 node 반환

  table_Cbody.append(tr_clone);
  clean_first_tr(table_Cbody.firstElementChild);
}

function clean_first_tr(firstTr) {//값 초기화
  let children = firstTr.children;//*2) 자식 요소가 포함된 HTMLCollection을 반환

  children = Array.isArray(children) ? children : Object.values(children);//*3)
  children.forEach(x => {
    if (x !== firstTr.lastElementChild) {//마지막child가 아닐때
      x.firstElementChild.value = '';//td의 첫번째 child > input값 초기화
    }
  });
}

function add_CCtr(table_id) {//고객사 행 추가
  let table_CCbody = document.getElementById(table_id);
  let first_tr = table_CCbody.firstElementChild;
  let tr_clone = first_tr.cloneNode(true);//*1)복제된 node 반환

  table_CCbody.append(tr_clone);
  clean_first_tr(table_CCbody.firstElementChild);
}

function clean_first_tr(firstTr) {//값 초기화
  let children = firstTr.children;//*2) 자식 요소가 포함된 HTMLCollection을 반환

  children = Array.isArray(children) ? children : Object.values(children);//*3)
  children.forEach(x => {
    if (x !== firstTr.lastElementChild) {//마지막child가 아닐때
      x.firstElementChild.value = '';//td의 첫번째 child > input값 초기화
    }
  });
}


function VHmodify_and_save(itag) {
  //클릭한 아이콘의 가장가까운 tr요소를 찾음.
  const tr = itag.closest("tr");
  //옵션 컬럼에 있는 셀은 제외해야하므로 첫번째 두번째 세번째 셀 요소를 가져옴.
  const firstcell = tr.children[0];
  const secondcell = tr.children[1];
  const thirdcell = tr.children[2];
  const fourthcell = tr.children[3];
  const fifthcell = tr.children[4];
  const sixthcell = tr.children[5];
  const seventhcell = tr.children[6];
  const eightthcell = tr.children[7];
  const ninegthcell = tr.children[8];
  const tenthcell = tr.children[9];
  const eleventhcell = tr.children[10];
  const tweleventhcell = tr.children[11];

  //첫번째 셀의 contenteditable 속성이 true라면.(나머지 셀들의 속성 동일)
  if (firstcell.contentEditable === "true") {
    //셀들의 속성 false로 모두 변경
    firstcell.contentEditable = "false";
    secondcell.contentEditable = "false";
    thirdcell.contentEditable = "false";
    fourthcell.contentEditable = "false";
    fifthcell.contentEditable = "false";
    sixthcell.contentEditable = "false";
    seventhcell.contentEditable = "false";
    eightthcell.contentEditable = "false";
    ninegthcell.contentEditable = "false";
    tenthcell.contentEditable = "false";
    eleventhcell.contentEditable = "false";
    tweleventhcell.contentEditable = "false";
    //저장 된 상태이므로 아이콘 수정으로 변경.
    itag.innerText = "수정";

    //첫번째 셀의 contenteditable 속성이 false라면(나머지 셀들의 속성 동일)
  } else {

    //각 셀들의 contenteditable 속성 true로 모두 변경하여 수정 가능하게 함
    firstcell.contentEditable = "true";
    secondcell.contentEditable = "true";
    thirdcell.contentEditable = "true";
    fourthcell.contentEditable = "true";
    fifthcell.contentEditable = "true";
    sixthcell.contentEditable = "true";
    seventhcell.contentEditable = "true"; 
    eightthcell.contentEditable = "true";
    ninegthcell.contentEditable = "true";
    tenthcell.contentEditable = "true";
    eleventhcell.contentEditable = "true";
    tweleventhcell.contentEditable = "true";
    //저장으로 텍스트 변경.
    itag.innerText ="[저장]";
    
    //첫번째 셀에 포커스를 줘서 상태 변경에 대해 알림.
    firstcell.focus();
  }
}
function remove(itag) {
  //가장 가까운 tr요소 찾아서 삭제
  const tr = itag.closest("tr");
  tr.remove();
}


function modify_and_save(itag) {
  //클릭한 아이콘의 가장가까운 tr요소를 찾음.
  const tr = itag.closest("tr");
  //옵션 컬럼에 있는 셀은 제외해야하므로 첫번째 두번째 세번째 셀 요소를 가져옴.
  const firstcell = tr.children[0];
  const secondcell = tr.children[1];
  const thirdcell = tr.children[2];
  const fourthcell = tr.children[3];
  const fifthcell = tr.children[4];

  //첫번째 셀의 contenteditable 속성이 true라면.(나머지 셀들의 속성 동일)
  if (firstcell.contentEditable === "true") {
    //셀들의 속성 false로 모두 변경
    firstcell.contentEditable = "false";
    secondcell.contentEditable = "false";
    thirdcell.contentEditable = "false";
    fourthcell.contentEditable = "false";
    fifthcell.contentEditable = "false";
    //저장 된 상태이므로 아이콘 수정으로 변경.
    itag.innerText = "수정";

    //첫번째 셀의 contenteditable 속성이 false라면(나머지 셀들의 속성 동일)
  } else {

    //각 셀들의 contenteditable 속성 true로 모두 변경하여 수정 가능하게 함
    firstcell.contentEditable = "true";
    secondcell.contentEditable = "true";
    thirdcell.contentEditable = "true";
    fourthcell.contentEditable = "true";
    fifthcell.contentEditable = "true";
    //저장으로 텍스트 변경.
    itag.innerText ="[저장]";
    
    //첫번째 셀에 포커스를 줘서 상태 변경에 대해 알림.
    firstcell.focus();
  }
}
function remove(itag) {
  //가장 가까운 tr요소 찾아서 삭제
  const tr = itag.closest("tr");
  tr.remove();
}