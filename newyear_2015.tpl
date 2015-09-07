<div class="newyear-wrapper css3Support">
	<!-- <div class="left"></div>
	<div class="right"></div> -->
	<div class="newyear-card-wrapper">
		<div>
			<div class="newyear-card">
				<div class="year">
					<img src="img/2015.png" alt="" />
				</div>
				<div class="word">
					<img src="img/word.png" alt=""/>
				</div>
				<div class='card'>
					<div class="sub" id='top'>
						<div class="bg"></div>
						<div id="xk-shadow"></div>
						<img src="img/photo.jpg" alt=""/>
					</div>
					<div class="sub" id='middle'>
						<div class="bg"></div>
					</div>
					<div class="sub" id='bottom'>
						<p>恭贺新春！万事如意！羊年大吉！恭贺新春！万事如意！羊年大吉！恭贺新春！</p>
						<div class="code">
							<p class="code-tip">
								在百度图片搜索专属编码也能看到哦~
								<span class="code-tip-pointer"></span>
							</p>
							<p>专属搜索码：11224346</p>
						</div>
					</div>
					<div id="bp">
							<img src="img/cardimg/bp.png" alt="">
						</div>
					<div id="bear">
						<img src="img/cardimg/xx.png" alt="">
					</div>
					<p class="shadow"></p>
				</div>
			</div>
		    <div class="bottom">
	            <h6 class="try">我也写一张</h6>
	            <div class="share-btn">
	                 <div class="wrapper-share shares">
	                    <div class="share-to-site share-to-weibo" act-type="weibo"></div>
	                    <div class="share-to-site share-to-qqzone" act-type="qqzone"></div>
	                    <div class="share-to-site share-to-renren" act-type="renren"></div>
	                    <div class="share-to-site share-to-douban" act-type="douban"></div>
	                </div>                   
	            </div>         
	        </div>			
		</div>
	</div>
</div>
<div class="qrcode-wrapper">
	<div class="line">		
	</div>
	<div class="qrcode">
		<div class="tips">
			<div class="tip"></div>
			<div class="close"></div>
		</div>
	</div>

</div>	

{%script%}
	require.async(["searchresult:widget/newyear_2015/init.js"],function(newyear) {
		newyear.init();
	})
{%/script%}