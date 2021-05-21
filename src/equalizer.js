//#region Sliders 
//#region 32Hz slider variable
let slider1 = document.getElementById("slider1");
let output1 = document.getElementById("span1");
//#endregion
//#region 64Hz slider variable
let slider2 = document.getElementById("slider2");
let output2 = document.getElementById("span2");
//#endregion
//#region 125Hz slider variable
let slider3 = document.getElementById("slider3");
let output3 = document.getElementById("span3");
//#endregion
//#region 250Hz slider variable
let slider4 = document.getElementById("slider4");
let output4 = document.getElementById("span4");
//#endregion
//#region 500Hz slider variable
let slider5 = document.getElementById("slider5");
let output5 = document.getElementById("span5");
//#endregion
//#region 1KHz slider variable
let slider6 = document.getElementById("slider6");
let output6 = document.getElementById("span6");
//#endregion
//#region 2KHz slider variable
let slider7 = document.getElementById("slider7");
let output7 = document.getElementById("span7");
//#endregion
//#region 4KHz slider variable
let slider8 = document.getElementById("slider8");
let output8 = document.getElementById("span8");
//#endregion
//#region 8KHz slider variable
let slider9 = document.getElementById("slider9");
let output9 = document.getElementById("span9");
//#endregion
//#region 16KHz slider variable
let slider10 = document.getElementById("slider10");
let output10 = document.getElementById("span10");
//#endregion
//#endregion
//#region 16KHz slider variable
let slider11 = document.getElementById("slider11");
let output11 = document.getElementById("span11");
//#endregion
//#region 16KHz slider variable
let slider12 = document.getElementById("slider12");
let output12 = document.getElementById("span12");
//#endregion
//#region 16KHz slider variable
let slider13 = document.getElementById("slider13");
let output13 = document.getElementById("span13");
//#endregion
//#region 16KHz slider variable
let slider14 = document.getElementById("slider14");
let output14 = document.getElementById("span14");
//#endregion
//#region 16KHz slider variable
let slider15 = document.getElementById("slider15");
let output15 = document.getElementById("span15");
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
output11.innerHTML = slider11.value;
output12.innerHTML = slider12.value;
output13.innerHTML = slider13.value;
output14.innerHTML = slider14.value;
output15.innerHTML = slider15.value;


const context = new AudioContext()
//#region Music manipulation
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
  type: "lowshelf",
  frequency: 1000,
  gain: slider9.value
})

let highEQ10 = new BiquadFilterNode(context, {
  type: "peaking",
  frequency: 1600,
  gain: slider10.value,
})

let highEQ11 = new BiquadFilterNode(context, {
  type: "peaking",
  frequency: 2500,
  gain: slider11.value,
})

let highEQ12 = new BiquadFilterNode(context, {
  type: "peaking",
  frequency: 4000,
  gain: slider12.value,
})

let highEQ13 = new BiquadFilterNode(context, {
  type: "highshelf",
  frequency: 6300,
  gain: slider13.value,
})

let highEQ14 = new BiquadFilterNode(context, {
  type: "highshelf",
  frequency: 10000,
  gain: slider14.value,
})

let highEQ15 = new BiquadFilterNode(context, {
  type: "highshelf",
  frequency: 16000,
  gain: slider15.value,
})


const volume = document.getElementById('myVolume');
const audioElement = document.querySelector('audio')
const track = context.createMediaElementSource(audioElement)
const gainNode = context.createGain()
volume.addEventListener("mousemove", function() {
  var x = volume.value;
  var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '%, rgb(214,214,214)' + x + '%)';
  volume.style.background = color;
  audioElement.volume = x / 100;
});

//track.connect(gainNode).connect(context.destination)

//#endregion

//#region Sliders Functions

// 32Hz slider function
slider1.oninput = function(e) {
  output1.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  console.log(magDb)
  bassEQ1.gain.setTargetAtTime(magDb, context.currentTime, .01)
}
track.connect(bassEQ1).connect(context.destination)
// 64Hz slider function
slider2.oninput = function(e) {
  output2.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  console.log(magDb)
  bassEQ2.gain.setTargetAtTime(magDb, context.currentTime, .01)
}
track.connect(bassEQ2).connect(context.destination)
// 125Hz slider function
slider3.oninput = function(e) {
  output3.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  console.log(magDb)
  bassEQ3.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ3).connect(context.destination)
}
// 200Hz slider function
slider4.oninput = function(e) {
  output4.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  bassEQ4.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ4).connect(context.destination)
}
// 500Hz slider function
slider5.oninput = function(e) {
  output5.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  bassEQ5.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ6).connect(context.destination)
}
// 1KHz slider function
slider6.oninput = function(e) {
  output6.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  bassEQ6.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ6).connect(context.destination)
}
// 2KHz slider function
slider7.oninput = function(e) {
  output7.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  bassEQ7.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(bassEQ7).connect(context.destination)
}
// 4KHz slider function
slider8.oninput = function(e) {
  output8.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  highEQ8.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ8).connect(context.destination)
}
// 8KHz slider function
slider9.oninput = function(e) {
  output9.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  highEQ9.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ9).connect(context.destination)
}
// 16KHz slider function
slider10.oninput = function(e) {
  output10.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  highEQ10.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ10).connect(context.destination)
}
// 8KHz slider function
slider11.oninput = function(e) {
  output11.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  highEQ11.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ11).connect(context.destination)
}
// 8KHz slider function
slider12.oninput = function(e) {
  output12.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  highEQ12.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ12).connect(context.destination)
}
// 8KHz slider function
slider13.oninput = function(e) {
  output13.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  highEQ13.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ13).connect(context.destination)
}
// 8KHz slider function
slider14.oninput = function(e) {
  output14.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  highEQ14.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ14).connect(context.destination)
}
// 8KHz slider function
slider15.oninput = function(e) {
  output15.innerHTML = this.value;
  let value = parseFloat(e.target.value)
  var magDb = 20 * (Math.log(value))
  highEQ15.gain.setTargetAtTime(magDb, context.currentTime, .01)
  track.connect(highEQ15).connect(context.destination)
}

//#endregion
//#endregion
