//#region variabelen en requirements
const wa = require('@open-wa/wa-automate');
require('http');
require("url");
const { url } = require('inspector');
const ytdl = require('ytdl-core');
const ytvideo = require('/root/wabot/ytvideo.js');
const phubjs = require('/root/wabot/phub.js');
const ytaudio = require('/root/wabot/ytaudio.js');
const devstat = require('/root/wabot/home.js');
const beginf = require('/root/wabot/movie.js');
const lampjeesp = require('/root/wabot/lampje.js')
var YoutubeMp3Downloader = require("youtube-mp3-downloader");
const SystemInformation = require('nodejs-system-info');
const { Stream } = require('stream');
const { json } = require('stream/consumers');
const rateLimit = require('express-rate-limit')
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
var phubtel;
var dwn;
let mp3link;
let ytv;
let filmtitel;
var filmnaam;
var resultaat;
const express = require("express");
const bodyParser = require("body-parser");
const { begin } = require('./movie');
const router = express.Router();
const app = express();
var bendeltje = 'een';
var cpuspeed;
var cpucores;
var omhoogtijd;
var cputemp;
var raminuse;
var ramfree;
var osplatform;
var osdistro;
var osrelease;
var loadgem;
var loadhuidig;
var ytvideostatus;
const temp = 20




