// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  let $tweets = '';

  // loops through tweets
  for(const tweet of tweets) {

    // calls createTweetElement for each tweet
    $tweets += createTweetElement(tweet);
  }

  // takes return value and appends it to the tweets container
  $('#tweets-container').append($tweets);
}

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
      <small>${tweet.created_at}</small>
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
</article>`
  // ...
  return $tweet;
}

renderTweets(data);