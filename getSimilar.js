/* This call will work only on a webserver, that webserver needs to be
 * configured with CORS.
 *
 * @param--tags--format as 'tag1 tag2 tag3...'
 *
 * Inheretly logs the JSON but you can edit the handler to voice an event.
 */

const getSimilar = (tags) => {

  //build URL with endpoint plus tags argument
  var buildURL = "https://openapi.etsy.com/v2/listings/active?api_key=9jqzoscw52ee4lyuu0txbwp1&tags="+tags;

  //configuration of HTTP request
  var settings = {
    "url": buildURL,
    "method": "GET",
    "timeout": 0,
    "headers": { 
      //remove upon submission:
      "Cookie": "uaid=g8hJSUHZRzeT3lOTxhRectwaMYBjZACChOrA3TC6Wqk0MTNFyUopNdzMNLHSqMo9yjS9MNgtrSTesyLEv9LUKMAlXKmWAQA.; user_prefs=4mxmQJscOfI9x5Q3g682RILVz9pjZACChOrA3TA6Oq80J0eHPCKWAQA."
    },
  };

  //ajax request invocation
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

//test call
getSimilar("mens black longsleeve buttondown");
