$(document).ready(function() {
  $('button').click(function() {
    var i = parseInt($('input').val());
    var a = 1;
    $('input').val('');
    console.log(isNaN(i));
    console.log(i%1+' '+decimalTest(i));
    if (isNaN(i) || decimalTest(i)) {
      alert('Not an integer. Please enter an integer.');
    } else {
      do {
        displayNumber(fizzBuzz(a));
        a+=1;
      } while (a<=i);
    }
  });

  function decimalTest(arr) {
     return (arr%1!==0);
  }

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
    return val;
  };

});
