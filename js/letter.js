
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Gửi bạn Nhung", 
				"Gửi Lời Xin Lỗi Chân Thành Tới Nhung <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mình viết những lời này để nói lời XIN LỖI tới bạn.Mình biết lời xin lỗi này nói ra đã muộn. <br> Nhưng dù sao nói ra vẫn hơn giữ trong lòng. Lời Xin Lỗi mà mình đã muốn nói từ lâu<br> Mình xin lỗi về tất cả.Mình XIN LỖI.Ngoài lời xin lỗi ra mình không biết phải nói gì :( bạn ạ <br> Mình mong bạn có thể tha lỗi cho mình. Và chúng ta vẫn sẽ làm bạn. Những kỉ niệm với Nhung được làm bạn với Nhung là những niềm vui với mình.<br> Cảm Ơn! Và XIN LỖI   <br><br><p style='float:right; display:block; width:80px;'> Gửi Bạn</p>"],
			typeSpeed: 100,
			backSpeed: 50
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
