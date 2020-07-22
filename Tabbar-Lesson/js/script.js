$(function(){

  $('#tab-contents .tab[id != "tab1"]').hide();
  // $()関数では、特定の属性を持つ要素や属性値を絞り込む
  // 特定の属性を持つ要素のみ所得したいときは以下のように記述します。
  // $('要素[属性]')
  // 属性値が特定の値に等しい要素だけを取得したいとき
  // $('要素[属性 = '値']')
  // 初期設定で表示されるのはTAB1のコンテンツだけにして、それ以外の内容は非表示にしたい
  // 属性値が特定の値に等しくない要素だけを取得したいときは、以下のように記述します。
  // $('要素[属性 != "値"]')
  // 取得した要素を.hide()で非表示にする
  // id="tab-contents"の要素のうち、class="tab"かつid="tab1"出ない要素が非表示になる

  $('#tab-menu a').on('click',function(event) {
    // id="tab-menu"のaがクリックされたとき
    $('#tab-contents .tab').hide();
    // id="tab-contents"のclass="tab"を非表示
    $('#tab-menu .active').removeClass('active');
    // id="tab-menu"の中のclss="active"を剥奪
    $(this).addClass('active');
    // そのid="tab-menu"のaにclass="active"を付与
    $($(this).attr("href")).show();
    // そのクリックされたhref先の内容をattrで引き出し、.show()で表示させる
    event.preventDefault();
    // <a>を無効化
  });

});
