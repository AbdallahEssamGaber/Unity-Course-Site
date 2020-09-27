const megaAchieved = 5;   //The Basic Number (Mega's part)


//Vars control the whole program
var inputVal = 0;
var total = 0;

//For what can user type and can't user type
var numPadValue1 = 96, //cuz I don't want to change it
  numPadValue2,
  numRowValue1 = 48, //cuz I don't want to change it
  numRowValue2;


//The most DOM things using
var numField = document.getElementById('numberOfAchievements');





//To control before user click submit(ACHIEVED)
if ((megaAchieved == 1)) {
  one();
}

if ((megaAchieved % 2 == 0 || megaAchieved % 2 != 0) && megaAchieved > 1) {
  even();
}



/*  Set the settings and all the stuff to interact with the user  */
//function set all the stuff to interact with the user when the number will enter is (1)
function one() {

  numPadValue2 = 98;
  numRowValue2 = 50;
  numField.placeholder = 'Achieve One Video';

}
//function set all the stuff to interact with the user when the number will enter is (even number)
function even() {
  numPadValue2 = 99;
  numRowValue2 = 51;
  numField.placeholder = 'Achieve One Video OR Two';
}







/*  CONTROLS FOR (BUTTONS, FIELD...) {INTERACT THINGS} */
//Control what's user can type + some of basic stuff (Ctrl + A), (BackSpace)
numField.onkeydown = function(e) {
  if (!((e.keyCode > numPadValue1 && e.keyCode < numPadValue2) ||
      (e.keyCode > numRowValue1 && e.keyCode < numRowValue2) || (e.keyCode == 17 | e.keyCode == 65) || e.keyCode == 8)) {
    return false;
  }
}

//Hide The button when there is no input or more than one input(Actually, the user can't write more than one number that's in the HTML sheet)
$('#numberOfAchievements').keyup(function() {
  if (($.trim(this.value).length > 0 && $.trim(this.value).length < 2) && $.trim(this.value)[0] != 0) $('#pressToSubmitAchievement').show();
  else $('#pressToSubmitAchievement').hide();
});

//To make user can write and (Enter) then it's a click
numField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && $('button').is(":visible")) {
    event.preventDefault();
    document.getElementById("pressToSubmitAchievement").click();
  }
});
//If the user clicks on the field the input disappears so we need the button, too






function AfterClicked() {

  /*  FIRST OF ALL, THE BASICS  */
  inputVal = numField.value;    //Store the input value to a var
  console.log(inputVal);        //If the user really wanted to see the history of his inputs


  total = parseInt(total) + parseInt(inputVal);   //Get the total to can make a decision about the input
  document.getElementById("message2").innerHTML = total + " Done.";   //The number of your achievements





  //If He has done (megaAchieved) then CELEBRATE
  if (total == megaAchieved) {

    var congrats;   //Just to change the color depending on how many (megaAchieved)
    if (megaAchieved > 3) {
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
  } else if (inputVal < megaAchieved) {   //Continue your achievements
    document.getElementById("message").innerHTML = "(" + inputVal + ")" + "Continue.";

  } if (total + 1 == megaAchieved) {   //Changing the stuff cuz we like (megaAchieved = 1;)
      one();  //Set the Stuff
      /*  Note for the user that there is one left  */
      var x = document.createElement("SPAN");
      document.getElementById("message2").appendChild(x);
      x.innerHTML = "One Left";
    }

  /*  After clicking on the button just remove the input from the field thus the button  */
  numField.value = "";
  $('#pressToSubmitAchievement').hide()
}
