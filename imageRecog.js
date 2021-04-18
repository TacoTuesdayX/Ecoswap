const axios = require('axios');
const window = require('window');
//tags array, dynamically populated with gettags
var tags = [];



/* Google's Vision libraries for obtaining
 * meaning/qualitative content of desired
 * image. We need this to populate @tag arr.
 * tags will be used as a param in our EtsyApi
 * invocation
 */
const gettags = async (url) => {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection(url);
  const labels = result.labelAnnotations;
  labels.forEach(label => tags.push(label.description.toLowerCase()));
}


window.onload=function(){
  var searched_term= document.getElementsByTagName("img")[1];
  console.log(searched_term);

  window.onclick = e => {
  var img_url=(e.target.getAttribute("src"));   // to get the element
    //console.log(e.target.tagName);  // to get the element tag name alone
}


};



/* start function for handling a new image
 * request. Will first gettags()
 */
const start = async (url) => {
  await gettags(url);

  //these are valid tags which we compare with those returned by Google vision
  var colors=["purple", "indigo", "navy", "blue", "green","yellow", "orange", "red", "pink","black","white","grey" ];
  var clothing_type=["top", "shirt", "t-shirt","pants", "shorts","skirt", "scarf", "shoes" ];

  //this array will hold all the valid searchable tags related to inputed Image
  //these will be used as params to restrict responses in ETSY invocation
  var valid_tags=[];

  //need to parse through tags array above to select appropriate ones
  for(i=0; i < tags.length; i++){
    var temp = tags[i];
    if(colors.includes(tags[i]) || clothing_type.includes(tags[i])){
      valid_tags.push(tags[i]);
    }
  }

  console.log(valid_tags[0]);
  console.log(valid_tags[1]);
  console.log(valid_tags[2]);
  console.log(valid_tags[3]);


  getSimilarLocal(""+valid_tags[0] + " " + valid_tags[1]);
  //then pass these selected tags to getSimilar.js which will return etsy posts

}

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

start("https://www.elizabethcustomskirts.com/wp-content/uploads/2013/05/red-cotton-shirt-blouse-1.jpg%22");
