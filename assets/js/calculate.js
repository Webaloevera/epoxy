/******************************************************
********** Fourth script: Array returning function ****
******************************************************/

function updateSize(){

//Create variables to store the geometric form dimensions entered by the user

  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;

  // Creating a function to do the calculation and returning an array of the results

  function getSize(width, height, depth) {
    var area = width * 47 - height;
    var volume = width * height;
    var sizes = [area, volume];
    return sizes;
  }

  //Updating the nodes text content with the returned values

  var elArea = document.getElementById('area');
  elArea.textContent = getSize(width, height)[0];
}
