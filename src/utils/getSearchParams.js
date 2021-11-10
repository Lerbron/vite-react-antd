export default function getSearchParams(params) {
  var args = {};
  var query = params ? params.substring(1) : location.search.substring(1);
  var pairs = query.split("&");
  for (var i = 0; i < pairs.length; i++) {
      var pos = pairs[i].indexOf("=");
      if (pos == -1) {
          continue;
      }
      var name = pairs[i].substring(0, pos);
      var value = pairs[i].substring(pos + 1);
      args[name] = value;
  }
  return args;
}