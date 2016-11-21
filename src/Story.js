Story = function() {
  this.sentencesArray = ["A", "sat on the"];
  this.subjectArray = ["cat", "dog", "donkey"];
  this.objectArray = ["toilet", "sofa", "mat"];
  this.completeSentence = [];
};

Story.prototype.sentencePicker = function () {
  this.completeSentence.push(this.sentencesArray);
  console.log(this.completeSentence);
};
