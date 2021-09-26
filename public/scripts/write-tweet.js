const toggleNewTweetForm = () => {

  const isFormHidden = $("#new-tweet-form").is(':hidden');

  if (isFormHidden) {
    $("#new-tweet-form").slideDown('slow');
  } else {
    $("#new-tweet-form").slideUp('slow');
  }

}

$("#nav-action").on('click', toggleNewTweetForm);