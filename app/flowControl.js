exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    if(!num) return false;
    if(!Number.isNumber(num)) {
      return num ;
    }
    var mod3 = num % 3 ;
    var mod5 = num % 5 ;

    var ret ;
    if(mod3 && mod5) ret=  "fizzbuzz" ;
    if(mod3) ret = 'fizz'
    if(mod5) ret = 'buzz'


    return ret ;
  }
};
