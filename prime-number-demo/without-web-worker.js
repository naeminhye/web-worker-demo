function doSearch() {
  // Get the two numbers in the text boxes. This is the search range.
  var fromNumber = document.getElementById("from").value;
  var toNumber = document.getElementById("to").value;

  var statusDisplay = document.getElementById("status");
  statusDisplay.innerHTML = "Starting new search...";    
  
  // Perform the search.
  var primes = findPrimes(fromNumber, toNumber);

  // Take the results, loop over it,
  // and paste it into one long piece of text.
  var primeList = "";
  for (var i=0; i<primes.length; i++) {
    primeList += primes[i];
    if (i != primes.length-1) primeList += ", ";
  }
  
  // Show the prime number list on the page.
  var primeContainer = document.getElementById("primeContainer");
  primeContainer.innerHTML = primeList;

  var statusDisplay = document.getElementById("status");
  if (primeList.length == 0) {
    statusDisplay.innerHTML = "Search didn't find any results.";
  }
  else {
    statusDisplay.innerHTML = "The results are here!";
  }
}


function findPrimes(fromNumber, toNumber) {

  // Create an array containing all integers
  // between the two specified numbers.
  var list = [];
  for (var i=fromNumber; i<=toNumber; i++) {
    if (i>1) list.push(i);
  }

  // Test for primes.
  var maxDiv = Math.round(Math.sqrt(toNumber));
  var primes = [];

  for (var i=0; i<list.length; i++) {
    var failed = false;
    for (var j=2; j<=maxDiv; j++) {
      if ((list[i] != j) && (list[i] % j == 0)) {
        failed = true;
      } else if ((j==maxDiv) && (failed == false)) {
        primes.push(list[i]);
      }
    }
  }

  return primes;
}