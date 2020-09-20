
const theNumber = 5;



(function processingInput(){
	var input = prompt("What u have done?");
	var inputINT = parseInt(input);
	if (inputINT == theNumber)
	{
		var img = document.createElement("img");
		if (theNumber > 3) {
			img.src = "https://previews.123rf.com/images/octyabr/octyabr1804/octyabr180400115/100326571-congrats-hand-written-lettering-for-congratulations-card-modern-brush-calligraphy-isolated-on-backgr.jpg";
		}
		else {
			img.src = "https://image.shutterstock.com/image-vector/congrats-bulk-lettering-greeting-sign-260nw-1289952178.jpg";
		}
		var src = document.getElementById("header");
		src.appendChild(img);
		document.querySelector("img").style.width="780px";
		return;

	} else if (inputINT < theNumber) {

				alert("Continue.");

	}else {
				alert("Big one Man.");
		  }

	processingInput();





}());
