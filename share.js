var $ = require('common:widget/ui/jquery/jquery.js');
var shareToSite = {
	shareCtrl: ".share-btn",
	shareSite: ".wrapper-share",
	shareBtns: ".share-to-site",

	init: function(share){
		var that = this;
	    that.shareWinTop = window.screen.height / 2 - 250;
	    that.shareWinLeft = window.screen.width / 2 - 300;
	    that.shareData = share;
	    that.bindShareEvents();	
	    if($.browser.msie && $.browser.version < 10){
	    	$('.wrapper-share .share-to-weibo').css('left', '0px');
	    	$('.wrapper-share .share-to-qqzone').css('left', '40px');
	    	$('.wrapper-share .share-to-renren').css('left', '80px');
	    	$('.wrapper-share .share-to-douban').css('left', '120px');
	    }else{
	    	$('.wrapper-share .share-to-weibo').css('left', '-30px');
	    	$('.wrapper-share .share-to-qqzone').css('left', '-30px');
	    	$('.wrapper-share .share-to-renren').css('left', '-30px');
	    	$('.wrapper-share .share-to-douban').css('left', '-30px');
	    }
	},

	bindShareEvents: function(){
		var that = this;
		var shareCtrlObj = $(that.shareCtrl);
		var shareSiteObj = $(that.shareSite);
		shareCtrlObj.hover(function() {
			shareSiteObj.show();
		}, function() {
			shareSiteObj.hide();
		});
	    $(that.shareBtns).click(function(){
	      var self = $(this);
	      var type = self.attr("act-type");
	      that.shareOpen(type,that.shareData["title"],that.shareData["content"],that.shareData["fromUrl"],that.shareData["picSrc"]);
	    });
	},
	shareOpen: function(type,title,summary,rLink,pic){
		var that = this;
		title=encodeURIComponent(title);
		summary=encodeURIComponent(summary);
		rLink=encodeURIComponent(rLink);
		pic=encodeURIComponent(pic);
		var winpath={
		  "weibo": 'http://service.weibo.com/share/share.php', 
		  "qqzone": 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey',
		  "renren": 'http://widget.renren.com/dialog/share',
		  "douban": 'http://www.douban.com/share/service'
		};
		var winparams={
		  "weibo": "pic=" +pic +"&title=" + summary.replace(/&nbsp;/g," ").replace(/<br \/>/g," ") + "&url=" + rLink+"&appkey=1343713053&searchPic=true",
		  "qqzone": 'title='+title+'&site=&url='+rLink+'&summary='+summary+'&pics='+pic,
		  "renren": 'title='+title+'&srcUrl='+rLink+'&title=&description='+summary+'&resourceUrl='+pic,
		  "douban": 'name='+title+'&image='+pic+'&text='+summary+'&href='+rLink
		}
		var winurl = winpath[type]+'?'+winparams[type];
		window.open(winurl,'_blank','scrollbars=no,width=600,height=500,left=' + that.shareWinLeft + ',top=' + that.shareWinTop + ',status=no,resizable=yes');
	}
};
return shareToSite;