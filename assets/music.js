var collection=[];// final collection of sounds to play
var loadedIndex=0;// horrible way of forcing a load of audio sounds

// remap audios to a buffered collection
function initmusic(audios) {
  for(var i=0;i<audios.length;i++) {
    var audio = new Audio(audios[i]);
    collection.push(audio);
    buffer(audio);
  }
}

// did I mention it's a horrible way to buffer?
function buffer(audio) {
  if(audio.readyState==4)return loaded();
  setTimeout(function(){buffer(audio)},100);
}

// check if we're leady to dj this
function loaded() {
  loadedIndex++;
  if(collection.length==loadedIndex)playLooped();
}

// play and loop after finished
function playLooped() {
  var audio=Math.floor(Math.random() * (collection.length));
  audio=collection[audio];
  audio.play();
  audio.volume = 0.5;
  setTimeout(playLooped,audio.duration*5000);
}

// the songs to be played!

function uwu() {
    initmusic([
        'assets/dido.mp3',
        'assets/revenge.mp3',
        'assets/weather.mp3',
        'assets/vacations.mp3',
        'assets/dontmakemefallinlove.mp3'
      ]);
}