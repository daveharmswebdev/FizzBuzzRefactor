$(document).ready(function() {
  $('button').click(function() {
    var i = $('input').val();
    var a = 1;
    do {
      displayNumber(fizzBuzz(a));
      a+=1;
    } while (a<=i);
    $('input').val('');
  });

  function displayNumber(arr) {
    $('body').append('<p>'+arr+'</p>');
  }

  var fizzBuzz = function(arr) {
    var val;
    if (arr%3===0 && arr%5===0) {
      val = 'Fizz Buzz';
    } else if (arr%3===0) {
      val = 'Fizz';
    } else if (arr%5===0) {
      val = 'Buzz';
    } else {
      val = arr;
    }
    // console.log(arr%3+'-'+arr%5);
    return val;
  };

});
