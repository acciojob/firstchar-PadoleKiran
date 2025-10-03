function firstChar(text) {
  // your code here
	let v = text.trim();
	if(v.length == 0){
		console.log("");
		alert("");
	}
	else {
		 console.log(v[0]);
		alert(v[0]);
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
