function toggleMenu() 
{
  document.getElementById("primaryNav").classList.toggle("hide");
}

function theBanner() 
{
  var d = new Date();
  var n = d.getDay();

  if(n === 5) 
  {
    var element = document.getElementById("banner")
    element.classList.add("show");
    return;
  }
  else
  { 
    var element = document.getElementById("banner")
    element.classList.add("hide");
    return;
  }
}

function windChill() 
{
    let tempF = parseFloat(document.getElementById("temp").innerHTML);
    let speedFactor = parseFloat(document.getElementById("speed").innerHTML);
    let calc = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedFactor, 0.16) + 0.4275 * tempF * Math.pow(speedFactor, 0.16);

    console.log("calc", calc);
    document.getElementById("windchill").innerHTML = calc.toFixed(1) + "°F";
}