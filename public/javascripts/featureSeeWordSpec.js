function seeWord() {
  if(document.getElementById('animal1') === null) {
    console.log("Feature test: Test failed");
  } else {
    console.log("Feature test: Test passed");
  }
}

function listContainsAnimal() {
  var word = document.getElementById('animal1').innerHTML;
  var finding = word.includes("lion");
  if (finding === true) {
    console.log("Feature test: Test passed");
  } else {
    console.log("Feature test: Test failed");
  }
}

function spanCheck() {
  if (document.getElementsByTagName('word0').length === 0) {
    console.log("Feature test: Test passed");
  } else {
    console.log("Feature test: Test failed");
  }
}

function clickMove() {
}

function checkWord() {
  var cells = document.getElementsByTagName("li");
  var len = cells.length;
  var str = "";
  for (var i=0; i<len; i++) {
    if (cells.id !== null){
      console.log("Feature test: Test passed");
    } else {
      console.log("Feature test: Test failed");
    }
  }
}

  seeWord();
  checkWord();
  listContainsAnimal();
  spanCheck();
  clickMove();
