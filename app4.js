// ジャンケンの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');

// ジャンケンの手をランダムに作成する関数呼び出す
var js_hand = getJShand();

// ユーザーの手とJavaScriptのジャンケンの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);

// ユーザーの入力を判断して、グーチョキパー意外ならアラートを返す
while((user_hand !== "グー") && (user_hand !== "チョキ") && (user_hand !== "パー") && (user_hand !== null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
}

// 結果を表示する
if(user_hand == null){
  alert("またチャレンジしてね");
}else{
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}



// ランダムでジャンケンの手を作成する関数
function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3);
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else{
    hand_name = "パー";
  }
  return hand_name;
};

// ユーザーの手とJavaScriptのジャンケンの手を比べる関数
function winLose(user, js){
  var winLoseStr;

  if(user == "グー"){

    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if (js == "チョキ") {
      winLoseStr = "勝ち";
    }else{
      winLoseStr = "負け";
    }

  }else if(user == "チョキ"){

    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ";
    }else{
      winLoseStr = "勝ち";
    }

  }else{

    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if (js == "チョキ") {
      winLoseStr = "負け";
    }else{
      winLoseStr = "あいこ"
    }
  }
  return winLoseStr;
}
