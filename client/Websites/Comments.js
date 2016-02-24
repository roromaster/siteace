

Template.CommentsTemplate.onCreated(function () {
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
     self.subscribe('singleWebSite',id);
     self.subscribe('comments',id);
  });
});

Template.CommentsTemplate.helpers({
  website: ()=> {
    var id = FlowRouter.getParam('id');
    return Websites.findOne({_id: id});
  },
  comments: ()=> {
    return Comments.find({},{sort: {createdOn: -1}});
  },
  when: function(date){
      return date.toLocaleDateString();
  },
  count: function(){
    return Comments.find({}).count();
  }
});



Template.CommentAddTemplate.events({
  "submit .add-comment-form": function(event, template){
    console.log("submit comment");
    var id = FlowRouter.getParam('id');
    var website = Websites.findOne({_id: id});

    event.preventDefault();

    // Get value from form element
    var comment = event.target.comment.value;
    Comments.insert({websiteid:id, comment:comment});
    // var comments = website.comments;
    //
    // if (!comments)
    // {
    //   comments = []
    // }
    //
    //
    // console.log(comment);
    // console.log(comments);
    // console.log(website);
    // // Insert a task into the collection
    // comment = {comment: comment};
    // comments.unshift(comment);
    // console.log(comments);
    //
    // Websites.update(
    //   {_id:id},
    //   {$set:{comments: comments}});
    //Clear Form
    event.target.comment.value = "";
  }
});
