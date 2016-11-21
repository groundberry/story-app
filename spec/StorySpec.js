describe ("Story", function(){
  var story;

  beforeEach(function() {
    story = new Story ();
  });

  describe ("It returns an incomplete sentence from an array", function() {
    it ("It has a word that needs to be filled in", function() {
      expect(story.sentencesArray).toContain("A", "sat on the");
    });

    it ("It has a list of subjects that can be chosen", function() {
      expect(story.subjectArray).toContain("cat", "dog", "donkey");
    });

    it ("It has a list of objects that can be chosen", function() {
      expect(story.objectArray).toContain("toilet", "sofa", "mat");
    });

    it ("has an empty array to begin with", function() {
      expect(story.completeSentence).toEqual([]);
    });

    it ("it returns a full sentence", function() {
      story.sentencePicker();
      spyOn(story, "subjectPicker").and.returnValue("cat");
      spyOn(story, "objectPicker").and.returnValue("mat");
      expect(story.completeSentence).toContain("A cat sat on the mat");
    });
  });
});
