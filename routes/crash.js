
function get(req, res, next) {
  //res.send('respond with a resource');
  crashApp ();
};

function crashApp () {
  var foo = null;
  setTimeout(function () {
    var fooString = foo.toString();
  }, 100)
}

exports.get = get;
