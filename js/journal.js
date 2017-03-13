function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.entry = function() {
  return [this.title, this.body];
};

module.exports.journal = Journal;
