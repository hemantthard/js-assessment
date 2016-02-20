exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    fn.call(null,arr) ;
  },

  speak : function(fn, obj) {
    fn.call(obj) ;
  },

  functionFunction : function(str) {
    return function(str2){
      return str + ", " + str2 ;
    }
  },

  makeClosures : function(arr, fn) {
      return arr.map(function(item,index){
          return function(){
            fn(index) ;
          }
      })
  },

  partial : function(fn, str1, str2) {

    return function(str3 ){
        return fn.call(str1,str2, str3) ;
    }
  },

  useArguments : function() {
    var sum = 0;
    Array.prototype.forEach.apply(arguments,function(x) {
      sum += x ;
    })
      return  sum ;
  },

  callIt : function(fn) {

    var args = Array.prototype.splice(1) ;
    fn.apply(null,args) ;

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
