var i = 0;
var txt1 =
  "Hi Dear.....!  <<   I will plan the day out <           Just let me know when you are free.                    > I want to look at you and, with you everything   < falls in place it automatically fits         >                 And , it feels so easy and comfortable. < That smile of your's make my day. >                          And, that blush face of your's when iI flirt with you.                             > Soo    <<    Baby I Love You  💖 ";
var speed = 75;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
