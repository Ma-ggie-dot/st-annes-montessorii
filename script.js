// Tour request form: shows a thank-you message.
// NOTE: this does not send data anywhere yet (see the tip below).
document.getElementById('f').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('msg').textContent =
    'Thank you! We will contact you shortly to arrange your tour.';
  this.reset();
});