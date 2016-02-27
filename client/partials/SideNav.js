
Template.SideNav.events({
  'click .add_website': function(e) {
    e.preventDefault();
    Modal.show('websiteModal');
  }
});
