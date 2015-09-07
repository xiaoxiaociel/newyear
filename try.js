var $ = require('common:widget/ui/jquery/jquery.js');
var tryByMe = {
	tryCtrl: ".qrcode-wrapper",
	tryBtn: ".bottom .try",
	closeBtn: ".qrcode .close",

	init: function(share){
		var that = this;
	    that.bindShareEvents();		
	},

	bindShareEvents: function(){
		var that = this;
		var tryCtrlObj = $(that.tryCtrl);
		var tryBtnObj = $(that.tryBtn);
		var closeBtnObj = $(that.closeBtn);
		tryBtnObj.click(function(event) {
			tryCtrlObj.css({
				display: 'block',
				background: '#000',
				opacity: '0.5'
			});

		});
		closeBtnObj.click(function(event) {
			tryCtrlObj.css('display', 'none');
		});
		tryCtrlObj.click(function(event) {
			tryCtrlObj.css('display', 'none');
		});
	}
};
return tryByMe;