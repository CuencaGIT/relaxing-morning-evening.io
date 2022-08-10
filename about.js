let Main = document.querySelector('html');
let audio = new Audio('488108__emrebugday__mysterious-horror-theme-song.mp3');
let spanner = document.getElementById('spanner');

$(spanner).click(function (e) {
  document.getElementById('salo').style.display = 'none';
  Main.addEventListener('click', () => {
    audio.play();
  });
});
$(function () {
  $('audio').on('play', function () {
    $('audio')
      .not(this)
      .each(function (index, audio) {
        audio.pause();
      });
  });
});
