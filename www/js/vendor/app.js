var appModel = function() {
  var self = this;
  self.goto_page = function(page) {
    console.log('goto page');
  }
}

var application = {
  init: function() {
    ko.applyBindings(appModel, document.getElementById('app'));
    
  },
  goToPage: function(page_id){
  	app_menu.closeMenu();
  	app_navigator.pushPage(page_id);
  
  }
}