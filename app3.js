var alertString;
// アラートストリングを宣言

alertString = addString("WebCamp");
// アラートストリングに、addストリング関数（引数にwebcamp)を入れる

alert(alertString);
// アラートメソッドでアラートストリングを表示させるよう呼び出す

function addString(strA){
  // 関数addストリングを作り、引数はstrAという名前にする

  var addStr = "Hello " + strA;
  // 変数addStrにhelloと引数strAを足した物を入れる

  return addStr;
  // 戻り値としてaddStrをaddストリングに返す
}

alert("hello");
