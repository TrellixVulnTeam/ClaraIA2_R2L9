exports.init = function (req) {
try{
	var cheerio = require('cheerio')
	var requestjarviswsrnodejs = require('request');path = require('path');var data={};
	console.log('')
	console.log(req.query.reco+' query');console.log(Askme+'   Askme')


		if(Askme==1){ 
			console.log('');
			console.log("Askme........wsrnodejs   "+req.query.reco,"  Askme OFF")
			Askme=0	
			ClaraIAResponse=req.query.reco
			setTimeout(function(){ ClaraIAResponse="";}, 1000)
			return	
		}	

var levi=function levi(){

	for(var i=0;i<ClaraIAItemtab.length;i++){
		var levitest=levenshtein(ClaraIAItemtab[i],txt)
		var concordancelevi=(levitest*100)/ClaraIAItemtab[i].length
		console.log(concordancelevi,ClaraIAItemtab[i])
			if(concordancelevi<21){
				console.log("trouvé en levenshtein 				",ClaraIAItemtab[i],concordancelevi);
				txt=ClaraIAItemtab[i]
				indextraitement();
				return
			}
	}
	if(VarLazy!=="1"){wiki()}
		else{console.log('rien donc stop car wiki'); return}
}
			
var indextraitement=function indextraitement(){
	txt=txt.trim()
console.log(txt+"recu en index")
//console.log(JarvisIANomPlugins.length,"sssss")
for(var i=0;i<ClaraIANomPlugins.length;i++){
					for (var j=0;j<ClaraIAPlugins[ClaraIANomPlugins[i]].length;j++){//   console.log(ClaraIAPlugins[ClaraIANomPlugins[i]][j]) 
				    	if(ClaraIAPlugins[ClaraIANomPlugins[i]][j].indexOf(txt)>-1){
			     			console.log('')
			     			console.log('FIND 3 : '+ClaraIANomPlugins[i])
				     	
			     			try{var temp=ClaraIAPlugins[ClaraIANomPlugins[i]][j+1]
								for (var k=0;k<temp.length;k++){console.log(temp[k],"		 les datas");eval(temp[k])}
			     			}//fin try
			     			catch(err){console.log(ClaraIAPlugins[ClaraIANomPlugins[i]][j+1]);eval(ClaraIAPlugins[ClaraIANomPlugins[i]][j+1])}
							if(data.lazy!==undefined){
								console.log("Lazy ==> 		",data);
								try{console.log(data.tts," 			valeur tts");if(data.tts!==undefined){ClaraIASpeech(data.tts);console.log('done')}}catch(err){}
									if(data.lazy=="off"){try{console.log(data.tts,"			vameur tts")}catch(err){}
										var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
				     					var smartlife1 = require(tempo1);
										smartlife1.init()
										return
							}
						var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
		     			var smartlife1 = require(tempo1);
		     			try{console.log(data.tts,"			valeur tts");if(data.tts!==undefined){ClaraIASpeech(data.tts);console.log('done')}}catch(err){}
						smartlife1.initlazy(data,ClaraIANomPlugins[i])

						delete require.cache[require.resolve(tempo1)]
						return
					}     	
			     			var tempo=path.resolve('%CD%',"./plugins/"+ClaraIANomPlugins[i]+"/"+ClaraIANomPlugins[i]+".js").replace('\\%CD%', '')
			     			var smartlife = require(tempo);
			     			try{console.log(data.tts,"				valeur tts");if(data.tts!==undefined){ClaraIASpeech(data.tts);console.log('done')}}catch(err){}
							try{smartlife.action(data)}
							catch(err){
										console.log(err)
										delete require.cache[require.resolve(tempo)]
				 						data={}
				 						
				 						return
				 			}
							delete require.cache[require.resolve(tempo)]
				 			data={}
							return
					 			
					 	}//fin if index off	


					}//fin for j

			}//fin for i
return
}//fin var index

var searchtraitement=function searchtraitement(){
console.log("search : "+txt)
for(var a=0;a<ClaraIAItemtab.length;a++){
if(txt.search(ClaraIAItemtab[a])>-1){console.log('FIND 0	 '+txt.search(ClaraIAItemtab[a])+" "+ClaraIAItemtab[a]);txt=ClaraIAItemtab[a];var a=ClaraIAItemtab.length+1}
}

for(var i=0;i<ClaraIANomPlugins.length;i++){
					for (var j=0;j<ClaraIAPlugins[ClaraIANomPlugins[i]].length;j++){
							for(var k=0;k<ClaraIAPlugins[ClaraIANomPlugins[i]][j].length;k++){
						
								if(txt.search(ClaraIAPlugins[ClaraIANomPlugins[i]][j][k].replace(new RegExp("[^0-9a-zA-Zéâœèî,ôûë.àçù]", 'ig')," "))>-1){
									console.log('');console.log("FIND 2 : ");console.log((ClaraIAPlugins[ClaraIANomPlugins[i]][j][k]))
									console.log('')
									try{
										var temp=ClaraIAPlugins[ClaraIANomPlugins[i]][j+1];console.log('');console.log(ClaraIAPlugins[ClaraIANomPlugins[i]],"*****"+temp)
										for (var kk=0;kk<temp.length;kk++){console.log('');console.log(temp[kk]," les datas");eval(temp[kk])}
							     	}
					     			catch(err){console.log('first error');console.log(err);console.log(ClaraIAPlugins[ClaraIANomPlugins[i]][j+1]);eval(ClaraIAPlugins[ClaraIANomPlugins[i]][j+1])}
					     			try{
							     		var tempo=path.resolve('%CD%',"./plugins/"+ClaraIANomPlugins[i]+"/"+ClaraIANomPlugins[i]+".js").replace('\\%CD%', '')
							     		var smartlife = require(tempo);
							     		try{console.log(data.tts," 			tts");if(data.tts!==undefined){ClaraIASpeech(data.tts);console.log('done')}}catch(err){}
										try{smartlife.action(data)}
										catch(err){
											delete require.cache[require.resolve(tempo)]
							 			data={};return}
										delete require.cache[require.resolve(tempo)]
							 			data={}				 	
										return
									}//fin try
									catch(err){
										console.log('');console.log(err,"erreur in plug ........")
										var tempo=path.resolve('%CD%',"./plugins/"+ClaraIANomPlugins[i]+"/"+ClaraIANomPlugins[i]+".js").replace('\\%CD%', '')
							     		var smartlife = require(tempo);
							     		try{console.log(data.tts,"			tts");if(data.tts!==undefined){ClaraIASpeech(data.tts);console.log('done')}}catch(err){}
										try{smartlife.action()}
										catch(err){delete require.cache[require.resolve(tempo)]
							 			
							 			data={}
							 			return}
										delete require.cache[require.resolve(tempo)]
							 			data={}
							 			return
									}//fin catch err

								}//fin if txt
						
							}//fin for k
						}//fin for j	
    			}//fin for i
    			console.log('rien en FIND 2 ==> levi')
    			levi()
    			return
    			//do to levins
}


var wiki=function wiki(){
	var tempo2=path.resolve('%CD%',"./script/wiki.js").replace('\\%CD%', '')
		     		var temp = require(tempo2);
					temp.init()

					delete require.cache[require.resolve(tempo2)]
return
}//fin wiki


if ( (req.query.reco.search(ClaraIANom)>-1)||(VarLazy=="1" ) ){console.log(ClaraIAItemtab,' passage lazy ',VarLazy,'VarLazy !!!!!!!!!!!')
			
			txt = req.query.reco ; txt=txt.replace(ClaraIANom,'') ; txt = txt.toLowerCase().trim();				
			ClaraIA.ipappel=req.query.confidence ; ClaraIA.reco=txt
				
				if(ClaraIAItemtab.indexOf(txt)>-1){// il est quelle heure
					console.log("indexOf >-1111111")
				indextraitement()
				return
				}//fin if index


				if((ClaraIAItemtab.indexOf(txt)<0)){//s'il te plait il est quelle heure
						
						console.log("indexOf <00000000000")
				searchtraitement()
				return				
				}
			


	
	ClaraIAResponse=""	
		data={}
return


}////fin first if !==undefined & mathilde





////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////



if ((typeof req.query.reco !== 'undefined')&&(req.query.reco.search(ClaraIANom)<0)) {
	console.log('pas de nom de système')

			txt = req.query.reco;	
			txt=txt.replace(ClaraIANom,'')		
			msg = "Reco: " + txt + " (" + req.query.confidence +")" + (req.query.force=='true' ? ' - FORCE': '');
			txt = txt.toLowerCase().trim();
		 

		console.log(ClaraIANomPluginsNoRules,"       pour info          ",ClaraIANomPluginsNoRules.length)
		console.log(ClaraIAPluginsNoRules," 			pour info")
		 ClaraIA.ipappel=req.query.confidence
		 ClaraIA.reco=txt

for(var i=0;i<ClaraIANomPluginsNoRules.length;i++){
					for (var j=0;j<ClaraIAPluginsNoRules[ClaraIANomPluginsNoRules[i]].length;j++){//   console.log(ClaraIAPlugins[JarvisIANomPlugins[i]][j]) 
				    	if(ClaraIAPluginsNoRules[ClaraIANomPluginsNoRules[i]][j].indexOf(txt)>-1){
			     			console.log('')
			     			console.log('FIND 1 : '+ClaraIANomPluginsNoRules[i])

			     	
			     			try{var temp=ClaraIAPluginsNoRules[ClaraIANomPluginsNoRules[i]][j+1]
								for (var k=0;k<temp.length;k++){console.log(temp[k]," les datas");eval(temp[k])}
			     			}//fin try
			     			catch(err){console.log(ClaraIAPluginsNoRules[ClaraIANomPluginsNoRules[i]][j+1]);eval(ClaraIAPluginsNoRules[ClaraIANomPluginsNoRules[i]][j+1])}
					if(data.lazy!==undefined){
						console.log("Lazy ==> ",data);
						try{console.log(data.tts,"          tts");if(data.tts!==undefined){ClaraIASpeech(data.tts);console.log('done')}}catch(err){}
							if(data.lazy=="off"){try{console.log(data.tts,"          tts")}catch(err){}
								var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
		     					var smartlife1 = require(tempo1);
								smartlife1.init()
								return
							}
						var tempo1=path.resolve('%CD%',"./script/plugin.js").replace('\\%CD%', '')
		     			var smartlife1 = require(tempo1);
						smartlife1.initlazy(data)

						delete require.cache[require.resolve(tempo1)]
						return
					}     	
			     			var tempo=path.resolve('%CD%',"./plugins/"+ClaraIANomPluginsNoRules[i]+"/"+ClaraIANomPluginsNoRules[i]+".js").replace('\\%CD%', '')
			     			var smartlife = require(tempo);
			     			try{console.log(data.tts,"        tts");if(data.tts!==undefined){ClaraIASpeech(data.tts);console.log('done')}}catch(err){}
							try{smartlife.action(data)}
							catch(err){delete require.cache[require.resolve(tempo)]

								
				 			data={}
							return}
							delete require.cache[require.resolve(tempo)]
				 			data={}
							return
					 			
					 	}//fin if index off	


					}//fin for j

			}//fin for i
			console.log('NO MATCH pas de nom de système')
return
}// fin if !==undefined





}catch(err){console.log(err," de traitement");return}
return
}
 