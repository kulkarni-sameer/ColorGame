var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn");
var newcolorsbtn = document.getElementById("newcolorsbtn");

var rvalue = document.getElementById("rvalue").innerText;
var gvalue = document.getElementById("gvalue").innerText;
var bvalue = document.getElementById("bvalue").innerText;

var tr2 = document.getElementById("tr2");
var box11 = document.getElementById("box11");
var box12 = document.getElementById("box12");
var box13 = document.getElementById("box13");
var box21 = document.getElementById("box21");
var box22 = document.getElementById("box22");
var box23 = document.getElementById("box23");


easybtn.addEventListener("click", function(){
	//alert("clicked!");
	tr2.style.display="none";
	
});

hardbtn.addEventListener("click", function(){
	//alert("clicked!");
	tr2.style.display="show";
	
});

function fillcolors(){

var rightposn = Math.floor(Math.random() * 6) + 1;
	var rand1= Math.floor(Math.random() * 256);
//console.log(rand1);
var rand2= Math.floor(Math.random() * 256);
var rand3= Math.floor(Math.random() * 256);
var rand4= Math.floor(Math.random() * 256);
var rand5= Math.floor(Math.random() * 256);
var rand6= Math.floor(Math.random() * 256);


console.log("right position is " +rightposn);


	//alert("clocked!");	
	//box+rightposn1+rightposn2.style.background = "rgb(0,0,0)";
	if (rightposn == 1){
		 document.getElementById("rvalue").innerText = rand1;
	   document.getElementById("gvalue").innerText = rand2;
	   document.getElementById("bvalue").innerText = rand3;
	   box12.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box11.addEventListener("click", function(){
	alert("Correct!!");
	box11.style.background = "rgb("+rand1 +","+rand2+","+rand3+")";
	   box12.style.background = "rgb("+rand1 +","+rand2+","+rand3+")";
	   box13.style.background = "rgb("+rand1 +","+rand2+","+rand3+")";
	  

	  box21.style.background = "rgb("+rand1 +","+rand2+","+rand3+")";
	   box22.style.background = "rgb("+rand1 +","+rand2+","+rand3+")";
	  box23.style.background = "rgb("+rand1 +","+rand2+","+rand3+")";
	});
	   box13.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box21.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box22.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box23.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	}
	else if (rightposn == 2){
		 document.getElementById("rvalue").innerText = rand5;
	   document.getElementById("gvalue").innerText = rand1;
	   document.getElementById("bvalue").innerText = rand2;
	   box12.addEventListener("click", function(){
	alert("Correct!!");
	box11.style.background = "rgb("+rand5 +","+rand1+","+rand2+")";
	   box12.style.background = "rgb("+rand5 +","+rand1+","+rand2+")";
	   box13.style.background = "rgb("+rand5 +","+rand1+","+rand2+")";
	  

	  box21.style.background = "rgb("+rand5 +","+rand1+","+rand2+")";
	   box22.style.background = "rgb("+rand5 +","+rand1+","+rand2+")";
	  box23.style.background = "rgb("+rand5 +","+rand1+","+rand2+")";
	});
	   box11.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box13.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box21.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box22.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box23.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	}
	else if (rightposn == 3){
		 document.getElementById("rvalue").innerText = rand6;
	   document.getElementById("gvalue").innerText = rand3;
	   document.getElementById("bvalue").innerText = rand4;
	  box12.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box11.addEventListener("click", function(){
	alert("wrong!!");
	fillcolors();
	});
	   box13.addEventListener("click", function(){
	//alert("Correct!!");
	box11.style.background = "rgb("+rand6 +","+rand3+","+rand4+")";
	   box12.style.background = "rgb("+rand6 +","+rand3+","+rand4+")";
	   box13.style.background = "rgb("+rand6 +","+rand3+","+rand4+")";
	  

	  box21.style.background = "rgb("+rand6 +","+rand3+","+rand4+")";
	   box22.style.background = "rgb("+rand6 +","+rand3+","+rand4+")";
	  box23.style.background = "rgb("+rand6 +","+rand3+","+rand4+")";
	});
	   box21.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box22.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box23.addEventListener("click", function(){
	alert("wrong!!");
	});
	}
	else if (rightposn == 4){
		 document.getElementById("rvalue").innerText = rand4;
	   document.getElementById("gvalue").innerText = rand2;
	   document.getElementById("bvalue").innerText = rand6;
	   box12.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box11.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box13.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box21.addEventListener("click", function(){
	alert("Correct!!");
	box11.style.background = "rgb("+rand4 +","+rand2+","+rand6+")";
	   box12.style.background = "rgb("+rand4 +","+rand2+","+rand6+")";
	   box13.style.background = "rgb("+rand4 +","+rand2+","+rand6+")";
	  

	  box21.style.background = "rgb("+rand4 +","+rand2+","+rand6+")";
	   box22.style.background = "rgb("+rand4 +","+rand2+","+rand6+")";
	  box23.style.background = "rgb("+rand4 +","+rand2+","+rand6+")";
	});
	   box22.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box23.addEventListener("click", function(){
	alert("wrong!!");
	});
	}
	else if (rightposn == 5){
		 document.getElementById("rvalue").innerText = rand5;
	   document.getElementById("gvalue").innerText = rand3;
	   document.getElementById("bvalue").innerText = rand6;
	   box12.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box11.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box13.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box21.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box22.addEventListener("click", function(){
	alert("Correct!!");
	box11.style.background = "rgb("+rand5 +","+rand3+","+rand6+")";
	   box12.style.background = "rgb("+rand5 +","+rand3+","+rand6+")";
	   box13.style.background = "rgb("+rand5 +","+rand3+","+rand6+")";
	  

	  box21.style.background = "rgb("+rand5 +","+rand3+","+rand6+")";
	   box22.style.background = "rgb("+rand5 +","+rand3+","+rand6+")";
	  box23.style.background = "rgb("+rand5 +","+rand3+","+rand6+")";
	});
	   box23.addEventListener("click", function(){
	alert("wrong!!");
	});
	}
	else if (rightposn == 6){
		 document.getElementById("rvalue").innerText = rand2;
	   document.getElementById("gvalue").innerText = rand6;
	   document.getElementById("bvalue").innerText = rand2;
	   box12.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box11.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box13.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box21.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box22.addEventListener("click", function(){
	alert("wrong!!");
	});
	   box23.addEventListener("click", function(){
	alert("Correct!!");
	box11.style.background = "rgb("+rand2 +","+rand6+","+rand2+")";
	   box12.style.background = "rgb("+rand2 +","+rand6+","+rand2+")";
	   box13.style.background = "rgb("+rand2 +","+rand6+","+rand2+")";
	  

	  box21.style.background = "rgb("+rand2 +","+rand6+","+rand2+")";
	   box22.style.background = "rgb("+rand2 +","+rand6+","+rand2+")";
	  box23.style.background = "rgb("+rand2 +","+rand6+","+rand2+")";
	});
	}
	 box11.style.background = "rgb("+rand1 +","+rand2+","+rand3+")";
	   box12.style.background = "rgb("+rand5 +","+rand1+","+rand2+")";
	   box13.style.background = "rgb("+rand6 +","+rand3+","+rand4+")";
	  

	  box21.style.background = "rgb("+rand4 +","+rand2+","+rand6+")";
	   box22.style.background = "rgb("+rand5 +","+rand3+","+rand6+")";
	  box23.style.background = "rgb("+rand2 +","+rand6+","+rand2+")";

	//box11.style.background = "rgb(244,213,200)";

//box11.style.background = "rgb(Math.floor(Math.random * 256,201,200)";
	
}

newcolorsbtn.addEventListener("click", fillcolors);
