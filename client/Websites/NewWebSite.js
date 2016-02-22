Template.websiteModal.events({
  "click .btn-deny": function(event, template){
    Modal.hide(websiteModal);
  }
});





Template.addWebSiteForm.events({
  "submit .btn-add-site": function(event, template){
    console.log("Submit new Website");

    event.preventDefault();

    // Get value from form element
    var url = event.target.url.value;
    var title = event.target.title.value;
    var description = event.target.description.value;

    console.log(url + title + description);

  }
});

AutoForm.addHooks('addWebsiteForm', {
  onSuccess: function(operation, result, template) {
    console.log("Success Insert");
    FlashMessages.sendSuccess('New Website added !!');
    Modal.hide(websiteModal);
  },
  before: {
    insert: function(doc) {
      console.log("Submitting new Website");
      var url = doc.url;
      var auto_form = Meteor.call("requestWebsite", url, function(error, result) {
          if (error) {
            console.log("error", error);
          }
          if (result) {
            console.log("result received!");
            $('#title').val(result.title);
            $('#description').val(result.description);
          }
        });
        console.log(auto_form);
      }
    }
  }, true);
