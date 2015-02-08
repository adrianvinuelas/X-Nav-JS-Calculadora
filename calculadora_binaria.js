var num1 = 0;
var num2 = 0;
var x = 0;
var resultado = 0;

function asignarnum(num){
		element = document.getElementById('caja');
		element.innerHTML = parseInt(num);
		console.log("num = " + num);
}

function almacena(){
	element = document.getElementById('caja');
	if(element.innerHTML == ""){
		alert("Introduce primer numero");
	}else{
		num1 = element.innerHTML;
		console.log("num1 = " + num1);
		element.innerHTML = "";
	}	
}

function sumar(){
	element = document.getElementById('caja');
	if(element.innerHTML == ""){
		alert("introduce segundo numero")
	}else{
		num2 = element.innerHTML;
		if(num1 == 0 && num2 == 0){
			element.innerHTML = 0;
		}else if(num1 == 0 && num2 == 1){
			element.innerHTML = 1;
		}else if(num1 == 1 && num2 == 0){
			element.innerHTML = 1;
		}else if(num1 == 1 && num2 == 1){
			element.innerHTML = 0;
		}
	}	
}
