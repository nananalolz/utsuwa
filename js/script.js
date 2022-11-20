// 1. ページがスクロールされた時にイベントを設定する
$(window).scroll(function () {

  // 2. ウィンドウの位置を取得する
  var scrollTop = $(this).scrollTop(); // ウィンドウ枠内の上の位置を取得する
  var scrollBottom = scrollTop + $(this).height(); // ウィンドウ枠内の下の位置を取得する

  // 3. 指定した要素にそれぞれ処理を追加する
  $(".gallery .gallery-item").each(function (i) {

    // 4. ウィンドウの位置と表示したい要素の位置を比較する
    if (scrollBottom > $(this).offset().top) {

      // 5. 0.3秒毎ごとに1つずつfadeinクラスを付与する
      var target = this;
      setTimeout(function () {
        $(target).addClass("fadein");
      }, 300 * i);
    }
  });
}); // JavaScript Document

//トグルメニュー
$(document).ready(function () {
  $('#open_nav,#close_nav').on('click', function () {
    $('#navi').toggleClass('show');
  });
});

//アコーディオン
$(function () {
  $('.submenu h3').on('click', function () {
    $(this).next().slideToggle();
    //openクラスをつける
    $(this).toggleClass("open");
    //クリックされていないopenクラスを取る
    $('.submenu h3').not(this).removeClass('open');

    // 一つ開くと他は閉じるように
    $('.submenu h3').not(this).next().slideUp();
  });
});

//カートボタン
$(document).ready(function () {
  const $s1 = $('td span:first-child'); //span マイナスボタン
  const $s4 = $('td span:last-child'); //span プラスボタン
  let $s3 = $('td span:nth-child(2)'); //span 個数
  let $td3 = $('td:nth-child(3)');
  const $ticket = [2200, 1700, 500]; //金額

  //テーブルに金額を配置
  $.each($ticket, function (index, value) {
    $($td3[index]).text(value.toLocaleString());
  }); //each

  //プラスマイナスをクリックしたときの処理
  $s1.on('click', function () {
    //console.log(parseInt($(this).next().text()));
    if (parseInt($(this).next().text()) !== 0) {
      $(this).next().text(parseInt($(this).next().text()) - 1);
      total();
    }
  }); //$s1
  $s4.on('click', function () {
    $(this).prev().text(parseInt($(this).prev().text()) + 1);
    total();
  }); //$s3

  //合計金額
  function total() {
    let $total = 0;
    $.each($ticket, function (index, value) {
      //console.log(parseInt($($s3[index]).text()));
      $total += (parseInt($($s3[index]).text()) * value);
    }); //each
    $('tfoot td:last-child').text(`${$total.toLocaleString()}円`);
  } //total
}); //document
