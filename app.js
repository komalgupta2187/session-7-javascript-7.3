var myObject  = (function counterincreament(){
	var counter = 0;
		//inner function
return function counterincvalues(){
counter=counter+1;
for(i=1; i<=counter; i++){
console.log("Counter called: " + i);
}
return counter;
};
})();//closure
myObject();
myObject();
myObject();