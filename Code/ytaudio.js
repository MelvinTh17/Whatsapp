var YoutubeMp3Downloader = require("youtube-mp3-downloader");
const fs = require('fs');
const { exit } = require('process');
const { Stream } = require('stream');

function youtubemusic(client){
    var YD = new YoutubeMp3Downloader({
        "ffmpegPath": "/usr/bin/ffmpeg",       
        "outputPath": "/root/wabot/youtube",    
        "youtubeVideoQuality": "highestaudio",  
        "queueParallelism": 2,                  
        "progressTimeout": 2000,                
        "allowWebm": false                    
    });
    
    var ID = '';
    ytlink = ytlink.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(ytlink[2] !== undefined) {
      ID = ytlink[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = ytlink;
    }
    
    YD.download(ID, "yt.mp3");
    
    YD.on("finished", function(err, data) {
      //client.sendFile("120363021838980706@g.us", "/root/wabot/youtube", "yt.mp3")
      client.sendText("120363021838980706@g.us", "Ik heb je audio gedownload🎉 Ik verstuur het nu");
      client.sendFile("120363021838980706@g.us", "/root/wabot/youtube/yt.mp3")
      setTimeout(function(){
        var fs = require('fs');
        var filePath = '/root/wabot/youtube/yt.mp3'; 
        fs.unlinkSync(filePath);
      },10000);
      
    });
    }

module.exports = { youtubemusic };
