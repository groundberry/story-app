function getSentence() {
  $.get('/api').then(function(response) {
    var sentence = response.sentence;
    var position = 0;
    sentence = sentence.replace(/____/g, function () {
      return '<span id="word' + (position++) + '">____</span>';
    });
    $('#sentence').html(sentence);
    // TODO: fill animals and places too
  });
}

$(document).ready(function () {

  $('.name1').on('click', function () {
    $('#word0').replaceWith(this);
  });

  $('.animal1').on('click', function () {
    $('#word1').replaceWith(this);
  });

  $('.toys').on('click', function () {
    $('#word2').replaceWith(this);
  });

  $('.chores').on('click', function () {
    $('#word3').replaceWith(this);
  });

  $('.place').on('click', function () {
    $('#word4').replaceWith(this);
  });

  $('.food').on('click', function () {
    $('#word5').replaceWith(this);
  });

  $('.name2').on('click', function () {
    $('#word6').replaceWith(this);
  });

  $('.animal2').on('click', function () {
    $('#word7').replaceWith(this);
  });

  $('.game').on('click', function () {
    $('#word8').replaceWith(this);
  });

  $('.feelings').on('click', function () {
    $('#word9').replaceWith(this);
  });

  $('.button').on('click', function () {
    getSentence();
  });

  getSentence();
});
