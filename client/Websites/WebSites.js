

Accounts.ui.config({
//    passwordSignupFields: "USERNAME_ONLY"
  });


Template.Websites.onCreated(function () {
  var self = this;
  self.autorun(function() {
     self.subscribe('websites');
  });
});

// helper function that returns all available websites
Template.Websites.helpers({
  websites:function(){
    return Websites.find({},{sort: {upCount: -1, downCount: -1}});
  }
});

Template.website_item.helpers({
  author: function(){
    var post_user = Meteor.users.findOne({ "_id" : this.author});
    console.log("Post UserId:"+post_user);
    return post_user.username;
  },
  when: function(){
    return this.createdOn.toLocaleDateString();
  }
});

Template.website_item.events({
  "click .js-upvote":function(event){
    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;
    var newupcount = this.upCount + 1;
    console.log("Up voting website with id "+website_id);
    // put the code in here to add a vote to a website!
    Websites.update({_id:website_id}, {$set:{upCount: newupcount

    }});

    return false;// prevent the button from reloading the page
  },
  "click .js-downvote":function(event){

    // example of how you can access the id for the website in the database
    // (this is the data context for the template)
    var website_id = this._id;
    var newdowncount = this.downCount + 1;

    console.log("Down voting website with id "+website_id);
    Websites.update({_id:website_id}, {$set:{downCount: newdowncount

    }});
    // put the code in here to remove a vote from a website!

    return false;// prevent the button from reloading the page
  }
});
