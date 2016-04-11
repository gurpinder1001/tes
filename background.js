 //$("body").append('Taaaaaaaaaaaaaaaa');// JavaScript Document
 $("div").dblclick(function(){
	var a=$(this).text();
	
	alert(a);
	
	});
 //alert("aaaaa");
 window.addEventListener("load", function() {
    chrome.extension.sendMessage({
        type: "dom-loaded", 
        data: {
            myProperty: "value"
        }
    });
}, true);
 
