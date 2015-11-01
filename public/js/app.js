var myLocation = {
  latitude: 21.301424,
  longitude: -157.850658
};

var products = getProducts(myLocation);
renderProducts(products);

/**
 * Returns the device's current location.
 * @return {object} The device's current location
 */
function requestProductsByCurrentPosition () {
  /* The `getCurrentPosition` takes a function as it's first argument.
   * This function is referred to as a "callback" function, because it is
   * called when the result (current location) is found.
   */
  navigator.geolocation.getCurrentPosition(/* your function name goes here */);
}

/**
 * Sends a request to the server to get Uber products based on passed in
 * latitude and longitude positions.
 * @param  {number} lat The location's latitude value
 * @param  {number} lng The location's longitude value
 * @return {[Products]]} The Uber products available at the queried location
 */
function getProductsByLocation (lat, lng) {
  var location = {
    /* location object */
  };
  var products = getProducts(location);
  return products;
}

/**
 * Gets the products from a certain location.
 * @param  {object} The location object to query
 * @return {[Product]]} An array of products
 */

function renderProducts (products) {
  console.log(Array.isArray(products));
   newDiv = document.getElementById("div1")
   // products.sort();

  for (var i = products.length - 1; i >= 0; i--) {
    var newElem = document.createElement('p');
    newElem.innerText = products[i].display_name + ' ' + products[i].capacity;
    newDiv.appendChild(newElem);
    console.log(products[i]);

  };

};

function getProducts (locationObject) {

  var response = $.ajax({
    type: "GET",
    data: locationObject,
    url: '/products',
    async: false
  });

console.log(response.responseJSON.products);
return response.responseJSON.products;

}