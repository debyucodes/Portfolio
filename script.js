// Namespace object
const app = {};

// Initilize app
app.init = () => {
  app.loaded();
  app.clickAbout();
  app.clickContact();
  app.clickPortfolio();
  app.close();
  app.clearForm();
}

// PRELOADER
app.loaded = () => {
  $('body').toggleClass('loaded');
  setTimeout(() => {
    $('body').addClass('loaded');
  }, 3000);
}

// When user clicks on ABOUT ME
app.clickAbout = () => {
  $('.about').click(function() {
    $('.aboutOverlay').fadeIn();
  })
};

// When user clicks on CONTACT
app.clickContact = () => {
  $('.contact').click(function() {
    $('.contactOverlay').fadeIn();
  })
};

// When user clicks on PORTFOLIO
app.clickPortfolio = () => {
  $('.portfolio').click(function() {
    $('.portfolioOverlay').fadeIn();
  })
};

// Close overlay
app.close = () => {
  $('.closeButton').click(function(){
    console.log('deb');
    $('.overlay').fadeOut();
  })
};

// Clear search on form
app.clearForm = () => {
  $('.clear').val('');
}

// doc ready
$(document).ready(function(){
  app.init();
})