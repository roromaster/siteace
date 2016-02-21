Meteor.publish('websites', function(){
  return Websites.find({});
});

Meteor.publish('singleWebSite', function(id){
  check(id, String);
  return Websites.find({_id: id});
});


// This should be in the server directory
Accounts.onCreateUser(function(options, user) {
  console.log("User Creation");
//  user.firstName = options.firstName;
//  user.lastName = options.lastName;
  if (!user.username) {
    user.username = user.emails[0].address;
  }

  return user;
});
