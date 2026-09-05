function firstWord(s) {
  // your code here
	if(s===""){
		return ""
	}
	for(i=0;i<s.length;i++){
		if(s[i]===" "){
			return s.slice(0,i)
		}
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
