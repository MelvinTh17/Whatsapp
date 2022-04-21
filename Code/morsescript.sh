#!/bin/sh
file_id=$(<"$bericht.txt") 
echo $file_id |python /root/wabot/morse/play.py -f 750 --wpm 15 -o output.wav
sleep 2
ffmpeg -i output.wav output.mp3
sleep 2
> bericht.txt
exit

