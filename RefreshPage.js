//Refresh page every x seconds -- requires opening in new window (allow pop-ups)

javascript:function myMethod() { myURL=prompt(“Enter URL to refresh”,””); setInterval(function() { open(location.href, myURL) }, 1000*15) } myMethod();
