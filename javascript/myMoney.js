
// get the most recent exchange rates via the "live" endpoint:
function exchangeRates(cb){

    var endpoint = 'live'
    var access_key = 'ab595b7e5af131da821709db2f1a2a83';

    $.ajax({
        url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
        dataType: 'jsonp',
        success: cb

  });
}
//HTML Element References
var xeCurrencies = document.getElementById('xeTemplate');
var myText = document.getElementById('myText');
var liveRates = document.getElementById('xeRates');
var displayResults = document.getElementById('displayResults');
var listPairs = document.querySelector('.currencies');
var xeInstance = Handlebars.compile(xeCurrencies.innerHTML);

var currencies = [];



//Generates Exchange rates fron the API
exchangeRates(function(rates){

genRates(rates);

//Dynamically add Currency Pairs into the dropdown list:
rateUSDZAR = rates.quotes.USDZAR;
listPairs.innerHTML = xeInstance({currencies:currencies});

});

//Add rates to an empty Array.
function genRates(rates){
  currencies.push ({
    type : 'USDZAR',
    rate : rates.quotes.USDZAR
  },
  {
    type : 'USDGBP',
    rate : rates.quotes.USDGBP
  },
{
  type : 'USDJPY',
  rate : rates.quotes.USDJPY
});
displayResults.innerHTML = '$'+currencies[0].rate.toFixed(2);
}

//Calculates USD amount with the selected pair.
function convertToUSD(xePairs, amountUSD){
  var xePairs = listPairs.value;
  var amountUSD = myText.value;
  //Function Call to pass live rates
exchangeRates(function(rates){

  if (xePairs === 'USDZAR') {
    displayResults.innerHTML = '$'+(rates.quotes.USDZAR * amountUSD).toFixed(2);
  }

  else if(xePairs === 'USDGBP') {
    displayResults.innerHTML = '$'+(rates.quotes.USDGBP *amountUSD).toFixed(2);
  }
  else if(xePairs === 'USDJPY') {
    displayResults.innerHTML = '$'+(rates.quotes.USDJPY * amountUSD).toFixed(2);
  }
});

}

//Automatically Calculates as you type the amount of USD.
myText.addEventListener('keyup',  convertToUSD);
