let icon = document.getElementById('incon');
let bdy = document.body;
let mrng = document.getElementById('sun-moon');
let stp = document.getElementById('ply-stp');
let audio = document.getElementById('play');
let music = document.getElementById('music');
var count = 0;

$('#incon').click(function () {
  $(this).toggleClass('fa-solid fa-heart');
  $(this).toggleClass('fa-heart');
});

$('.fa-solid').click(function (e) {
  e.preventDefault();
  icon.style.color = 'red';
});

$('#ply-stp').click(function () {
  $(this).toggleClass('fas fa-pause');
  let de = stp.classList.contains('fa-pause');
  if (de == true) {
    count = 1;
    audio.play();
  }
  $(this).toggleClass('fas fa-play');
  let ce = stp.classList.contains('fa-play');
  if (ce == true) {
    count = 0;

    audio.pause();
    bdy.style.animation = 'changes 50s infinite ease-in-out';
  }
});
$('#sun-moon').click(function () {
  $(this).toggleClass('fas fa-moon');
  let mr = mrng.classList.contains('fa-moon');
  if (mr === true) {
    bdy.style.backgroundColor = 'black';
    bdy.style.color = 'white';
    music.setAttribute(
      'src',
      'midnight aura. [lofi _ jazzhop _ chill mix].mp3'
    );
    audio.load();
    audio.play();
    document.getElementById('ply-stp').className = 'fas fa-pause';
    bdy.style.backgroundImage = 'url(n_images/image5.jpg)';
    bdy.style.backgroundRepeat = 'no-repeat';
    bdy.style.backgroundPosition = 'center';
    bdy.style.backgroundSize = 'cover';
  }
  $(this).toggleClass('fas fa-sun');
  let Mr = mrng.classList.contains('fa-sun');
  if (Mr === true) {
    bdy.style.backgroundImage = 'url(m_images/image5.jpg)';
    music.setAttribute('src', 'early morning vibes _ happy lofi mix _).mp3');
    bdy.style.color = 'black';
    audio.load();
    audio.play();
    document.getElementById('ply-stp').className = 'fas fa-pause';
  }
});
