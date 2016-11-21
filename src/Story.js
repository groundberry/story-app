Story = function() {
  this.sentencesArray = ["A", "sat on the"];
  this.subjectArray = ["cat", "dog", "donkey"];
  this.objectArray = ["toilet", "sofa", "mat"];
  this.completeSentence = [];
};

Story.prototype.sentencePicker = function () {
  this.completeSentence.push(this.sentencesArray);
  console.log(this.completeSentence[0]);
};


Story.prototype.subjectPicker = function () {
  this.completeSentence[0].splice(1, 0, "dog");
  console.log(this.completeSentence);
};

Story.prototype.objectPicker = function (index) {
  this.completeSentence[0].push(this.objectArray[index+1]);
  console.log(this.completeSentence);
  var test = [].concat.apply([], this.completeSentence);
  console.log(test.join());
};

// arr.splice(index, 0, item)



//console.log(this.completeSentence[0]); == sentencesArray