//#endregion
//#region wa config
wa.create({
  sessionId: "COVID_HELPER",
  multiDevice: true, 
  authTimeout: 60, 
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: 'PT_BR',
  licenseKey: '3BB7F335-C90A4D57-AE4F01C0-AF68FF87',
  logConsole: false,
  cacheEnabled: true,
  popup: true,
  qrTimeout: 0, 
  useChrome: true,
  chromiumArgs: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-gl-drawing-for-tests',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0'
  ]
}).then(client => start(client));
//#endregion
function start(client) {
//#region API endpoints
////////////////////////////////////////////////////////////
////////////API ENDPOINTS///////////////////////////////////
////////////////////////////////////////////////////////////
const apiRequestLimiter = rateLimit({
  windowMs: 1 * 20 * 1000, // 1 minute
  max: 1 // limit each IP to 2 requests per windowMs
})

app.use(apiRequestLimiter)
app.use("/",router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post("/radarrnotify",(req, res) => {
  client.sendText("31637603402@c.us", '*Je film is klaar met downloaden!*🎉🎬 \n\n\n*BELANGRIJK* Het kan gebeuren dat de film stottert, mocht dit gebeuren stuur even een berichtje naar mijn maker.');
res.end("Top!");
});

router.post("/onbekend",(req, res) => {
  //client.sendText("31637603402@c.us", '*Er is een onbekend persoon gedetecteerd!*');
  client.sendButtons("31637603402@c.us", "*Er is een onbekend persoon gedetecteerd!* \n\nWil je het alarm activeren?", [{id:"1","text":"Ja"},{id:"1","text":"Nee"}],"Alarm centrale")
res.end("Top!");
});


readline.question('Command >', cliinput => {
  if(cliinput === "api help"){
  console.log(":3000/radarrnotify && :3000/snellestream");
  }
  readline.close();
});

router.post("/snellestream",(req, res) => {
  client.sendButtons("31637603402@c.us", `*Ik heb je verzoek ontvangen!*🎬 \n\nHet is mogelijk om een "snelle stream" te gebruiken, hierdoor hoef je niet te wachten op een download. Als je hiervoor kiest zal er waarschijnlijk geen ondertiteling beschikbaar zijn, ook zal er soms gebufferd gaan worden. Meer informatie? typ dan ".stream" \n\nWil je hier gebruik van maken?'`, [{id:"1","text":"Ja stream"},{id:"1","text":"Nee download"}],"Download centrum")
   client.onMessage(message=>{
  if (message.body === 'Ja' && bendeltje === 'een') {
    client.sendText(message.from, 'Top! Een momentje, ik zal zometeen de link sturen. Deze link kun je openen in je browser, of met een app die dit ondersteund');
    bendeltje = 'twee';
    console.log(bendeltje);
  }
  else if (message.body === 'Nee' && bendeltje === 'een') {
    client.sendText(message.from, 'Begrepen! Ik ga er mee aan de slag. \n\nAls alles klaar is zal ik een berichtje sturen.');
    bendeltje = 'twee';
    console.log(bendeltje);
  }
}),
res.end("Top!");
if (bendeltje === 'twee') {
  return;
}
});

app.listen(3000,() => {
console.log("Poort 3000 wordt nu gebruikt voor de API!");
})
//#endregion

client.onMessage(async message => {
    //#region Commando's
    opnieuw:
    dwn = message.body;
    var textformaat = JSON.stringify(message.body)
    console.log(message.body);
    if (message.body === '.help') {
      await client.sendText(message.from, 'Hey! Er zijn een aantal opdrachten die je kunt uitvoeren. Ik zal ze hieronder even benoemen \n\n*- .help* Help pagina, die ben je nu aan het lezen (: \n\n*- .alarm* ALARM! audiovisueel alarm (Google home/lichten) \n\n*- .boefa* HINT: Duikbril! \n\n*- .download* 🎥🎵 Menu voor het downloaden van films, series en muziek. \n\n\nTIP. Deze opdrachten kun je ook privé uitvoeren. \n\n\Groetjes Botje!');
    }
    if (message.body === '.status') {
      await client.sendText(message.from, 'Ik ben online ✅');
    } 
    if (message.body === '.credits') {
    await client.sendText(message.from, 'Credits aan Luc voor het fixen van de download functie!');
    }
    if (message.body === '.alarm') {
        await client.sendText("120363021838980706@g.us", '🚨 ALARM! Deze functie moet nog worden ingesteld');
      }
    if (message.body === 'lamp aan') {
      await client.sendText("120363021838980706@g.us", '🚨 ALARM! Deze functie moet nog worden ingesteld');
    }
    
    //else if (message.body === '.boefa') {
   //     await client.sendImage("120363021838980706@g.us", "/home/wa/boefa.jpg", 'boefa.jpg', 'Alsjeblieft!')
    //  }if (message.body === '.buttest') {
    //    client.sendButtons(message.from, `Je hebt gekozen voor de film: \n\n*${message2.body}* \n\nWil je doorgaan?`, [{id:"1","text":"Ja"},{id:"1","text":"Nee"}],"Bevestig")
    //  }
    if (message.body.startsWith('.spraak')) {
      var berichttekst = message.body;
      berichttekst = berichttekst.replace(".spraak", "")
      const gTTS = require('gtts');
      var gtts = new gTTS(berichttekst, 'nl');
      gtts.save('spraak.mp3', function (err, result){
      if(err) { throw new Error(err); }
      console.log("Tekst is omgezet!");
      });
      
      setTimeout(function(){
        client.sendFile(message.from, "/root/wabot/spraak.mp3")
      },3000);
      setTimeout(function(){
        var fs = require('fs');
        var filePath = '/root/wabot/spraak.mp3'; 
        fs.unlinkSync(filePath);
      },20000);
      
    }
    
    
    
               
    //#endregion
    //#region tech
    else if(message.body == '.techhelp'){
      client.sendText("31637603402@c.us", `Hey! \n\nEr zijn een aantal commando's die je mag gebruiken. Hieronder vindt je een lijstje. \n\n*.temp* Hiermee vraag je de huidge temperatuur op \n\n*.espreboot* Hiermee reboot je de esp32 \n\n*.datainfo* Hiermee krijg je een lijstje met beschikbare informatie`)
    }
    else if(message.body == '.temp'){
      client.sendText("31637603402@c.us", `Hoi! Het is momenteel ${temp} graden in de woonkamer.`)
    }
    else if(message.body == '.espreboot'){
     client.sendButtons("31637603402@c.us", `Je gaat zometeen de esp32 opnieuw opstarten \n\nWil je doorgaan?`, [{id:"1","text":"Ja"},{id:"1","text":"Nee"}],"Bevestig")
    }
    else if(message.body == `.datainfo`){
      client.sendListMessage("31637603402@c.us", [{
        title: 'Informatie centrum',
        rows: [{
            description: ' ',
            rowId: '1',
            title: 'Temperatuur',
            
        }, {
            description: ' ',
            rowId: '2',
            title: 'Luchtvochtigheid',
        },
        {
            description: ' ',
            rowId: '3',
            title: 'uptime',
        },
        {
          description: ' ',
          rowId: '4',
          title: 'Systeem',
      },
        {
            description: ' ',
            rowId: '5',
            title: 'Alles',
        }]
      }], 'Informatie', 'IOT versie', 'Kies je gewenste informatie')
    }
    
    //#endregion
    //#region Films
      if (message.body === '.ombi') {
         await client.sendText(message.from, 'Hey! Hoi! Welkom! \n\nIk zal even uitleggen wat ombi is. \n\nOmbi is een tool die ik gebruik om jou aanvragen te ontvangen. Deze applicatie kun je via een browser of als app gebruiken. In de app zijn alle films die je hartje verlangt weergegeven. \n\nAls je een leuke film hebt gevonden kun je hier op klikken waarna je een trailer, de cast of een korte omschrijving kunt vinden. \n\nVind je de film tof, dan klik je op request. Er zal gevraagd worden welke kwaliteit en download plek. Deze kun je gewoon laten staan (Ik heb ze al goed gezet voor je😉). Je kunt wel aangeven wie je bent, hiermee kan ik je een berichtje sturen zodra de film gedownload is. \n\nDit was een korte omschrijving van ombi. Heb je nog vragen? DAN HEB JE PECH, ZOEK MAAR LEKKER ZELF OP!😂 ');
        }

      if (message.body === '.film') {
        await client.sendText(message.from, '*welke film/serie wil je graag zien?*');
        let mov = 1;
        if(mov === 1)
        client.onMessage(message2=>{
          filmtitel = message2.body 
          ombi();
           mov = 0;
        })
  
      }
      else if (message.body === '.download zoek') {
        await client.sendText(message.from, '*welke film/serie wil je graag zien?*');
        let mov = 1;
        if(mov === 1)
        client.onMessage(message2=>{
          filmnaam = message2.body 
          beginf.begin(client, filmnaam)
          //client.sendButtons(message.from, `Je hebt gekozen voor de film: \n\n*${message2.body}* \n\nWil je doorgaan?`, [{id:"1","text":"Ja"},{id:"1","text":"Nee"}],"Bevestig")
          //client.onMessage(message5=>{
         //   if(message5.body === "Ja"){
          //    client.sendText(message5.from, `Kijk in console` );
         //   }
        //    if(message5.body === "Nee"){
          //    client.sendText(message5.from, "Antwoord is Nee");
         //   }
             mov = 0;
          })
        }

    else if (message.body === '.download info') {
      await client.sendText(message.from, '*Heyoh!* \n\n');
    }

    else if (message.body === '.download') {
      await client.sendText(message.from, '*Welkom bij het download station!* \n\nGebruik *.download zoek* om een film/serie te zoeken. Zodra je de gewenste film hebt opgegeven zal gevraagd worden voor een bevestiging. \n\nAls je op *Ja* klikt zal je doorgestuurd worden naar een website. Hier kun je extra informatie vinden (trailers, acteurs etc.) \n\nDe downloader is web gebasseerd. Wil je een nog betere ervaring, gebruik dan de *ombi* app. Deze is te downloaden via de app store. Meer informatie hierover kun je opvragen via *.ombi*');
    }
    //#endregion
    //#region Youtube
    else if (message.body === '.youtube') {
      await client.sendText(message.from, '*Vul de link in*');
      let ytb = 1;
      if(ytb === 1)
      client.onMessage(message3=>{
         ytlink = message3.body;
         ytaudio.youtubemusic(client, ytlink)
         ytb = 0;
         return;
      })
    }  
    else if (message.body === '.youtube video') {
      ytv = 1;
      await client.sendText(message.from, '*Vul de link in*');
      if(ytv === 1)
      client.onMessage(message=>{
         ytvideostatus = 1;
         ytlinkv = message.body;
         ytvideo.youtubevideo(client, ytlinkv, ytvideostatus)
         ytv = 0;
         return;
      })
    }
    //#endregion
    //#region systeem
    if (message.body === '.systeem') {
      var fs = require('fs');
      await client.sendText(message.from, 'Een momentje. Ik zal even voor je kijken.');
      const si = require('systeminformation');
      si.cpu(function(data) {
        cpuspeed = data.speed;
        console.log(data.speed);
        cpucores = data.cores
        console.log(data.cores)
       
      })
      si.time(function(data){
        omhoogtijd = data.uptime;
        console.log(data.uptime);
      })
      si.cpuTemperature(function(data){
        cputemp = data.main
        console.log(data.main)
      })
      si.mem(function(data){
        raminuse = data.used
        console.log(data.used);
        ramfree = data.free
        console.log(data.free)
      })
      si.osInfo(function(data){
        osplatform = data.platform;
        console.log(data.platform)
        osdistro = data.distro;
        console.log(data.distro);
        osrelease = data.release
        console.log(data.release);
      })
      si.currentLoad(function(data){
        loadgem = data.avgLoad;
        console.log(data.avgLoad);
        loadhuidig = data.currentLoad;
        console.log(data.currentLoad);
      })
      let systeeminformatie = `Load: \nGemiddelde: ${loadgem} \nHuidig: ${loadhuidig}`
 
    }
  if (message.body === 'Lampje aan') {
    lampjeesp.lampjeespaan();
    client.sendText(message.from, 'Lampje staat aan!💡✅');
  }
  if (message.body === 'Lampje uit') {
    lampjeesp.lampjeespuit();
    client.sendText(message.from, 'Lampje staat uit!💡❌');
  }
  if (message.body === 'Help mij') {
    client.sendText(message.from, "Hey! \n\nJe kunt twee commando's gebruiken! \n\n*Lampje aan*: Hiermee gaat het lampje aan (: \n\n*Lampje uit*: Hiermee gaat het lampje uit");
  }
  if (message.body === 'easter') {
    client.sendText(message.from, "PHIL VAN PIEETERS!");
  }
    
//#endregion
//#region 
if (message.body === '.escape test') {
  client.sendText("Welk getal heb je gekregen bij de vorige opdracht?")
  client.sendListMessage("31637603402@c.us", [{
    title: 'Opdracht 1',
    rows: [{
        description: ' ',
        rowId: '1',
        title: `1`,
        
    }, {
        description: ' ',
        rowId: '2',
        title: `2`,
    },
    {
        description: ' ',
        rowId: '3',
        title: `3`,
    },
    {
        description: ' ',
        rowId: '4',
        title: `4`,
    },
    {
        description: ' ',
        rowId: '5',
        title: `$5`,
    },
    {
        description: ' ',
        rowId: '6',
        title: `6`,
    }]
  }], 'Invoer', 'Beta versie', 'Kies getal')
  .then((result) => resultaat = result )
  .
  client.sendText(message.from, `cijfer ${resultaat} is correct!🎉 \n\nJe mag door naar de volgende opdracht!`)
  }
if (message.body === '.escape einde') {
  client.sendButtons(message.from, `Super! Je hebt alle cijfers ingevuld! \n\nBen je klaar om te ontsnappen?`, [{id:"1","text":"Ja"},{id:"1","text":"Nee"}],"Escape room 404")
   }
//#endregion
 
 
//#region test functies
function httpGet()
{
var options = {
  host: 'https://nl3530.dediseedbox.com:33430',
  path: '/api/v1/Images/poster/movie/597',
  headers: {'ApiKey': '108a6f5234a943f188a1718bdfbac082'}
}

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
http.request(options, callback).end();
}
}
//#endregion
function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}
})
}
