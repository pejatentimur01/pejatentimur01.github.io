	document.getElementById('scrollButtonDown').addEventListener('click', function() {
        // Scroll down by one viewport height (100vh)
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth' // For smooth scrolling animation
        });
    })

	document.getElementById('scrollButtonUp').addEventListener('click', function() {
        // Scroll down by one viewport height (100vh)
        window.scrollBy({
            top: -window.innerHeight,
            behavior: 'smooth' // For smooth scrolling animation
        });
    })
	

	function BtNmenu() {
	  var x = document.getElementById("BtNmenu");
	  if (x.style.display == "none") {
		x.style.display = "block";
		x.style.visibility = "visible";
	  } else {
		x.style.display = "none";
		x.style.visibility = "hidden";
	  }
	} 

	function BtNmenu1() {
	  var x = document.getElementById("BtNmenu1");
	  var x2 = document.getElementById("BtNmenu2");
	  if (x.style.display == "none") {
		x.style.display = "block";
		x.style.visibility = "visible";
		x2.style.display = "none";
		x2.style.visibility = "hidden";
	  } else {
		x.style.display = "none";
		x.style.visibility = "hidden";
	  }
	} 

	function BtNmenu2() {
	  var x = document.getElementById("BtNmenu2");
	  var x2 = document.getElementById("BtNmenu1");
	  if (x.style.display == "none") {
		x.style.display = "block";
		x.style.visibility = "visible";
		x2.style.display = "none";
		x2.style.visibility = "hidden";		
	  } else {
		x.style.display = "none";
		x.style.visibility = "hidden";
	  }
	} 

	function BtNmenu3() {
	  var x = document.getElementById("BtNmenu3");
	  var x2 = document.getElementById("BtNmenu4");
	  if (x.style.display == "none") {
		x.style.display = "block";
		x.style.visibility = "visible";
		x2.style.display = "none";
		x2.style.visibility = "hidden";
	  } else {
		x.style.display = "none";
		x.style.visibility = "hidden";
	  }
	} 

	function BtNmenu4() {
	  var x = document.getElementById("BtNmenu4");
	  var x2 = document.getElementById("BtNmenu3");
	  if (x.style.display == "none") {
		x.style.display = "block";
		x.style.visibility = "visible";
		x2.style.display = "none";
		x2.style.visibility = "hidden";		
	  } else {
		x.style.display = "none";
		x.style.visibility = "hidden";
	  }
	} 
