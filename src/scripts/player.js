let player;
const playerContainer = $(".player");
const pause = $(".player__end");

let eventsInit = () => {

////start-stop btns
    $(".player__start").click(e => {
      e.preventDefault();

     // $(".player__splash").addClass("player__splash-off");

      if (playerContainer.hasClass("paused")) {
        //playerContainer.removeClass("paused");
        player.pauseVideo();
        //$(".player__start").addClass("disappear");
       // pause.css("display", "block");

      } else {
        //playerContainer.addClass("paused");
        player.playVideo();
       // $(".player__start").addClass("disappear");
        //pause.css("display", "block");

      }
    });

    $(".player__end").click(e => {
        e.preventDefault();
   
  
        if (playerContainer.hasClass("paused")) {
          //playerContainer.removeClass("paused");
          player.pauseVideo();
          //$(".player__start").removeClass("disappear");
          //pause.css("display", "none");
  
        } else {
          //playerContainer.addClass("paused");
          player.playVideo();
         // $(".player__start").addClass("disappear");
          //pause.css("display", "block");
  
        }
      })
///////////////



////you can move video with video scroll
      $(".player__duration").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec =
        (player.getDuration() / 100) * newButtonPositionPercent;


        $(".player__duration-point").css({
            left: `${newButtonPositionPercent}%`
          })    
          
          player.seekTo(newPlaybackPositionSec);

      });
      /////////////


   $(".sound__duration").click(e => {
        const bar2 = $(e.currentTarget);
        const clickedPosition2 = e.originalEvent.layerX;
        const newButtonPositionPercent2 = (clickedPosition2 / bar2.width()) * 100;
        


        $(".sound__duration-point").css({
            left: `${newButtonPositionPercent2}%`
          })    
                    player.setVolume(newButtonPositionPercent2);

      });







      ///big btn plays video
       $(".player__bigbtn").click(e => {
           player.playVideo(); 
         }
         )
        //////////
      
    };



///time number count and scroll moving with video 
    const formatTime = timeSec => {
        const roundTime = Math.round(timeSec);
        
        const minutes = addZero(Math.floor(roundTime / 60));
        const seconds = addZero(roundTime - minutes * 60);
        
        function addZero(num) {
          return num < 10 ? `0${num}` : num;
        }
        
        return `${minutes} : ${seconds}`;
       };
       //////////



       ///////duration point moving
      const onPlayerReady = e => {
        e.target.setVolume(0);

        let interval;
        const durationSec = player.getDuration();
        
        
        interval = setInterval(() => {
          const completedSec = player.getCurrentTime();
          const completedPercent = (completedSec / durationSec) * 100;

          $(".player__duration-point ").css({
            left: `${completedPercent}%`
          });
        }, 500);
       };
//////////

/* $(".player__sound").on("click", e =>{
  const tap = $(e.currentTarget);
  player.mute();
    tap.addClass("back");
}) */


$(".player__sound").on("click", e =>{
  const click = $(e.currentTarget);
  if (click.hasClass("sound")){click.removeClass("sound");player.mute(); click.addClass("back")}
  else {click.addClass("sound"); player.unMute(); click.removeClass("back")};
})

////centralised func to do everything alltogether
const onPlayerStateChange = event => {
    /*
      -1 (воспроизведение видео не начато)
      0 (воспроизведение видео завершено)
      1 (воспроизведение)
      2 (пауза)
      3 (буферизация)
      5 (видео подают реплики).
    */
    switch (event.data) {
      case 1:
        playerContainer.addClass("paused");
        $(".player__splash").addClass("player__splash-off");
        $(".player__start").addClass("disappear");
        pause.css("display", "block");
        $(".player__bigbtn").css("display", "none")

    break;

      case 2:
       playerContainer.removeClass("paused");
        $(".player__splash").removeClass("player__splash-off");
        $(".player__start").removeClass("disappear");
        pause.css("display", "none");
        $(".player__bigbtn").css("display", "block")
        break;
    }
   };


   
////youtube install and settings
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '100%',
    width: '100%',
    videoId: '6gbfpleFyOk',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },

    playerVars: {
        controls: 0,
        disablekb: 1,
        showinfo: 0,
        rel: 0,
        autoplay: 0,
        modestbranding: 1
      }
  });
}
//////////



eventsInit()