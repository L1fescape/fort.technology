var cornify = require('cornified');

document.addEventListener('click', function() {
  cornify.add();
});

// make the horse dance
var img = document.getElementById('gif')
var step = Math.PI * .04
var delta = 0

function moveImg() {
  delta += step
  img.style.transform = 'translateY(' + (Math.sin(delta) * 80) + 'px)'
  requestAnimationFrame(moveImg)
}
requestAnimationFrame(moveImg)

// log secret messages
console.log(
"%c \n            _.-'%%|//%" +
"\n          .'  .-'  /%%%" +
"\n      _.-'_.-' 0)   \%%%" +
"\n     /.\.'           \%%%" +
"\n     \ /      _ +      %%%" +
"\n      `'---'~`\   _ +*'\%%'   _ +--''- +%% +" +
"\n              )*^     `''~~`          \%%% +" +
"\n            _/                         \%%%" +
"\n        _.-`/                           |%% +___" +
"\n    _.-'   /       +            +         +|%%   .`\\" +
"\n   /\     /      /             `\       \%'   \ /" +
"\n   \ \ _ +/      /`~-._         _ +`\      \`'~~`" +
"\n     `'` /-. +_ /'      `~'----'~    `\     \\" +
"\n         \___ +'     cloudflair        \.-'`/" +
"\n                                       `--'" +
"\n FORT TECHNOLOGY; Coming Soon To A Desk Near You",
'color: HotPink;')
