Story = function() {
  this.animalArray = ["cat", "dog", "donkey", "monkey", "zebra"];
  this.placesArray = ["toilet", "sofa", "mat", "throne", "roof"];

};

Story.prototype.animalLinkCreator = function () {
  this.animalArray.forEach(function(animal) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='animal' href=#>" + animal + "</a>";
    console.log(newLi);
    document.getElementById("animals").appendChild(newLi);
});
};

Story.prototype.placeLinkCreator = function () {
  this.placesArray.forEach(function(place) {
    var newLi1 = document.createElement("li");
    newLi1.innerHTML = "<a class='place' href=#>" + place + "</a>";
    console.log(newLi1);
    document.getElementById("places").appendChild(newLi1);
});
};

var story = new Story();
story.animalLinkCreator();
story.placeLinkCreator();
