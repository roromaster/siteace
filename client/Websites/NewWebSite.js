

Template.addWebSiteForm.onRendered(function() {
  console.log("OnRendered");

  $("#add-website-form").validate({
    rules: {
      url: {
        required: true
      },
      title: {
        required: true
      },
      description: {
        required: true
      }
    },
    highlight: function(element) {

      $(element).next('.glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove');
      $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
      console.log("Valide KO");
    },
    success: function(element) {
      console.log("Valide Ok");
      $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
      $(element).next('.glyphicon').removeClass('glyphicon-remove').addClass('glyphicon-ok');
    },
    errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.length) {
                error.insertAfter(element);
            } else {
            error.insertAfter(element);
            }
        }
  });
});


Template.addWebSiteForm.events({

  "click .btn-deny": function(event,template){
    console.log("Canceled");
      Modal.hide(websiteModal);
  },
  "submit form": function(event, template){
    console.log("Submit new Website");
    event.preventDefault();

    // Get value from form element
    var url = event.target.url.value;
    var title = event.target.title.value;
    var description = event.target.description.value;

    console.log(url + title + description);


    Websites.insert({url: url, title: title, description: description});

    // event.target.title.value = "";
    // event.target.url.value="";
    // event.target.description.value="";
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
