var Journal = require('./../js/journal.js').journal;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Journal(title, body);
    var output = newEntry.entry();
    output.forEach(function(element) {
      $('#printed_entry').append("<li>" + element + "</li>");
    });
  });
});
