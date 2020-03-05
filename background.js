
if(!localStorage.getItem('fetchTimeout')){
	
	localStorage.setItem('fetchTimeout', 39);
}


chrome.windows.onCreated.addListener(function() {

	localStorage.setItem('startTime', Date.now());

})


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

	console.log('tabs updated');
	console.log(localStorage.getItem('fetchTimeout')*60);
	
	var nowTime = Date.now();
	var diffTime = nowTime - localStorage.getItem('startTime');
	diffTime = diffTime /1000;  //milliseconds->seconds

	if(diffTime > localStorage.getItem('fetchTimeout')*60)   // larger than 30 minutes
	{
		console.log('time for rest');
		var alertString = "Take a deep breath , get up , and relax";

		alert(' Some Relax will solve your problem '); 

  	// chrome.tts.speak(
    //       alertString, {'lang': 'en-US', 'rate': 0.7});  

		localStorage.setItem('startTime', Date.now());		
	}

});


// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function(details){
	if(details.reason == "install"){
		console.log("This is a first install!");

		localStorage.setItem('fetchTimeout', 39);
		localStorage.setItem('startTime', Date.now());

		var newURL2 = "tips.html";
		chrome.tabs.create({ url: newURL2 });



	}else if(details.reason == "update"){

		//localStorage.setItem('fetchTimeout', 50);


	}
});