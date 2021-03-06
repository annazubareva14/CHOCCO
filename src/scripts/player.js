let player;
const playerContainer = $(".player");

let eventsInit = () => {
    $(".player__start").click(e => {
      e.preventDefault();
    
      if (playerContainer.hasClass("paused")) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    });

    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec =
          (player.getDuration() / 100) * newButtonPositionPercent;
        
        $(".player__playback-btn").css({
          left: `${newButtonPositionPercent}%`
        });
        
        player.seekTo(newPlaybackPositionSec);
       });

    $(".player__splash").click(e => {
      player.playVideo();
    });
    
    $(".volume__mute").click(e => {
      e.preventDefault();

      if (player.getVolume() == 0) {
        player.setVolume('100');
        $(".volume__bar-btn").css({
          left: `${100}%`
        });
      } else {
        player.setVolume('0');
        $(".volume__bar-btn").css({
          left: `${0}%`
        });
      }
    });

    $(".volume__bar").click(e => {
      const barVolume = $(e.currentTarget);
      const positionVolume = e.originalEvent.layerX;

      const newVolumeBtnPositionPercent = (positionVolume / barVolume.width()) * 100;
      const newVolumePosition = (player.getVolume() / 100) * newVolumeBtnPositionPercent;

      $(".volume__bar-btn").css({
        left: `${newVolumeBtnPositionPercent}%`
      });

      player.setVolume(newVolumePosition);
    });    

};

eventsInit();
 
const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);
    
    const minutes = addZero(Math.floor(roundTime / 60));
    const seconds = addZero(roundTime - minutes * 60);
    
    function addZero(num) {
      return num < 10 ? `0${num}` : num;
    }
    
    return `${minutes} : ${seconds}`;
};


const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();
    
    $(".player__duration-estimate").text(formatTime(durationSec));

    if (typeof interval !== "undefined") {
        clearInterval(interval);
      }
      
    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;
      
        $(".player__playback-btn").css({
          left: `${completedPercent}%`
        });
       
        $(".player__duration-completed").text(formatTime(completedSec));
    }, 1000);

};

const onPlayerStateChange = event => {
    /*
      -1 (?????????????????????????????? ?????????? ???? ????????????)
      0 (?????????????????????????????? ?????????? ??????????????????)
      1 (??????????????????????????????)
      2 (??????????)
      3 (??????????????????????)
      5 (?????????? ???????????? ??????????????).
    */
    switch (event.data) {
      case 1:
        playerContainer.addClass("active");
        playerContainer.addClass("paused");
        break;
    
      case 2:
        playerContainer.removeClass("active");
        playerContainer.removeClass("paused");
        break;
    }
};


function onYouTubeIframeAPIReady() {
 player = new YT.Player("yt-player", {
   height: "392",
   width: "662",
   videoId: "LXb3EKWsInQ",

   events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  },   

   playerVars: {
    'controls': 0,
    'disablekb': 1,
    'showinfo': 0,
    'rel': 0,
    'autoplay': 0,
    'modestbranding': 0
  }
 });
}