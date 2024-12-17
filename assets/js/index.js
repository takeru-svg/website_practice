// jQueryによる、グッズリスト展開の実装
$(document).ready(function() {
    // 商品リストの要素を取得
    const goodsList1 = $('#goods-list1');
    const goodsList2 = $('#goods-list2');
    const goodsList3 = $('#goods-list3');
    // 初期状態でリストを非表示にする
    goodsList1.hide();
    goodsList2.hide();
    goodsList3.hide();
    // ラーメンズボタンをクリックした時
    $('#ramens-button').on('click', function() {
        // goodsList1の表示/非表示をトグル
        goodsList1.toggle();
        // 他のリストは非表示にする
        goodsList2.hide();
        goodsList3.hide();
    });
    // 小林賢太郎ボタンをクリックした時
    $('#kobayashi-button').on('click', function() {
        // goodsList2の表示/非表示をトグル
        goodsList2.toggle();
        // 他のリストは非表示にする
        goodsList1.hide();
        goodsList3.hide();
    });
    // 片桐仁ボタンをクリックした時
    $('#katagiri-button').on('click', function() {
        // goodsList3の表示/非表示をトグル
        goodsList3.toggle();
        // 他のリストは非表示にする
        goodsList1.hide();
        goodsList2.hide();
    });
});


// jQueryによる、NEWSのアコーディオンメニュー
$('.news-easy').on('click' , function() {
    $(this).next('.news-detail').slideToggle();
});


