document.querySelector('.detailForm')
  .addEventListener('submit', function(evt) {
    evt.preventDefault();
    // Save JSON data from the form to the textarea
  });

document.querySelector('#loadBtn')
  .addEventListener('click', function(evt) {
    // Load JSON data from the textarea to the form
});
