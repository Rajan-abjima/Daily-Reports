let a = prompt("Hey whats you age?");
a = Number.parseInt(a);
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid");
}
else if(a<18 && a>=11){
  alert("You are a teen but you cannot drive until 18");
}
else{
  alert("You can drive now after getting a driving lisense");
}
console.log("Done")