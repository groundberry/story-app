var items = {
    'name': ["Bert", "Rupert", "Bob", "Steve", "Timmy"],
    'animals': ["cat", "dog", "lion", "donkey", "pig"],
    'toys': ["dolls", "catapults", "cars", "bikes", "frisbees"],
    'chores': ["brushing his teeth", "tidying his room", "going shopping", "having a bath", "going to sleep"],
    'places': ["toilet", "sofa", "mat", "throne", "roof"],
    'food': ["pizza", "chocolate", "carrots", "chips", "lettuce"],
    'friend': ["Ruby", "Daisy", "Betty", "Anne", "Katy"],
    'animal:': ["monkey", "zebra", "duck", "cow", "penguin"],
    'game': ["tag", "hide and seek", "sleeping lions", "hopscotch", "what's the time Mr Wolf"],
    'feelings': ["happy", "excited", "sleepy", "bored", "sad"]
  };

var wordIndex = 0;

var updateTitle = function () {
  var key = Object.keys(items)[wordIndex];
  document.getElementById("title").innerHTML = key;
  if (wordIndex > 9) {
    document.getElementById("title").innerHTML = 'The end';
  }
  updateWords(key);
};

var updateWords = function (key) {
  var arrayOfWords = items[key];
  document.getElementById('words').innerHTML = '';
  arrayOfWords.forEach(function(word) {
    var link = document.createElement("li");
    link.innerHTML = "<a class='" + key + "' href='#'>" + word + "</a>";
    document.getElementById('words').appendChild(link);
  });
};

var generateImage = function (cartoon) {
  var image = document.createElement('img');
  image.src = "images/" + cartoon + ".png";
  var src = document.getElementById('picture');
  src.appendChild(image);
};

function listenToClickOnWord() {
  document.getElementById('words').addEventListener('click',function (evt) {
    var target = evt.target;
    var cartoon = target.innerHTML;
    document.getElementById('word' + wordIndex).innerHTML = target.innerHTML;
    var pet = document.getElementById("title").innerHTML;
    console.log(pet);
    if ( pet === 'animal' || 'animals') {
      generateImage(cartoon);
    }
  });
}

var listenToClickOnNextWordButton = function () {
  document.getElementById('next-word').addEventListener('click',function () {
    wordIndex += 1;
    updateTitle();
  });
};

updateTitle();
listenToClickOnWord();
listenToClickOnNextWordButton();
