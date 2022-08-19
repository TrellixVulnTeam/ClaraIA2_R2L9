exports.init = function (data) {
var filestxtNoRules=""
//ClaraIA={};
ClaraIAPlugins={};ClaraIAItem="";ClaraIANomPlugins=[];ClaraIAItemtab=[]

VarLazy="0"

ClaraIAItemNoRules="";ClaraIAPluginsNoRules={};ClaraIANomPluginsNoRules=[];ClaraIAItemtabNoRules=[]

var fs = require('fs');var pathPlug=('./plugins')
    
var files = fs.readdirSync(pathPlug)

for(var a=0;a<files.length;a++){

		if(fs.statSync(pathPlug+'/'+files[a]).isDirectory()===true){
			ClaraIAPlugins[files[a].toLowerCase()]=[]
	ClaraIANomPlugins.push(files[a].toLowerCase())
								try{var filestxt=fs.readFileSync('./plugins/'+files[a]+'/'+files[a]+".xml",'utf8').toString().trim()}//fichier
									catch(err){
                                        console.log(err);
                                      var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'
                                        //return
                                    } //if(phrasedomo.search(new RegExp(temp[b],"gi"))>-1)
                                      if(filestxt.search(new RegExp("<NoRules>","gi"))>-1){
                                   // if(filestxt.search("<NoRules>")>-1){
                                        var filestxtNoRules=filestxt
                                        var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'                                       
                                    }
                                    if(filestxt==""){var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'}
                                    	var filestxt=filestxt.replace(new RegExp("</tag>","gi"),"")
										var filestxt=filestxt.replace(new RegExp("<item>","gi"),"")
								
										filestxt=filestxt.split('</item>')

    
					for(var b=0;b<filestxt.length-1;b++){//phrases 1 à 1
    				var phraseslongues=filestxt[b].trim()

    						var phrasescourtes=phraseslongues.split('<tag>')
    						
    				try{var phrasesfinal=phrasescourtes[0].toLowerCase().split(';')} 
    				 catch(err){var phrasesfinal="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
    				
    				
                    try{var datafile=phrasescourtes[1].split(';')} 
    				 catch(err){var datafile=["data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"]}
           
                for(var x=0;x<phrasesfinal.length;x++){
                if(phrasesfinal[x]!==""){ClaraIAItemtab.push(phrasesfinal[x])}
                else{ClaraIAItemtab.push("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
    					}
              if(ClaraIAItem!==""){ClaraIAItem=ClaraIAItem+","+phrasesfinal} 
    					 else{ClaraIAItem=phrasesfinal}

    						for(w=0;w<phrasesfinal.length;w++){
    							phrasesfinal[w]=phrasesfinal[w].trim()
    						}
    						for(w=0;w<datafile.length;w++){
    							datafile[w]=datafile[w].trim()
    						if(datafile[w]==""){datafile[w]="data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"}
                }
					ClaraIAPlugins[files[a].toLowerCase()].push(phrasesfinal) ; ClaraIAPlugins[files[a].toLowerCase()].push(datafile)
    			}
/////////////////
////////////////no rules
console.log(ClaraIAPlugins)
if(filestxtNoRules!==""){//console.log("lazy !!").replace(new RegExp("</tag>","gi"),"")
    filestxtNoRules=filestxtNoRules.replace(new RegExp('<NoRules>','gi'),'')
        ClaraIAPluginsNoRules[files[a].toLowerCase()]=[]
    ClaraIANomPluginsNoRules.push(files[a].toLowerCase())
    //console.log(filestxtNoRules)
  
    var filestxtNoRules=filestxtNoRules.replace(new RegExp("</tag>","gi"),"")
                                        var filestxtNoRules=filestxtNoRules.replace(new RegExp("<item>","gi"),"")
                                   
                                         filestxtNoRules=filestxtNoRules.split('</item>')
for(var b=0;b<filestxtNoRules.length-1;b++){//phrases 1 à 1
                    var phraseslongues=filestxtNoRules[b].trim()

                            var phrasescourtes=phraseslongues.split('<tag>')
                        
                    try{var phrasesfinal=phrasescourtes[0].toLowerCase().split(';')} 
                     catch(err){var phrasesfinal="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
                    
                    
                    try{var datafile=phrasescourtes[1].split(';')} 
                     catch(err){var datafile=["data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"]}
                     
        
                for(var x=0;x<phrasesfinal.length;x++){
                if(phrasesfinal[x]!==""){ClaraIAItemtabNoRules.push(phrasesfinal[x])}
else{ClaraIAItemtabNoRules.push("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
}
                
                        if(ClaraIAItemNoRules!==""){ClaraIAItemNoRules=ClaraIAItemNoRules+","+phrasesfinal} 
                         else{ClaraIAItemNoRules=phrasesfinal}

                            for(w=0;w<phrasesfinal.length;w++){
                                phrasesfinal[w]=phrasesfinal[w].trim()
                            }
                            for(w=0;w<datafile.length;w++){
                                datafile[w]=datafile[w].trim()
                                if(datafile[w]==""){datafile[w]="data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"}
                            }
                    ClaraIAPluginsNoRules[files[a].toLowerCase()].push(phrasesfinal) ; ClaraIAPluginsNoRules[files[a].toLowerCase()].push(datafile)
                }
               var filestxtNoRules=""
}

		}//fin if fs.statSync(pathPlug+'/'+files[a]).isDirectory()===true){
		






}//fin for a
var triFn = function(a, b){
  if (a.length > b.length) return -1;
  if (a.length  < b.length) return 1;
  if (a.length == b.length) return 0;
}
ClaraIAItemtab.sort(triFn); // tri le tableau qui deviendra 
ClaraIAItemtabNoRules.sort(triFn)

//console.log(ClaraIAPlugins)

//console.log(ClaraIANomPlugins)

//console.log(ClaraIAPluginsNoRules)

//console.log(ClaraIANomPluginsNoRules)

}

//////////////////////////////////
//////////////////////////////////


exports.initlazy = function (data,nomplug) {
VarLazy="1"
//ClaraIA={};
ClaraIAPlugins={};
ClaraIAItem="";
ClaraIANomPlugins=[]
var fs = require('fs');
       var pathPlug=('./plugins')
       ClaraIAItemtab=[]

   //console.log(data.lazy,"44444")
   //return
var fs = require('fs');
       var pathPlug=('./plugins')
       
       //console.log(pathPlug)
var files = data.lazy
//console.log(files,"66666")




            ClaraIAPlugins[nomplug]=[]
    ClaraIANomPlugins.push(nomplug)
                                try{var filestxt=fs.readFileSync(files,'utf8').toString().trim()}//fichier
                                    catch(err){
                                        console.log(err+"                     error plugin js");
                                      var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'
                                        //return
                                    }
                                    console.log(filestxt,"            filestxt")
                                    if(filestxt==""){var filestxt='<item>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<tag>data.xxxxxxxxxxxxxxxxxxxxxxxxxx="xxxxxxxxxxxxxxxxxxxxxxxx"</tag></item>'}
                                        var filestxt=filestxt.replace(new RegExp("</tag>","gi"),"")
                                        var filestxt=filestxt.replace(new RegExp("<item>","gi"),"")
                                       
                                        filestxt=filestxt.split('</item>')

  
                    for(var b=0;b<filestxt.length-1;b++){//phrases 1 à 1
                    var phraseslongues=filestxt[b].trim()

                            var phrasescourtes=phraseslongues.split('<tag>')
                           
                    try{var phrasesfinal=phrasescourtes[0].toLowerCase().split(';')} 
                     catch(err){var phrasesfinal="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
                    
                    
                    try{var datafile=phrasescourtes[1].split(';')} 
                     catch(err){var datafile=["data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"]}
                     
                   
                for(var x=0;x<phrasesfinal.length;x++){
                if(phrasesfinal[x]!==""){ClaraIAItemtab.push(phrasesfinal[x])}
                else{ClaraIAItemtab.push("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")}
                }
               
                        if(ClaraIAItem!==""){ClaraIAItem=ClaraIAItem+","+phrasesfinal} 
                         else{ClaraIAItem=phrasesfinal}

                            for(w=0;w<phrasesfinal.length;w++){
                                phrasesfinal[w]=phrasesfinal[w].trim()
                            }
                            for(w=0;w<datafile.length;w++){
                                datafile[w]=datafile[w].trim()
                                if(datafile[w]==""){datafile[w]="data.xxxxxxxxxxxxxxxxxxxxxxxxxx='xxxxxxxxxxxxxxxxxxxxxxxxxx'"}
                            }
                    ClaraIAPlugins[nomplug].push(phrasesfinal) ; ClaraIAPlugins[nomplug].push(datafile)
                }//for b


var triFn = function(a, b){
  if (a.length > b.length) return -1;
  if (a.length  < b.length) return 1;
  if (a.length == b.length) return 0;
}
ClaraIAItemtab.sort(triFn); // tri le tableau qui deviendra 
console.log(ClaraIAItem,"            pour info plug js")

console.log(ClaraIAItemtab,"               pour info plug")
console.log(ClaraIAPlugins,"               pour info plug")
console.log('var lazy        ',VarLazy)
}

exports.initialisation = function () {
  var path = require('path');
console.log('init Module nb '+ClaraIANomPlugins.length)
for(var a=0;a<ClaraIANomPlugins.length;a++){

var tempo1=path.resolve('%CD%',"./plugins/"+ClaraIANomPlugins[a]+"/"+ClaraIANomPlugins[a]+".js").replace('\\%CD%', '')
console.log(" Init Module ...... "+tempo1)
            var temp = require(tempo1);

console.log(temp.hasOwnProperty('init'));
if(temp.hasOwnProperty('init')){
  try {temp.init()}
  catch(err){}
}
          //delete require.cache[require.resolve(tempo1)]

//var filestxt=fs.readFileSync('./plugins/'+files[a]+'/'+files[a]+".xml",'utf8').toString().trim()
}//fichier

//ClaraIANomPlugins
}