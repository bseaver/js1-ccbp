var Journal = require('./../js/journal.js').journal;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Journal(title, body);
    console.log(title, body);
    var output = newEntry.entry();
    console.log("still here?");
    output.forEach(function(element) {
      $('#printed_entry').append("<li>" + element + "</li>");
    });
  });
});
