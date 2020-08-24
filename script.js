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
    $('.aboutOverlay').show();
  })
};

// When user clicks on CONTACT
app.clickContact = () => {
  $('.contact').click(function() {
    $('.contactOverlay').show();
  })
};

// When user clicks on PORTFOLIO
app.clickPortfolio = () => {
  $('.portfolio').click(function() {
    $('.portfolioOverlay').show();
  })
};

// Close overlay
app.close = () => {
  $('.closeButton').click(function(){
    console.log('deb');
    $('.overlay').hide();
  })
};

// doc ready
$(document).ready(function(){
  app.init();
})