var items = {
    'name': ["Bert", "Rupert", "Daisy", "Ruby", "Timmy"],
    'animals': ["cat", "dog", "lion", "otter", "pig"],
    'toys': ["ball", "catapult", "cars", "bikes", "frisbees"],
    'chores': ["brushing their teeth", "tidying their room", "going shopping", "having a bath", "going to sleep"],
    'places': ["toilet", "sofa", "mat", "throne", "roof"],
    'food': ["pizza", "chocolate", "carrots", "chips", "lettuce"],
    'friend': ["Bob", "Steve", "Jimmy", "Anne", "Katy"],
    'animal:': ["monkey", "zebra", "duck", "cow", "penguin"],
    'game': ["tag", "hide and seek", "sleeping lions", "hopscotch", "what's the time Mr Wolf"],
    'feelings': ["happy", "excited", "sleepy", "bored", "sad"]
  };


var getTitle = function () {
  var key = Object.keys(items)[0];
  document.getElementById("title").innerHTML = key;
  getWords(key);
};

var getWords = function (key) {
  var arrayOfWords = items[key];
  arrayOfWords.forEach(function(word) {
    var link = document.createElement("li");
    link.innerHTML = "<a class=" + key + "' href='#'>" + word + "</a>";
    document.getElementById('words').appendChild(link);
  });
};



function changeText(key) {
  document.getElementById('word0').innerHTML = document.getElementsByClassName('Name')[0].innerHTML.fontcolor('#337ab7');
}

window.onload = function() {
  document.getElementsByClassName('Name')[0].addEventListener('click',function () {
    changeText();
  });
};





getTitle();
linkCreator();
