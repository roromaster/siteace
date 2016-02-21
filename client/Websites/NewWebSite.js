Template.websiteModal.events({
  "click .btn-deny": function(event, template){
    Modal.hide(websiteModal);
  }

});

AutoForm.addHooks(['insertWebsiteForm'], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('New Website added !!');
    Modal.hide(websiteModal);
  }
});
