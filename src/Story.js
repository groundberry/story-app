Story = function() {
  this.subjectArray = ["cat", "dog", "donkey"];
  this.objectArray = ["toilet", "sofa", "mat"];
  this.sentencesArray = ["A", "sat on the"];
  this.completeSentence = [];
};

Story.prototype.subjectPicker = function (index) {
  var subject = this.subjectArray[index];
  return subject;
};

Story.prototype.objectPicker = function (index) {
  var object = this.objectArray[index];
  return object;
};

Story.prototype.subjectSelector = function (index) {
  var item = this.subjectArray[index];
  this.sentencesArray.splice(1, 0, item);
};

Story.prototype.objectSelector = function (index) {
  this.sentencesArray.push(this.objectArray[index]);
  this.completeSentence.push(this.sentencesArray.join(" "));
  console.log(this.completeSentence);
};

Story.prototype.consLog = function() {
  console.log(this.sentencesArray);
};


var firstWord = document.getElementById('animals');

function generateAnimalLinks() {
  story.subjectArray.forEach(function (animal) {
    firstWord.appendChild(generateAnimalLink(animal));
  });
}

function generateAnimalLink(animal) {
  var listItem = document.createElement('li');
  var link = document.createElement('a');
  link.className = 'Animal';
  link.href = '#';

  // var linkText = document.createTextNode(animal)
}
