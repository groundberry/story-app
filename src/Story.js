Story = function() {
  this.subjectArray = ["cat", "dog", "donkey"];
  this.objectArray = ["toilet", "sofa", "mat"];
};

Story.prototype.subjectPicker = function (index) {
  var subject = this.subjectArray[index];
  return subject;
};

Story.prototype.objectPicker = function (index) {
  var object = this.objectArray[index];
  return object;
};
