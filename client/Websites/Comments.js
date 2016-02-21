

Template.CommentsTemplate.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
     self.subscribe('singleWebSite',id);
  });
});

Template.CommentsTemplate.helpers({
  website: ()=> {
    var id = FlowRouter.getParam('id');
    return Websites.findOne({_id: id});
  }
});
