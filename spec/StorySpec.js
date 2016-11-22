describe ("Story", function(){
  var story;

  beforeEach(function() {
    story = new Story();
  });

  describe ("It has a collection of words to be chosen from", function() {

    it ("It has a list of subjects that can be picked from", function() {
      expect(story.subjectPicker(1)).toBe("dog");
    });

    it ("It has a list of objects that can be picked from", function() {
      expect(story.objectPicker(0)).toBe("toilet");
    });
    
    it ("returns a sentence template + subject - object", function() {
      story.subjectSelector(1);
      story.objectSelector(1);
      expect(story.completeSentence).toContain("A dog sat on the sofa");
    });
  });
});
