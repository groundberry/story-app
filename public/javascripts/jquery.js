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

  $('.animal').on('click', function () {
    $('#word0').replaceWith(this);
  });

  $('.place').on('click', function () {
    $('#word1').replaceWith(this);
  });

  $('.button').on('click', function () {
    getSentence();
  });

  getSentence();
});
