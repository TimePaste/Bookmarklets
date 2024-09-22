//Youtube -- "Video paused. Continue watching?" bookmark

javascript:function myMethod( ) { var q = document.querySelector("#confirm-button > yt-button-shape > button[aria-label='Yes']"); if (q != null) q.click();} var timer = setInterval(myMethod, 1000); if(timer) { alert('Thanks for watching!'); }
