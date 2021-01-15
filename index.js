document.addEventListener("DOMContentLoaded", function(){
  dayssincecf = Math.floor(Math.abs((1582959600000-Date.now())/(24 * 60 * 60 * 1000)))
  document.getElementById("leftnavbarbottomflavor").innerHTML=`
    Built from scratch with ♥ by Aspect. <a href="https://csgoclicker.net" target="_blank">CSGOClicker</a> created by Banned and Roflzilla.
    <br/>
    It has been <span>${dayssincecf}</span> days since coinflip went down :(
  `
});
