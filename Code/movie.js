var XMLHttpRequest = require('xhr2');
var lengte;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var t10;

function begin(client, filmnaam){
var url = `http://antiphates.feralhosting.com:3535/api/v1/Search/movie/${filmnaam}`;

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("ApiKey", "108a6f5234a943f188a1718bdfbac082");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
    console.log(xhr.status);
     var obj  = JSON.parse(xhr.responseText);
     //console.log(obj) //Comment dit weg om volledige json te zien
     var titda = obj.map(({title}) => ({title}));
     //Variabelen hieronder ziet er belachelijk uit (: Maar gaat niet anders
     try{
        t0 = JSON.stringify(titda[0]).match(/'([^']+)'/);
        t1 = JSON.stringify(titda[1]).match(/'([^']+)'/);
        t2 = JSON.stringify(titda[2]).match(/'([^']+)'/);
        t3 = JSON.stringify(titda[3]).match(/'([^']+)'/);
        t4 = JSON.stringify(titda[4]).match(/'([^']+)'/);
        t5 = JSON.stringify(titda[5]).match(/'([^']+)'/);
        t6 = JSON.stringify(titda[6]).match(/'([^']+)'/);
        t7 = JSON.stringify(titda[7]).match(/'([^']+)'/);
        t8 = JSON.stringify(titda[8]).match(/'([^']+)'/);
        t9 = JSON.stringify(titda[9]).match(/'([^']+)'/);
        //t10 = JSON.stringify(titda[10]).match(/'([^']+)'/);
        lengte = titda.length
        verzend(client);
        console.log(lengte);
        console.log(titda);
        console.log(t0);
        console.log(t1);
     }catch{
         
     }

    var test;
    
}};

xhr.send();
}

async function verzend(client){

if(lengte == "10"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }, {
            description: ' ',
            rowId: '2',
            title: `${t1}`,
        },
        {
            description: ' ',
            rowId: '3',
            title: `${t2}`,
        },
        {
            description: ' ',
            rowId: '4',
            title: `${t3}`,
        },
        {
            description: ' ',
            rowId: '5',
            title: `${t4}`,
        },
        {
            description: ' ',
            rowId: '6',
            title: `${t5}`,
        },
        {
            description: ' ',
            rowId: '7',
            title: `${t6}`,
        },
        {
            description: ' ',
            rowId: '8',
            title: `${t7}`,
        },
        {
            description: ' ',
            rowId: '9',
            title: `${t8}`,
        },
        {
          description: ' ',
          rowId: '10',
          title: `${t9}`,
       }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));

    //////////////////////////////////////////////////////////////////
    ///////////////LENGTE 9//////////////////////////////////////////
}else if(lengte == "9"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }, {
            description: ' ',
            rowId: '2',
            title: `${t1}`,
        },
        {
            description: ' ',
            rowId: '3',
            title: `${t2}`,
        },
        {
            description: ' ',
            rowId: '4',
            title: `${t3}`,
        },
        {
            description: ' ',
            rowId: '5',
            title: `${t4}`,
        },
        {
            description: ' ',
            rowId: '6',
            title: `${t5}`,
        },
        {
            description: ' ',
            rowId: '7',
            title: `${t6}`,
        },
        {
            description: ' ',
            rowId: '8',
            title: `${t7}`,
        },
        {
            description: ' ',
            rowId: '9',
            title: `${t8}`,
        }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));

    ///////////////////////////////////////////////////////////////////
    ////////////////LENGTE 8//////////////////////////////////////////
}else if(lengte == "8"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }, {
            description: ' ',
            rowId: '2',
            title: `${t1}`,
        },
        {
            description: ' ',
            rowId: '3',
            title: `${t2}`,
        },
        {
            description: ' ',
            rowId: '4',
            title: `${t3}`,
        },
        {
            description: ' ',
            rowId: '5',
            title: `${t4}`,
        },
        {
            description: ' ',
            rowId: '6',
            title: `${t5}`,
        },
        {
            description: ' ',
            rowId: '7',
            title: `${t6}`,
        },
        {
            description: ' ',
            rowId: '8',
            title: `${t7}`,
        }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));


}else if(lengte == "7"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }, {
            description: ' ',
            rowId: '2',
            title: `${t1}`,
        },
        {
            description: ' ',
            rowId: '3',
            title: `${t2}`,
        },
        {
            description: ' ',
            rowId: '4',
            title: `${t3}`,
        },
        {
            description: ' ',
            rowId: '5',
            title: `${t4}`,
        },
        {
            description: ' ',
            rowId: '6',
            title: `${t5}`,
        },
        {
            description: ' ',
            rowId: '7',
            title: `${t6}`,
        }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));


}else if(lengte == "6"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }, {
            description: ' ',
            rowId: '2',
            title: `${t1}`,
        },
        {
            description: ' ',
            rowId: '3',
            title: `${t2}`,
        },
        {
            description: ' ',
            rowId: '4',
            title: `${t3}`,
        },
        {
            description: ' ',
            rowId: '5',
            title: `${t4}`,
        },
        {
            description: ' ',
            rowId: '6',
            title: `${t5}`,
        }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));
}else if(lengte == "5"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }, {
            description: ' ',
            rowId: '2',
            title: `${t1}`,
        },
        {
            description: ' ',
            rowId: '3',
            title: `${t2}`,
        },
        {
            description: ' ',
            rowId: '4',
            title: `${t3}`,
        },
        {
            description: ' ',
            rowId: '5',
            title: `${t4}`,
        }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));


}else if(lengte == "4"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }, {
            description: ' ',
            rowId: '2',
            title: `${t1}`,
        },
        {
            description: ' ',
            rowId: '3',
            title: `${t2}`,
        },
        {
            description: ' ',
            rowId: '4',
            title: `${t3}`,
        }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));


}else if(lengte == "3"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }, {
            description: ' ',
            rowId: '2',
            title: `${t1}`,
        },
        {
            description: ' ',
            rowId: '3',
            title: `${t2}`,
        }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));

}else if(lengte == "2"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }, {
            description: ' ',
            rowId: '2',
            title: `${t1}`,
        }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));
}else if(lengte == "1"){
    client.sendListMessage("31637603402@c.us", [{
        title: 'Lampen',
        rows: [{
            description: ' ',
            rowId: '1',
            title: `${t0}`,
            
        }]
      }], 'Download center', 'Beta versie', 'Kies je film')
    .then((result) => console.log('Result: ', result))
    .catch((err) => console.error(err));
}else{
    client.message("31637603402@c.us", "Oei! Dit is dikke poep, er is iets fout gegaan in *movie.js*. Waarschijnlijk zijn er teveel variabelen genoteerd")
    console.log("Error movie.js")
}
client.onMessage(message3=>{
client.sendButtons(message3.from, `Je hebt gekozen voor de film: \n\n*${message3.body}* \n\nWil je doorgaan?`, [{id:"1","text":"Ja"},{id:"1","text":"Nee"}],"Bevestig")
}),
client.onMessage(message5=>{
  if(message5.body === "Ja"){
    client.sendText(message5.from, `Ik ga aan de slag!` );
  }
  if(message5.body === "Nee"){
    client.sendText(message5.from, "Antwoord is Nee");
  }
 })
}

module.exports = { begin };


