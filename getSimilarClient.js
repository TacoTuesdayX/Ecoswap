var axios = require('axios');

/* This call will work locally without a webserver running thanks to
 * axios. Uses node.js to run locally so just do 'node getSimilarLocal'
 *
 * @param--tags--format as 'tag1 tag2 tag3...'
 *
 * Inheretly logs the JSON but you can edit the handler to voice an event.
 */
const getSimilarLocal = (tags) => {
  var buildURL = 'https://openapi.etsy.com/v2/listings/active?api_key=9jqzoscw52ee4lyuu0txbwp1&tags='+tags;

  var config = {
    method: 'get',
    url: buildURL,
    headers: {
      'Cookie': 'uaid=g8hJSUHZRzeT3lOTxhRectwaMYBjZACChOrA3TC6Wqk0MTNFyUopNdzMNLHSqMo9yjS9MNgtrSTesyLEv9LUKMAlXKmWAQA.; user_prefs=4mxmQJscOfI9x5Q3g682RILVz9pjZACChOrA3TA6Oq80J0eHPCKWAQA.'
    }
  };

  //axios call, edit then statement to change response
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}
//test case!
