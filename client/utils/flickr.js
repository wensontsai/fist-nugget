const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;

export const fetchImages = () => {
  console.log('fetching...');
  // return fetch(API_ENDPOINT).then(function (response) {
  //   return response.json().then(function (json) {
  //     return json.photos.photo.map(
  //       ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
  //     );
  //   })
  // })
  return [
    "https://farm2.staticflickr.com/1553/25266806624_fdd55cecbc.jpg",
    "https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg",
    "https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg",
    "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
    "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg"
  ];
};