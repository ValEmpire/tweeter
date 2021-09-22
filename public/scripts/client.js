const createTweetElement = function(tweet) {
  let $tweet = `<article class='article p-3 mt-4'>
    <header class='article-header'>
      <div class='header-profile'>
        <div class='profile-picture'>
          <img src=${tweet.user.avatars}>
        </div>
        <div class='profile-name'>
          <span>${tweet.user.name}</span>
        </div>
      </div>
      <div class='tagged-name'>
        <span>${tweet.user.handle}</span>
      </div>
    </header>

    <div class='mt-4'>
      <p>${tweet.content.text}</p>
    </div>

    <footer class='article-footer pt-2'>
      <div class=footer-date>
        <small>${timeago.format(tweet.created_at)}</small>
      </div>
      <div class="footer-action">
        <button class='button-icon'>
          <i class="fas fa-flag"></i>
        </button>
        <button class='button-icon'>
          <i class="fas fa-retweet"></i>
        </button>
        <button class='button-icon'>
          <i class="fas fa-heart"></i>
        </button>
      </div>
    </footer>
  </article>`;
  // ...
  return $tweet;
}

const renderTweets = function(tweets) {
  let $tweets = '';

  // loops through tweets
  for(const tweet of tweets.reverse()) {

    // calls createTweetElement for each tweet
    $tweets += createTweetElement(tweet);
  }

  // takes return value and appends it to the tweets container
  $('#tweets-container').empty().append($tweets);
}

const loadtweets = function() {
  $.get( "/tweets", function(tweets) {
    renderTweets(tweets);
  });
}

loadtweets();

// Submit
$( "#new-tweet-textarea" ).submit(function (event) {
  event.preventDefault();

  $("#error").hide();

  const $data = $(this).serialize();

  if (event.target.text.value === ''){
    $("#error").slideDown('slow', () => {
      $("#error-message").html("Tweet cannot be empty.")
    });
    return;
  }

  if (event.target.text.value.length > 140) {
    $("#error").slideDown('slow', () => {
      $("#error-message").html("Tweet cannot exceeds more than 140 characters.")
    });
    return;
  }
  this.reset();

  $.post('/tweets', $data, function(res){
    loadtweets();
  });
});

$( "#error" ).hide();

