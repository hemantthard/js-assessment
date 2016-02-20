exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {

    var time = 100, currentTime = start ;


    var interval = setInterval(function(){
        if(currentTime == end){
          clearInterval(interval) ;
        }
      console.log(currentTime++);

    },time) ;

    return function cancel(){
      clearInterval(interval) ;
    }

  }
};
