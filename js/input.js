// 영문, 공백이 아닌 값(숫자 or 한글) 입력 안되게 막기
function onlyAlphabet(ele) {
  ele.value = ele.value.replace(/[0-9]|[^\!-z\s]/gi,"");
}

const data = {
  inputedKey: "",
  inputedStr: ""
};

function getInput(e) {
  data[e.name] = e.value.toLowerCase();
}

function actionEn() {
  document.forResult.action = "result.html";
  document.forResult.submit();
}