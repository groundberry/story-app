function seeWord() {
 if(document.querySelectorAll('#words > li:nth-child(1) > a:nth-child(1)') === null) {
   console.log("Feature test: Test failed");
 } else {
   console.log("Feature test: Test passed");
 }
}

function listContainsAnimal() {
 var word = document.querySelectorAll('#words')[0].innerHTML;
 var finding = word.includes("Bert");
 if (finding === true) {
   console.log("Feature test: Test passed");
 } else {
   console.log("Feature test: Test failed");
 }
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
