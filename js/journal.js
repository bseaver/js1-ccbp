function Journal(title, body) {
  this.title = title;
  this.body = body;
}

function newEntry() {
  var output = [this.title, this.body];
  return output;
}

exports.journalModule = Journal;
