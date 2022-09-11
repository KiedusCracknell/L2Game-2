const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false; //true if space is pressed
let angle = 0; //used to calculate angle of player for use in movement
let hue = 0; //colours
let frame = 0; //keeps track of frame count in animation, mainly used to set interval in which obstacles appear
let score = 0; //Will increase when player avoids obstacles
let gamespeed = 2; //speed at which the obstacles, background etc. move at, can be changed by difficulty settings

