exports.action = function (data) {
var request = require('request')
   console.log(data.deezertag)

var myIPretour=ClaraIA.ipappel
if((data.deezertag==0)&&(data.deezerPhrase!==undefined)){

var PhraseDeezer=ClaraIA.reco
var rgxpPhraseDeezer = /lance Deezer avec (.+)/i;
var Artiste = PhraseDeezer.match(rgxpPhraseDeezer);
var ArtisteFinal = Artiste[1] ;
var urldeezer='https://api.deezer.com/search/?q='+ArtisteFinal

    request({ uri : urldeezer, rejectUnauthorized: false }, function (err, response, body){
 
        //console.log(err+"ERREUR")
        var objet = JSON.parse(body); var listedeezer=[]

              for(var r=0 ; r<objet.data.length ; r++){
                //console.log(objet.data[r]['artist']['name']+' name')
                //console.log(objet.data[r]['album']['id']+"id Artiste   "+objet.data[r]['album']['title']+"  title")
                    if(  
                     (listedeezer.indexOf(objet.data[r]['album']['id'])<0) && 
                     (
                      (  objet.data[r]['album']['title'].search(new RegExp (ArtisteFinal,'gi' ))>-1     )||
                      (  objet.data[r]['artist']['name'].search(new RegExp (ArtisteFinal,'gi' ))>-1     )
                      )
                      ){
                        //(phrasedomo.search(new RegExp(temp[b],"gi"))>-1)
                      listedeezer.push(objet.data[r]['album']['id'])
                      //listedeezer.push(objet.data[r]['album']['title'])
                      console.log(objet.data[r]['album']['title']+"   "+objet.data[r]['artist']['name'])
                    }
              }
        console.log(listedeezer)

        var maxdeezer=listedeezer.length;var mindezzer=0
        var rnddeezer= Math.floor(Math.random() * (maxdeezer - mindezzer) + mindezzer)
        var numeroalbumdeezer=listedeezer[rnddeezer]


        var urldeezer='https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=album&id='+numeroalbumdeezer
        ClaraDeezer(urldeezer,myIPretour);
        ClaraIASpeech("|bonne écoute|sympa comme pluguine|tout le monde n'as pas la musique gratuite")
        return 

    })
}//fin if


if((data.deezertag==0)&&(data.deezerPhrase==undefined)){
  var urldeezer='https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id=1'
  ClaraDeezer(urldeezer,myIPretour);
  ClaraIASpeech("|bonne écoute|sympa comme pluguine|tout le monde n'as pas la musique gratuite")

 return
}//fin if

console.log(data.deezertag)

var urldeezer='https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id='+data.deezertag
ClaraIASpeech("|bonne écoute|sympa comme pluguine|tout le monde n'as pas la musique gratuite")
ClaraDeezer(urldeezer,myIPretour);

return 
}