function exchangeRates(cb){
    var endpoint = 'live'
    var access_key = 'ab595b7e5af131da821709db2f1a2a83';

    // get the most recent exchange rates via the "live" endpoint:
    $.ajax({
        url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key,
        dataType: 'jsonp',
        success: cb
  });
}
var inputValue = 250;
var totalValue = 0;
exchangeRates(function(rates){

  //console.log(rates.quotes);

  console.log(rates.quotes.USDZAR);
  console.log(rates.quotes.USDGBP);
  console.log(rates.quotes.USDEUR);
  console.log(totalValue = inputValue * rates.quotes.USDZAR);

  var currencies = [];

  currencies.push ({
    type : 'USDZAR',
    rate : rates.quotes.USDZAR
  });


  //console.log(rates);


});

//setup();
