exports.action = function(data){



var reg="/"+data.phraseecriture+"(.+)/i" ; var rgxp = eval(reg) ; var temp = ClaraIA.reco.match(rgxp) ; console.log(temp)
var phrase=temp[1].trim()

var exec = require('child_process').exec


			console.log(phrase+"!!!!!!!!!!!!!")
					
	
					//var nircmd = path.resolve('%CD%', './plugins/ecriture/nircmd/nircmd.exe').replace('\\%CD%', '');
					ClaraIASpeech("j'écris dans la case");
					exec(ClaraIANircmd+ ' clipboard set "'+phrase+'"',function(){
						exec(ClaraIANircmd + ' sendmouse left click',function(){ 
							exec(ClaraIANircmd+' sendkey ctrl down',function(){
								exec(ClaraIANircmd+' sendkey v press',function(){
									exec(ClaraIANircmd+' sendkey ctrl up',function(){})
									})
								})
							})
					})
					
					return false
		
}