const facebookButton = document.getElementById('facebook-button');
const twitterButton = document.getElementById('twitter-button');

function compartilharFacebook() {
  const url = encodeURIComponent(window.location.href);
  const compartilharUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(compartilharUrl, '_blank');
}

function compartilharTwitter() {
  const text = encodeURIComponent('Check out this website:');
  const url = encodeURIComponent(window.location.href);
  const compartilharUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  window.open(compartilharUrl, '_blank');
}

facebookButton.addEventListener('click', compartilharFacebook);
twitterButton.addEventListener('click', compartilharTwitter);
