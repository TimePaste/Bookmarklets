//Pandora -- I’m still listening bookmark

javascript:function myMethod( ) { var q = document.querySelector("button[data-qa='keep_listening_button']"); if (q != null) q.click(); var t = document.querySelector("button[data-qa='play_button']"); if (t != null) t.click();} var timer = setInterval(myMethod, 1000); if(timer) { alert('Thanks for listening!'); }
