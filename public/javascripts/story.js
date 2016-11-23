Story = function() {
  this.animal1Array = ["cat", "dog", "donkey", "monkey", "zebra"];
  this.placesArray = ["toilet", "sofa", "mat", "throne", "roof"];
  this.name1Array = ["Bert", "Rupert", "Daisy", "Ruby", "Timmy"];
  this.name2Array = ["Bob", "Steve", "Jimmy", "Anne", "Katy"];
  this.toysArray = ["ball", "catapult", "cars", "bikes", "frisbees"];
  this.choresArray = ["brushing their teeth", "tidying their room", "going shopping", "having a bath", "going to sleep"];
  this.foodArray = ["pizza", "chocolate", "carrots", "chips", "lettuce"];
  this.gameArray = ["tag", "hide and seek", "sleeping lions", "hopscotch", "what's the time Mr Wolf"];
  this.feelingsArray = ["happy", "excited", "sleepy", "bored", "sad"];

};

Story.prototype.name1LinkCreator = function () {
  this.name1Array.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='name1' href=#>" + value + "</a>";
    document.getElementById("name1").appendChild(newLi);
});
};

Story.prototype.animal1LinkCreator = function () {
  this.animal1Array.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='animal1' href=#>" + value + "</a>";
    document.getElementById("animal1").appendChild(newLi);
});
};

Story.prototype.toyLinkCreator = function () {
  this.toysArray.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='toys' href=#>" + value + "</a>";
    document.getElementById("toys").appendChild(newLi);
});
};

Story.prototype.choreLinkCreator = function () {
  this.choresArray.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='chores' href=#>" + value + "</a>";
    document.getElementById("chores").appendChild(newLi);
});
};

Story.prototype.placeLinkCreator = function () {
  this.placesArray.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='place' href=#>" + value + "</a>";
    document.getElementById("places").appendChild(newLi);
});
};

Story.prototype.foodLinkCreator = function () {
  this.foodArray.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='food' href=#>" + value + "</a>";
    document.getElementById("food").appendChild(newLi);
});
};

Story.prototype.name2LinkCreator = function () {
  this.name2Array.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='name2' href=#>" + value + "</a>";
    document.getElementById("name2").appendChild(newLi);
});
};

Story.prototype.animal2LinkCreator = function () {
  this.animal1Array.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='animal2' href=#>" + value + "</a>";
    document.getElementById("animal2").appendChild(newLi);
});
};

Story.prototype.gameLinkCreator = function () {
  this.gameArray.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='game' href=#>" + value + "</a>";
    document.getElementById("game").appendChild(newLi);
});
};

Story.prototype.feelingsLinkCreator = function () {
  this.feelingsArray.forEach(function(value) {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<a class='feelings' href=#>" + value + "</a>";
    document.getElementById("feelings").appendChild(newLi);
});
};


var story = new Story();
story.animal1LinkCreator();
story.placeLinkCreator();
story.name1LinkCreator();
story.name2LinkCreator();
story.toyLinkCreator();
story.choreLinkCreator();
story.foodLinkCreator();
story.animal2LinkCreator();
story.gameLinkCreator();
story.feelingsLinkCreator();
