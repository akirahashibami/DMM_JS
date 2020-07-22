$(function(){

  $('.menu-trigger').on('click',function(event){
    // .menu-triggerクッリク時に行われる処理
    $(this).toggleClass('active');
    // toggleClassはそのクラス名がなければ付与し、あれば剥奪
    $('#sp-menu').fadeToggle();
    // fadeToggleは要素のフェードインとフェードアウトを切り替える。
    // 今回の場合はハンバーガーメニューがクリックされた時、sp-menuをフェードインさせ、もう一度押された時にフェードアウトさせる。
    event.preventDefault();
    // aタグの機能を無効化
  });
});
