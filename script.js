// Namespace object
const app = {};

// Initilize app
app.init = () => {
  app.clickAbout();
  app.clickContact();
  app.clickPortfolio();
  app.close();
}

// When user clicks on ABOUT ME
app.clickAbout = () => {
  $('.about').click(function() {
    // $('.aboutOverlay').show();
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

// doc ready
$(document).ready(function(){
  app.init();
})