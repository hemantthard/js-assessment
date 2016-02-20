exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

    if(!Array.isArray(arr) || !item) return -1 ;
    return arr.indexOf(item) ;

  },

  sum : function(arr) {
    if(!Array.isArray(arr)) return -1 ;
    var sum = 0 ;
    arr.forEach(function(x) {
      sum += x ;
    }) ;
    return sum ;
  },

  remove : function(arr, item) {
    if(!Array.isArray(arr) || !item) return -1 ;

    while(true){
      var firstIndex = arr.indexOf(item) ;
      var lastIndex = arr.lastIndexOf(item) ;

      if(firstIndex !== lastIndex){
          arr.slice(firstIndex,1);
      }else{
        break ;
      }
    }

  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item) ;
  },

  truncate : function(arr) {
    arr.pop() ;
  },

  prepend : function(arr, item) {
    arr.shift(item) ;
  },

  curtail : function(arr) {
    arr.unshift() ;
  },

  concat : function(arr1, arr2) {
    Array.prototype.concat(arr1,arr2) ;
  },

  insert : function(arr, item, index) {
    arr.slice(index,0,item) ;
  },

  count : function(arr, item) {
    var a = arr.filter(function(val){
      return val == item ;
    }) ;

    return a.length ;
  },

  duplicates : function(arr) {


  },

  square : function(arr) {
      return arr.each(function(item){
        return item*item ;
      })
  },

  findAllOccurrences : function(arr, target) {

  }
};
