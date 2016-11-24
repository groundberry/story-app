function getSentence() {
  $.get('/api').then(function(response) {
    var sentence = response.sentence;
    var position = 0;
    sentence = sentence.replace(/____/g, function () {
      return '<span id="word' + (position++) + '">____</span>';
    });
    $('#sentence').html(sentence);
  });
}

$(document).ready(function () {
  getSentence();
});
