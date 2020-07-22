$(function(){
  $('#btn').on('click', function() {
    // 入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + "bdb386e7e6ed787fde73cdd1ade43f7b",
      dataType : 'jsonp',
    }).done(function(data){
      // 通信成功の場合
      $('#place').text(data.name);
      // 位置
      $('#temp_max').text(data.main.temp_max);
      // 最高気温
      $('#temp_min').text(data.main.temp_min);
      // 最低気温
      $('#humidity').text(data.main.humidity);
      // 湿度
      $('#speed').text(data.wind.speed)
      // 風速
      $('#weather').text(data.weather[0].main);
      // 天気
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
      // 天気アイコン
    }).fail(function(data){
      // 通信失敗の場合
      alert('通信に失敗しました。');

    });
  });
});
