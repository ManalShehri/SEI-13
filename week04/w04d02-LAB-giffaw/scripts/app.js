const API_KEY = "g6xRz2Gz2JT2qDyUWcpQaqsW2GF2MfhB";

let giffyTrendingURL = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`;

var giphy_search = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

let $gifGallery = null;
let $search = null;
let $limit = null;

$(document).on("ready", function () {
  $gifGallery = $(".gif-gallery");
  $search = $(".form-inline");
  $limit = $("#limit");
  $limit.val(5);

  $("#limit").change((event) => {
    event.preventDefault();
    $gifGallery.empty();
    getTrendingGifs($limit.val());
  });

  $("#search-btn").on("click", (e) => {
    e.preventDefault();
    $gifGallery.empty();
    var searchKey = $(".gif-input").val(); //search keyword
    searchGifs(searchKey, $limit.val());
  });

  $("#load-more").on("click", (event) => {
    event.preventDefault();
    getTrendingGifs($limit.val(), document.querySelectorAll(".gif-img").length);
  });

  getTrendingGifs(3);
});

function appendHTMLImg(element) {
  const htmlImg = `<img class="img-responsive img-thumbnail gif-img" src="${element.images.fixed_height.url}"/>`;
  $gifGallery.append($(htmlImg));
}

function getTrendingGifs(limit = 5, offset = 0) {
  axios({
    method: "get",
    url: `${giffyTrendingURL}&limit=${limit}&offset=${offset}`,
  })
    .then((res) => {
      res.data.data.forEach(appendHTMLImg);
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchGifs(searchKey, limit = 5) {
  axios({
    method: "get",
    url: `${giphy_search}&limit=${limit}&q=${searchKey}`,
  })
    .then((res) => {
      res.data.data.forEach(appendHTMLImg);
    })
    .catch((err) => {
      console.log(err);
    });
}
