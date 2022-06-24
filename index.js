exports.printMsg = function() {
  console.log("This is a message from the demo package");
}

exports.sayHi = function(name = "handsome guy") {
  console.log("Hi " + name);
}