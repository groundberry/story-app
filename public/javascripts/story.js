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

Story.prototype.animalLinkCreator = function () {
  this.subjectArray.forEach(function(animal) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='animal' href=#>" + animal + "</a>";
    console.log(newLi);
    document.getElementById("animals").appendChild(newLi);
});
};

Story.prototype.placeLinkCreator = function () {
  this.objectArray.forEach(function(place) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='places' href=#>" + place + "</a>";
    console.log(newLi);
    document.getElementById("places").appendChild(newLi);
});
};

var story = new Story();
story.animalLinkCreator();
story.placeLinkCreator();
