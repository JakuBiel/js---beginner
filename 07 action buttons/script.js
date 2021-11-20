$('.interface').on('click', function () {
  // console.log($(this).attr('class'))
  // console.log(this.className)                  //the same in JS

  if ($(this).hasClass("orange")) {
    console.log('true orange')                      // jesli spełniony to..

    // $('body').toggleClass('orange')
    // $('body').css('background-color', "orange");

    // $('body').css({
    //   'background-color': "orange"
    // });
    $('body').attr('class', 'orange')             //replace class to:
  }

  if ($(this).hasClass("green")) {
    console.log('true green')                      // jesli spełniony to...
    // $('body').toggleClass('orange')
    // $('body').css('background-color', "orange");

    // $('body').css({
    //   'background-color': "green"
    // });

    $('body').attr('class', 'green')            //add class defined in css
  }


  // if (this.classList.contains("orange")) {      the same in JS
  //   console.log('prawda JS')
  // }

  if ($(this).hasClass("increase")) {
    console.log('true increase')

    $('.text').animate({
      'font-size': '+=5',
    }, 1000)
  }

  if ($(this).hasClass("move")) {
    console.log('true move')

    $('.text').animate({
      'left': '+=15',
      'letter-spacing': '+=2'
    }, 1000)
  }

})