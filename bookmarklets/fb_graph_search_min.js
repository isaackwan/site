(function(){if(confirm("Have you scrolled to the end of results?")){var a=/(s|p)\d\d\dx\d\d\d\//g;document.body.innerHTML+="<textarea id='jresu' style='display:none;position:fixed;top:100px;width:50%;height:200px;z-index:2;' onmouseover='this.focus();this.select();'></textarea>";for(var b=document.querySelectorAll('[data-bt*="ct"][data-bt*="result"]'),c=0;c<b.length;c++)document.getElementById("jresu").innerHTML=document.getElementById("jresu").innerHTML+"\n"+b[c].src.replace(a,"").replace("https","http");document.getElementById("jresu").style.display="block"};})();