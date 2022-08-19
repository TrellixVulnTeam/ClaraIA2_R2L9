exports.init = function () {

var requesta = require('request');
var fs = require('fs');
var https = require('https');
var express = require('express');
var util = require('util');
var cheerio = require('cheerio')
var txt;
//var ip;
var data={};
 sse="";
var path = require('path');
var pathPlug=('./plugins')
var files = fs.readdirSync(pathPlug)


 ClaraDeezer=function(txt,txt2) {
	sse.emit('/clarapage', {command: "Deezer", Deezer: txt, 'myIPretour':txt2});
}


ClaraIASpeech = function ClaraIASpeech(txt,ip) {
//txt=txt.replace(new RegExp(',', 'ig'),"");txt=txt.replace(new RegExp('.', 'ig'),"");txt=txt.replace(new RegExp('-', 'ig'),"")
	if(typeof ip==="undefined"){ console.log(' ip undefined')
	try{var ip=ClaraIA.ipappel;
if(ip==undefined){var ip=ClaraIAIpMaster;console.log('			ip undefined en 2')}
		console.log(ClaraIA.ipappel+" 	ip appelant en speech")}
	catch(err){var ip=JClaraIAIpMaster;console.log(ClaraIAIpMaster+" ip appelant default")}
	}
	try{
var AddSpeakRnd=txt.split('|') ; txt=AddSpeakRnd[0]

if(AddSpeakRnd.length>1){
AddSpeakRnd.splice(0, 1)
var rndaskpseak=Math.floor(Math.random()*(AddSpeakRnd.length))
var AddSpeakRnd1=" "+AddSpeakRnd[rndaskpseak]	
txt=txt+AddSpeakRnd1

}
}catch(err){console.log(err," error function js")}
	sse.emit('/clarapage', {command: "saying", 'html': txt,  'myIPretour': ip })
	console.log("emit         ",txt,ip)
	return 
}

ClaraIASound = function musique(txt,ip) {console.log(txt.ip)
	if(typeof ip==="undefined"){ ip=ClaraIA.ipappel;console.log(ClaraIA.ipappel)}
	sse.emit('/clarapage', {command: "musique", musique: txt, 'myIPretour':ip});
	return 
}
//ClaraIA.speak=browserTalk(txt)
ClaraIARadio = function radio(txt,ip) {console.log('')
	if(typeof ip==="undefined"){ ip=ClaraIA.ipappel;console.log(ClaraIA.ipappel)}
	sse.emit('/clarapage', {command: "radio", radio: txt, 'myIPretour':ip});
	return 
}

ClaraIAScenario = function SCENARIO(txt) {console.log('')
	sse.emit('/clarapage', {command: "SCENARIO", SCENARIO: txt});
	return 
}

ClaraIARun = function ClaraIARun(txt,txt2) {console.log('')
if(typeof txt2==="undefined"){ var txt2=ClaraIA.ipappel;console.log(ClaraIA.ipappel+" ip appelant en call")}
		console.log(txt[0]+' nom plug à activer')
		console.log(txt.length)
for(var i=1;i<txt.length;i++){
console.log(txt[i]," les datas à envoyer")
	eval(txt[i]);
	
}
var tempo=path.resolve('%CD%',"./plugins/"+txt[0]+"/"+txt[0]+".js").replace('\\%CD%', '')
		     		var smart = require(tempo);
					smart.action(data)
					delete require.cache[require.resolve(tempo)]
		 			data={}
		 			return 		
	
}
ClaraIACall=function ClaraIACall(txt,txt2){

console.log(txt,txt2+' phrase à émuler + ip retour')
if(typeof txt2==="undefined"){ var txt2=ClaraIA.ipappel;console.log(ClaraIA.ipappel+" ip appelant en call")}

var req={
	"query":{
		'reco' : txt,
		'confidence' : txt2
	}
}
  var url = "https://127.0.0.1:4300/clara?reco=" + txt + "&confidence=" +  txt2
 
  console.log(url);
var tempo2=path.resolve('%CD%',"./script/traitement.js").replace('\\%CD%', '')
		     		var smartlife1 = require(tempo2);
	try{				smartlife1.init(req)}
	catch(err){delete require.cache[require.resolve(tempo2)];return }

					delete require.cache[require.resolve(tempo2)]
  //requesta(url)
  //xmlhttp.open("GET",url,true);
  //xmlhttp.send();
return
}

ClaraIAInfo = function INFOMODIALE(txt) {console.log('')
	sse.emit('/clarapage', {command: "INFOMODIALE", INFOMODIALE: txt});
	return 
}

ClaraIAIcones = function iconedomotique(txt,txt2) {console.log('')
	//sse1.emit('/scri', {command: "icone", icone: txt , 'myIPretour':txt2});
	sse.emit('/clarapage', {command: "iconedomotique", 'imgx': txt , 'onoff' :txt2});
	return 
}

AskMeTemp = function AskMeTemp(txta,callback) {console.log('Askme ON')
	if(typeof ip==="undefined"){ 
	try{var ip=ClaraIA.ipappel;console.log(ClaraIA.ipappel+" ip appelant en askme")}
	catch(err){var ip=ClaraIAIpMaster;console.log(ClaraIAIpMaster+" ip appelant default")}
	}
	try{
var AddSpeakRnd=txta.split('|') ; txta=AddSpeakRnd[0]
//console.log(AddSpeakRnd+"********************")
if(AddSpeakRnd.length>1){
AddSpeakRnd.splice(0, 1)
var rndaskpseak=Math.floor(Math.random()*(AddSpeakRnd.length))
var AddSpeakRnd1=" "+AddSpeakRnd[rndaskpseak]	
txt=txt+AddSpeakRnd1
}
}catch(err){console.log(err,"          error askme")}
	
	if(txt.length>0){sse.emit('/clarapage', {command: "saying", 'html': txt,  'myIPretour': ip })}
setTimeout(function(){ Askme=1 ;}, 3000);
return 
}


ClaraAskMe	= function ClaraAskMe(txta,callback) {//console.log(phras+"!!!!!!!!!!!!!!!!")
	
	sse.emit('/clarapage', {command: "saying", 'html': txta,  'myIPretour': ClaraIA.ipappel })
	Askme=1
	var myVar = setInterval(myTimer, 1000);

	function myTimer() {
 		if(ClaraIAResponse!==""){
			clearInterval(myVar);
			callback(ClaraIAResponse)
			
		}
	}
}

}