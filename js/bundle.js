(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// make the horse dance
'use strict';

var img = document.getElementById('gif');
var step = Math.PI * .04;
var delta = 0;

function moveImg() {
  delta += step;
  img.style.transform = 'translateY(' + Math.sin(delta) * 80 + 'px)';
  requestAnimationFrame(moveImg);
}
requestAnimationFrame(moveImg);

// log secret messages
console.log("%c \n            _.-'%%|//%" + "\n          .'  .-'  /%%%" + "\n      _.-'_.-' 0)   \%%%" + "\n     /.\.'           \%%%" + "\n     \ /      _ +      %%%" + "\n      `'---'~`\   _ +*'\%%'   _ +--''- +%% +" + "\n              )*^     `''~~`          \%%% +" + "\n            _/                         \%%%" + "\n        _.-`/                           |%% +___" + "\n    _.-'   /       +            +         +|%%   .`\\" + "\n   /\     /      /             `\       \%'   \ /" + "\n   \ \ _ +/      /`~-._         _ +`\      \`'~~`" + "\n     `'` /-. +_ /'      `~'----'~    `\     \\" + "\n         \___ +'     cloudflair        \.-'`/" + "\n                                       `--'" + "\n FORT TECHNOLOGY; Coming Soon To A Desk Near You", 'color: HotPink;');

},{}]},{},[1]);
