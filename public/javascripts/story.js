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
