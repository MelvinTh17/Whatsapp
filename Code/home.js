var XMLHttpRequest = require('xhr2');
var url = "https://lk9pp2garmm09ex1f7v3h3bx56vqwcam.ui.nabu.casa/api/states/switch.verlichting_halletje_aangezet";

async function getstat(client){
var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjMjJjYjJmOTZkNjA0NDU4YWJhMTY2ODZlM2U3ZTIwMiIsImlhdCI6MTY0MzgxNTAwNSwiZXhwIjoxOTU5MTc1MDA1fQ.2l$")
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      //console.log(xhr.responseText);
      var obj  = JSON.parse(xhr.responseText);
      var status = (obj['state']);
     // console.log(status);
     if(status === "on"){
     client.sendText("120363021838980706@g.us", 'Yes ✅');
     }else if(status === "off"){
     client.sendText("120363021838980706@g.us", 'No ❌');
     }else{
    client.sendText("120363021838980706@g.us", 'houston we have a problem! (something went wrong)');
     }

     xhr.send();

   }};



module.exports = { getstat };

