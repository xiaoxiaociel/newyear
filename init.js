var $ = require('common:widget/ui/jquery/jquery.js');
var imghelper = require('searchresult:widget/ui/base/utils/imghelper.js');
var share = require('searchresult:widget/newyear_2015/share.js');
var trybyme = require('searchresult:widget/newyear_2015/try.js');

var newyear = module.exports =  {
	init: function(){
		var me = this;
		// var imgArr = [
		// 	'/static/searchresult/widget/newyear_2015/img/bg.jpg',
		// 	'/static/searchresult/widget/newyear_2015/img/top.png',
		// 	'/static/searchresult/widget/newyear_2015/img/middle.png',
		// 	'/static/searchresult/widget/newyear_2015/img/bottom.png',
		// 	'/static/searchresult/widget/newyear_2015/img/cardimg/bp.png',
		// 	'/static/searchresult/widget/newyear_2015/img/cardimg/xx.png',
		// 	'/static/searchresult/widget/newyear_2015/img/word.png',
		// 	'/static/searchresult/widget/newyear_2015/img/2015.png',
		// 	'/static/searchresult/widget/newyear_2015/img/btn_24.png',
		// 	'/static/searchresult/widget/newyear_2015/img/qrcode_24.png',
		// 	'/static/searchresult/widget/newyear_2015/img/shadow.png',
		// 	'/static/searchresult/widget/newyear_2015/img/share_24.png',
		// 	'/static/searchresult/widget/newyear_2015/img/sheep1_24.png',
		// 	'/static/searchresult/widget/newyear_2015/img/sheep2_24.png',
		// 	'/static/searchresult/widget/newyear_2015/img/xkyy.png'

		// ];
		imghelper.loadImage(['/static/searchresult/widget/newyear_2015/img/bg.jpg'], function(){
			me.resize();
			me.animate();
		})
		var shareContent = {
			"title": "aaaa",
			"content": "bbbbb",
			"fromUrl": "ccccc",
			"picSrc": "ddddd"
		};
		share.init(shareContent);
		trybyme.init();
	},
	animate: function(){
		if(!$.browser.msie || ($.browser.msie  && parseInt($.browser.version,10)>9)){
			$('.newyear-wrapper').addClass('css3Support');
			setTimeout(function(){
				$('.newyear-card, #photo-wrapper').css({opacity:1});
				$('.card, .sub').css({
					"-moz-transform":"rotateX(0deg)",
					"-webkit-transform":"rotateX(0deg)",
					"-0-transform":"rotateX(0deg)",
					"transform":"rotateX(0deg)"
				});
			},500);
			setTimeout(function(){
				$('.card .shadow').fadeIn();
			},1500);
			setTimeout(function(){
				$('#top>img').addClass('show');
				$('#bear,.word,#bp').addClass("show");
			},1800)
			setTimeout(function(){
				$('.year').addClass("show");
			},3500)
		}else{
			$('.newyear-wrapper').removeClass('css3Support')
			$('.newyear-card').animate({height:'597px',overflow:'visible'},1500);
		}
	},
	resize: function(){
		var $wrapper = $('.newyear-wrapper');
		$wrapper.css({height:Math.max(parseInt($(window).height())-$('#search').height()-1, 588)});

		if($wrapper.height()<790){
			$wrapper.addClass('mini-card');
			$('.qrcode-wrapper').addClass('mini-card');
			var percent = '75%';
			var orginWidth = 495;
			var $cardWrapper = $('.newyear-wrapper .newyear-card-wrapper');
			var $top = $cardWrapper.find('#top');
			var $topbg = $cardWrapper.find('#top>.bg');
			var $topimg = $top.find('img');
			var $middle = $cardWrapper.find('#middle');
			var $middleimg = $cardWrapper.find('#middle img');
			var $bottom = $cardWrapper.find('#bottom');
			var $year = $cardWrapper.find('.year');
			var $wordimg = $cardWrapper.find('.word>img');
			var $bpimg = $cardWrapper.find('#bp>img');
			var $bp = $cardWrapper.find('#bp');
			var $bear = $cardWrapper.find('#bear');
			var $xkShadow = $cardWrapper.find('#xk-shadow');

			$cardWrapper.css({width:Math.round(orginWidth*parseInt(percent)/100)});
			$top.css({'height':Math.round(parseInt($top.height())*parseInt(percent)/100), width:Math.round(parseInt($top.width())*parseInt(percent)/100)});
			$topimg.css({width:Math.round(parseInt($topimg.width())*parseInt(percent)/100)});
			$middleimg.css({width:Math.round(parseInt($middleimg.width())*parseInt(percent)/100)})
			$middle.css({'height':Math.round(parseInt($middle.height())*parseInt(percent)/100)});
			$bottom.css({'height':Math.round(parseInt($bottom.height())*parseInt(percent)/100), width:Math.round(parseInt($bottom.width())*parseInt(percent)/100)});
			$year.css({'height':Math.round(parseInt($year.height())*parseInt(percent)/100), width:Math.round(parseInt($year.width())*parseInt(percent)/100)});
			$wordimg.css({'height':Math.round(parseInt($wordimg.height())*parseInt(percent)/100), width:Math.round(parseInt($wordimg.width())*parseInt(percent)/100)});
			$bpimg.css({'height':Math.round(parseInt($bpimg.height())*parseInt(percent)/100), width:Math.round(parseInt($bpimg.width())*parseInt(percent)/100)});
			$bp.css({width:Math.round(parseInt($bp.width())*parseInt(percent)/100)});
			$bear.css({'height':Math.round(parseInt($bear.height())*parseInt(percent)/100), width:Math.round(parseInt($bear.width())*parseInt(percent)/100)});
			$xkShadow.css({'height':Math.round(parseInt($xkShadow.height())*parseInt(percent)/100), width:Math.round(parseInt($xkShadow.width())*parseInt(percent)/100)});
		}
		
	}
}