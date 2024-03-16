/**
 * Proof of concept for lazy people to get an implicit grant OAuth access token
 * from the Spotify API right on your web page! The URL of the page you call
 * this script from needs to be added to your app's list of approved redirect
 * URIs from the dashboard.
 *
 * Warning: this is not a good proof of concept.
 *
 * @link https://developer.spotify.com/dashboard/
 */

function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

let params = getHashParams();
if (Object.keys(params).length !== 0 && params.constructor === Object) {
  console.log(params);
} else {
  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent("{{ .Client }}");
  url += "&redirect_uri=" + encodeURIComponent("{{ .Redirect }}");

  window.location = url;
}
