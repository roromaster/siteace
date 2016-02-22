Template.websiteModal.events({
  "click .btn-deny": function(event, template){
    Modal.hide(websiteModal);
  }
});





Template.addWebSiteForm.events({
  "submit .add-website-form": function(event, template){
    console.log("Submit new Website");

    event.preventDefault();

    // Get value from form element
    var url = event.target.url.value;
    var title = event.target.title.value;
    var description = event.target.description.value;

    console.log(url + title + description);

    Websites.insert({url: url, title: title, description: description});

    event.target.title.value = "";
    event.target.url.value="";
    event.target.description.value="";
    Modal.hide(websiteModal);
    console.log("Success Insert");
    FlashMessages.sendSuccess('New Website added !!');

  },
  "blur #url": function(event){
    var url = event.currentTarget.value;
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
  }
});

// AutoForm.addHooks('addWebsiteForm', {
//   onSuccess: function(operation, result, template) {
//     console.log("Success Insert");
//     FlashMessages.sendSuccess('New Website added !!');
//     Modal.hide(websiteModal);
//   },
//   before: {
//     insert: function(doc) {
//       console.log("Submitting new Website");
//
//         console.log(auto_form);
//       }
//     }
//   }, true);
