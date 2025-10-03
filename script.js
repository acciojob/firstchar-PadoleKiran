function firstChar(text) {
  // your code here
	let v = text.trim();
	if(v.length == 0){
		console.log("");
	}
	else {
		 console.log(v[0]);
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
