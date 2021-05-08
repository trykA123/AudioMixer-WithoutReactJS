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
//#region volume variable
var volume = document.getElementById("myVolume");

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

//#region Sliders Functions

// 32Hz slider function
slider1.oninput = function() {
  output1.innerHTML = this.value;
}
// 64Hz slider function
slider2.oninput = function() {
  output2.innerHTML = this.value;
}
// 125Hz slider function
slider3.oninput = function() {
  output3.innerHTML = this.value;
}
// 200Hz slider function
slider4.oninput = function() {
  output4.innerHTML = this.value;
}
// 500Hz slider function
slider5.oninput = function() {
  output5.innerHTML = this.value;
}
// 1KHz slider function
slider6.oninput = function() {
  output6.innerHTML = this.value;
}
// 2KHz slider function
slider7.oninput = function() {
  output7.innerHTML = this.value;
}
// 4KHz slider function
slider8.oninput = function() {
  output8.innerHTML = this.value;
}
// 8KHz slider function
slider9.oninput = function() {
  output9.innerHTML = this.value;
}
// 16KHz slider function
slider10.oninput = function() {
  output10.innerHTML = this.value;
}
// volume functions

volume.addEventListener("mousemove", function() {
  var x = volume.value;
  var color = 'linear-gradient(90deg, rgb(117, 252, 117)' + x + '%, rgb(214,214,214)' + x + '%)';
  volume.style.background = color;
});

//#endregion
//#endregion

//#region Search for music in your playlist

function searchForMusic() {
  let input, filter, ul, li, span, i, txtValue;
  input = document.getElementById("search-music");
  filter = input.value.toUpperCase();
  ul = document.getElementById("music-list");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    span = li[i].getElementsByTagName("span")[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//#endregion

//#region dropdown for search button PC/YouTube

function searchDropdown() {
  document.getElementById("musicDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if(!event.target.matches('.dropButton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for(i=0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//#endregion

//#region Add music to the list


function newElementFromPc() {
  var li = document.createElement("li");
  var span = document.createElement("span");
  var inputValue = document.getElementById("add-from-PC").value;
  var t = document.createTextNode(inputValue);
  var justUpload = document.getElementById("just-upload");
  var addMusic = document.getElementById("music-list");
  span.appendChild(t);
  li.appendChild(span);

  addMusic.appendChild(li); 
  if (inputValue != "") {    
    justUpload.click();
  };
  document.getElementById("add-from-PC").value = ""; 
}


//#endregion