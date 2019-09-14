jQuery(document).ready(function($) {
	
    // 漢堡選單展開/收回
	$('.menu_icon').on('click', function(event) {
		event.preventDefault();

		// 避免點擊事件的傳播
		event.stopPropagation();

		$('body').toggleClass('open');
	});

    // 點擊網頁上其他地方，漢堡選單會收回
	$('html').on('click', function(event) {

		$('body').removeClass('open');
	});

    // 避免點擊事件的傳播
	$('.jq_menu li a').on('click', function(event) {
		
		event.stopPropagation();
	});

    // menu上的錨點，點擊後（網頁會滑到指定位置），同時漢堡選單收回
    $('.jq_menu .anchor').on('click', function(event) {
    	
    	$('body').removeClass('open');
    });



    // 漢堡選單的錨點效果
	$('.jq_menu .anchor').on('click', function(event) {
		event.preventDefault();
		
		var x=$(this).attr('href');

		$('html, body').animate({
			
			scrollTop: $(x).offset().top},
			1000);
	});



    // 購物車頁面，愛心變色
	$('.product_content>i').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});

	// 購物車頁面，「加入購物車」按鈕的hover效果
	$('.product_list li .add_cart').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$(this).addClass('active');
		$(this).children().addClass('active');
		$(this).find('i').addClass('active');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).removeClass('active');
		$(this).children().removeClass('active');
		$(this).find('i').removeClass('active');
	});




    // 註冊頁面，條款打開
    $('.terms a').on('click', function(event) {
    	event.preventDefault();
    	
    	$('body').toggleClass('active');
    });

    // 條款打開的「上下icon」
    $('.terms a').on('click', function(event) {
    	event.preventDefault();
    	
    	$('.terms i').toggleClass('fa-chevron-up')
    });





});
















