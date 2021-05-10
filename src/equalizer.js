

//#region Sliders 
//#region 32Hz slider variable
var slider1 = document.getElementById("slider1");
var output1 = document.getElementById("span1");
//#endregion
//#region 64Hz slider variable
var slider2 = document.getElementById("slider2");
var output2 = document.getElementById("span2");
//#endregion
//#region 125Hz slider variable
var slider3 = document.getElementById("slider3");
var output3 = document.getElementById("span3");
//#endregion
//#region 250Hz slider variable
var slider4 = document.getElementById("slider4");
var output4 = document.getElementById("span4");
//#endregion
//#region 500Hz slider variable
var slider5 = document.getElementById("slider5");
var output5 = document.getElementById("span5");
//#endregion
//#region 1KHz slider variable
var slider6 = document.getElementById("slider6");
var output6 = document.getElementById("span6");
//#endregion
//#region 2KHz slider variable
var slider7 = document.getElementById("slider7");
var output7 = document.getElementById("span7");
//#endregion
//#region 4KHz slider variable
var slider8 = document.getElementById("slider8");
var output8 = document.getElementById("span8");
//#endregion
//#region 8KHz slider variable
var slider9 = document.getElementById("slider9");
var output9 = document.getElementById("span9");
//#endregion
//#region 16KHz slider variable
var slider10 = document.getElementById("slider10");
var output10 = document.getElementById("span10");
//#endregion
//#endregion

// Display sliders value
output1.innerHTML = slider1.value; 
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;
output6.innerHTML = slider6.value;
output7.innerHTML = slider7.value;
output8.innerHTML = slider8.value;
output9.innerHTML = slider9.value;
output10.innerHTML = slider10.value;

//#region Music manipulation

const context = new AudioContext()
const audioElement = document.querySelector('audio')
const track = context.createMediaElementSource(audioElement)
const gainNode = context.createGain()
let analyser = context.createAnalyser()

let bassEQ1 = new BiquadFilterNode(context, {
  type: "peaking",
  frequency: 25,
  gain: slider1.value
})

let bassEQ2 = new BiquadFilterNode(context, {
  type: "lowshelf",
  frequency: 40,
  gain: slider2.value
})

let bassEQ3 = new BiquadFilterNode(context, {
  type: "lowshelf",
  frequency: 63,
  gain: slider3.value
})

const bassEQ4 = new BiquadFilterNode(context, {
  type: "lowshelf",
  frequency: 100,
  gain: slider4.value
})

const bassEQ5 = new BiquadFilterNode(context, {
  type: "lowshelf",
  frequency: 160,
  gain: slider5.value
})

const bassEQ6 = new BiquadFilterNode(context, {
  type: "lowshelf",
  frequency: 250,
  gain: slider6.value
})

const bassEQ7 = new BiquadFilterNode(context, {
  type: 'lowshelf',
  frequency: 400,
  gain: slider7.value
})

let highEQ8 = new BiquadFilterNode(context, {
  type: 'lowshelf',
  frequency: 630,
  gain: slider8.value
})

let highEQ9 = new BiquadFilterNode(context, {
  type: "peaking",
  frequency: 1000,
  gain: slider9.value
})

let highEQ10 = new BiquadFilterNode(context, {
  type: "peaking",
  frequency: 1600,
  gain: slider10.value,
})

//track.connect(gainNode).connect(context.destination)

//#endregion

//#region Sliders Functions

// 32Hz slider function
slider1.oninput = function(e) {
  output1.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  bassEQ1.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ1).connect(context.destination)
}
// 64Hz slider function
slider2.oninput = function(e) {
  output2.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  bassEQ2.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ2).connect(context.destination)
}
// 125Hz slider function
slider3.oninput = function(e) {
  output3.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  bassEQ3.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ3).connect(context.destination)
}
// 200Hz slider function
slider4.oninput = function(e) {
  output4.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  bassEQ4.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ4).connect(context.destination)
}
// 500Hz slider function
slider5.oninput = function(e) {
  output5.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  bassEQ5.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ6).connect(context.destination)
}
// 1KHz slider function
slider6.oninput = function(e) {
  output6.innerHTML = this.value;
  let value = parseInt(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  bassEQ6.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ6).connect(context.destination)
}
// 2KHz slider function
slider7.oninput = function(e) {
  output7.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  bassEQ7.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ7).connect(context.destination)
}
// 4KHz slider function
slider8.oninput = function(e) {
  output8.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  highEQ8.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ8).connect(context.destination)
}
// 8KHz slider function
slider9.oninput = function(e) {
  output9.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  highEQ9.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ9).connect(context.destination)
}
// 16KHz slider function
slider10.oninput = function(e) {
  output10.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (0.43429 * Math.log(value))
  console.log(Math.log(value))
  console.log(magDb)
  highEQ10.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ10).connect(context.destination)
}

//#endregion
//#endregion