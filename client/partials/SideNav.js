
Template.SideNav.events({
  'click .add_website': function(e) {
    e.preventDefault();
    console.log("Add Clicked");
    Modal.show('websiteModal')
  }
});
