
///Problem1 A function that takes at least three arguments and returns
// the result of some set of operations using those arguments
const f = function(a,b,c){
	return a+b+c
};
console.log(f(12,12,23));
///Problem2 A function that takes no arguments and returns something
const f2= function(){
	return 45;
};
///Problem3 A function that takes arguments, does something
/// but does not return anything
const f3= function(a,b,c){
	const d= a+b*c
};
console.log(f3())
///Problem4 A function that takes three strings and returns 
///the string that is the longest
const f4= function(name1,name2,name3){
	if(name1.length>name2.length && name1.length>name3.length){
		return name1	
	}
	if(name2.length>name3.length){
		return name2;
	}else{
		return name3;
	}
};
console.log(f4('Aramaz','Vardges','Vardanush'));
///Problem5 A function that takes two numbers and returns 0 if they are equal,
/// 1 if the first is larger and -1 if the second is larger
const f5= function(a,b){
	if(a===b){
		return 0;
	} else  if(a>b){
    	return 1;
    }
    else{
    	return -1;
    }
};
console.log(f5(311,345))

///Problem6 Create a multiply function (that multiplies the two given 
///arguments together and returns the result) 
const f6= function(a,b){
	return a*b;
};
console.log(f6(23,44));

///Problem7 Create a divide function 
///(that divides the first argument by the second and returns the result)
const f7= function(a,b){
	return a/b
};
console.log(f7(20,2));
///Problem8 Create a triangleArea function that takes base and height as input
/// and returns the area of a triangle without using * or / 
 const triangleArea= function(base,height) {

		return f7(f6(base,height),2)

        };
console.log(triangleArea(4,4))
///Problem9 Create a function called numLength that takes a number and returns the number of 
///characters in the number (example: numLength(8940); should return 4)
 const numLenght=function(a){
      const b= a+ ''; // or a.toString() and return a.length
       return b.length	
};
console.log(numLenght());

//Problem10 Create a function that takes two strings and a number.  If the length of the two strings 
//concatenated together is greater than the given number, return 1, else return -1
const f10=function(a,b,c){
 let d=a.length+b.length
  if (d>c){
  	return 1
  }else{
  	return -1
  }
};
console.log(f10('Hamazasp','Rshtun',5));
//Problem11 Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', 
//return the area of a rectangle using the two numbers as base and height
//If the string is 'triangle', return the area of a triangle
//If the string does not match 'rectangle' or 'triangle', return -1
const runStuff=function(string,base,height){

	if(string==='rectangle'){
		return f6(base,height);
	}else if(string==='triangleArea'){
		return triangleArea(base,height);
	}else{
		return -1;
	}
};

console.log(runStuff("rectangle", 10, 15));






















