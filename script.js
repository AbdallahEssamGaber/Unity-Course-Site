const AGAchieved = 2;   //The Basic Number (Abdallah's part)


//Vars control the whole program
var inputVal = 0;
var total = 0;
var numOfTimes = 0;

//For what can user type and can't user type
var numPadValue1 = 96, //cuz I don't want to change it
  numPadValue2,
  numRowValue1 = 48, //cuz I don't want to change it
  numRowValue2;


//The most DOM things using
var numField = document.getElementById('numberOfAchievements');








//To control before user click submit(ACHIEVED)
if ((AGAchieved == 1)) {
  one();
}

if ((AGAchieved % 2 == 0 || AGAchieved % 2 != 0) && AGAchieved > 1) {
  even();
}



/*  Set the settings and all the stuff to interact with the user  */
//function set all the stuff to interact with the user when the number will enter is (1)
function one() {

  numField.placeholder = 'Achieve One Video';

}
//function set all the stuff to interact with the user when the number will enter is (even number)
function even() {

  numField.placeholder = 'Achieve More than One Video';
}



//To make user can write and (Enter) then it's a click
numField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("pressToSubmitAchievement").click();
  }
});







function AfterClicked() {
numOfTimes++;
 document.getElementById("message2").style.color = "#c8c8c8";
 document.getElementById("message2").innerHTML =" ";
  /*  FIRST OF ALL, THE BASICS  */
  inputVal = numField.value;    //Store the input value to a var
  console.log(inputVal);        //If the user really wanted to see the history of his inputs
  if (inputVal > AGAchieved || parseInt(total) + parseInt(inputVal) > AGAchieved)
  {

      document.getElementById("message2").innerHTML = "Bigger than the D. ";
      document.getElementById("message2").style.color = "#d6511f";

      var x = document.createElement("SPAN");
      document.getElementById("message2").appendChild(x);
      x.innerHTML = " The total: " + total;
      if (total + 1 == AGAchieved) {   //Changing the stuff cuz we like (AGAchieved = 1;)
          one();  //Set the Stuff
          /*  Note for the user that there is one left  */
          x.innerHTML = "The total: " + total + " One Left.";
        }
      document.getElementsByTagName("SPAN")[0].style.color = "#c8c8c8";
      return;


  }

  total = parseInt(total) + parseInt(inputVal);   //Get the total to can make a decision about the input
  document.getElementById("message2").innerHTML = total + " Done.";   //The number of your achievements





  //If He has done (AGAchieved) then CELEBRATE
  if (total == AGAchieved) {

    var congrats;   //Just to change the color depending on how many (AGAchieved)
    if (AGAchieved > 3) {
      congrats = "<h1 id = 'congrats' style='color:#FFDD00;'>CONGRATS</h1>";
    } else {
      congrats = "<h1 id = 'congrats' style='color:#01BEFE;'>CONGRATS</h1>";
    }
    document.write(congrats); //cuz I want a new page
    /*  Some Styles to the new page  */
    document.body.style.backgroundColor = "#1a1a1a";
    document.getElementById("congrats").style.fontSize = "274px";
    document.getElementById("congrats").style.fontFamily = "monospace";
    document.getElementById("congrats").style.marginTop = "150px";
    document.getElementById("congrats").style.textAlign = "center";

    return; //Don't complete the other things I mean We did it, man
  } else if (inputVal < AGAchieved) {   //Continue your achievements
    document.getElementById("message").innerHTML = "(" + inputVal + ")" + "Continue.";

  } if (total + 1 == AGAchieved) {   //Changing the stuff cuz we like (AGAchieved = 1;)
      one();  //Set the Stuff
      /*  Note for the user that there is one left  */
      var x = document.createElement("SPAN");
      document.getElementById("message2").appendChild(x);
      x.innerHTML = "One Left";
    }


numField.value = "";
}
