$(document).ready(function() {
  // --- our code goes here ---
  // initial value
  let maxChars = 140;
  $('#counter').val(maxChars);

  $("#new-tweet-textarea").on('input', function(e) {
    // get the length of textarea input
    const inputLength = e.target.value.length;

    $('#counter').val(maxChars - inputLength);
  });
});