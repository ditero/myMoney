var callBackValue = null;
function exchangeRates(cb){
  callBackValue = cb;
    var endpoint = 'live'
    var access_key = 'ab595b7e5af131da821709db2f1a2a83';

    // get the most recent exchange rates via the "live" endpoint:
    $.ajax({
        url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
        dataType: 'jsonp',
        success: cb
  });
}
var xeCurrencies = document.getElementById('xeTemplate');//myText
var myText = document.getElementById('myText');
var displayResults = document.getElementById('displayResults');
var listPairs = document.querySelector('.currencies');
var xeInstance = Handlebars.compile(xeCurrencies.innerHTML);
var inputValue = 250;
var totalValue = 0;
var currencies = [];

function genRates(){

}
exchangeRates(function(rates){


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
//console.log(rates);
//Dynamically add Currency Pairs into the dropdown list:
listPairs.innerHTML = xeInstance({currencies:currencies});
  //console.log(currencies[0].rate);
  for (var i = 0; i < currencies.length; i++) {

      console.log(currencies[i].rate);

  }

});

console.log(currencies[0]);


listPairs.addEventListener('change', function(callBackValue){
  var valuePair = listPairs.value;
  //console.log(callBackValue.quotes.valuePair);;
  if (valuePair === 'USDZAR') {
    displayResults.innerHTML = 13.00 * myText.value;
  }

  else if(valuePair === 'USDGBP') {
    displayResults.innerHTML = 0.77 * myText.value;
  }
  else if(valuePair === 'USDJPY') {
    displayResults.innerHTML = 110 * myText.value;
  }
});
