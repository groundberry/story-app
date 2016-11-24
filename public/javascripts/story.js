// Story = function() {

  var items = {
      name1: ["Bert", "Rupert", "Daisy", "Ruby", "Timmy"],
      animal1: ["cat", "dog", "lion", "otter", "pig"],
      toys: ["ball", "catapult", "cars", "bikes", "frisbees"],
      chores: ["brushing their teeth", "tidying their room", "going shopping", "having a bath", "going to sleep"],
      places: ["toilet", "sofa", "mat", "throne", "roof"],
      food: ["pizza", "chocolate", "carrots", "chips", "lettuce"],
      name2: ["Bob", "Steve", "Jimmy", "Anne", "Katy"],
      animal2: ["monkey", "zebra", "duck", "cow", "penguin"],
      game: ["tag", "hide and seek", "sleeping lions", "hopscotch", "what's the time Mr Wolf"],
      feelings: ["happy", "excited", "sleepy", "bored", "sad"]
    };


  var linkCreator = function () {
    Object.keys(items).forEach(function(key) {
      var arr = items[key];
      arr.forEach(function(item) {
        var link = document.createElement("li");
        link.innerHTML = "<a class='" + key + "' href='#'>" + item + "</a>";
        document.getElementById(key).appendChild(link);
      });
    });
  };

  linkCreator();





//
//   Story.prototype.name1LinkCreator = function () {
//     this.name1Array.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='name1' href=#>" + value + "</a>";
//       document.getElementById("name1").appendChild(newLi);
//     });
//   };
//
//   Story.prototype.animal1LinkCreator = function () {
//     this.animal1Array.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='animal1' href=#>" + value + "</a>";
//       document.getElementById("animal1").appendChild(newLi);
//     });
//   };
//
//   Story.prototype.toyLinkCreator = function () {
//     this.toysArray.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='toys' href=#>" + value + "</a>";
//       document.getElementById("toys").appendChild(newLi);
//     });
//   };
//
//   Story.prototype.choreLinkCreator = function () {
//     this.choresArray.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='chores' href=#>" + value + "</a>";
//       document.getElementById("chores").appendChild(newLi);
//     });
//   };
//
//   Story.prototype.placeLinkCreator = function () {
//     this.placesArray.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='place' href=#>" + value + "</a>";
//       document.getElementById("places").appendChild(newLi);
//     });
//   };
//
//   Story.prototype.foodLinkCreator = function () {
//     this.foodArray.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='food' href=#>" + value + "</a>";
//       document.getElementById("food").appendChild(newLi);
//     });
//   };
//
//   Story.prototype.name2LinkCreator = function () {
//     this.name2Array.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='name2' href=#>" + value + "</a>";
//       document.getElementById("name2").appendChild(newLi);
//     });
//   };
//
//   Story.prototype.animal2LinkCreator = function () {
//     this.animal1Array.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='animal2' href=#>" + value + "</a>";
//       document.getElementById("animal2").appendChild(newLi);
//     });
//   };
//
//   Story.prototype.gameLinkCreator = function () {
//     this.gameArray.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='game' href=#>" + value + "</a>";
//       document.getElementById("game").appendChild(newLi);
//     });
//   };
//
//   Story.prototype.feelingsLinkCreator = function () {
//     this.feelingsArray.forEach(function(value) {
//       var newLi = document.createElement("li");
//       newLi.innerHTML = "<a class='feelings' href=#>" + value + "</a>";
//       document.getElementById("feelings").appendChild(newLi);
//     });
//   };
// };
//
//
// var story = new Story();
// story.animal1LinkCreator();
// story.placeLinkCreator();
// story.name1LinkCreator();
// story.name2LinkCreator();
// story.toyLinkCreator();
// story.choreLinkCreator();
// story.foodLinkCreator();
// story.animal2LinkCreator();
// story.gameLinkCreator();
// story.feelingsLinkCreator();
