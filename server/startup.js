

// start up function that creates entries in the Websites databases.
Meteor.startup(function () {
  // code to run on server at startup
  // sets locale to de
  faker.locale = "en";
  // Create in 25 fake users.

      // If the user count ever falls below 25 this code will
      // make sure that you ALWAYS have 25 fresh users to
      // do with what you will. Be sure to place this
      // in your Meteor.startup or a Tracker.deps block
      if(Meteor.users.find().count() < 25){
        _.each(_.range(25), function(){
          var randomEmail = faker.internet.email();
          var randomName = faker.name.findName();
          var userName = faker.internet.userName();
          Accounts.createUser({
            username: userName,
            profile: {
              name: randomName,
            },
            email: randomEmail,
            password: 'password'
          });
        });
      }
      var userCount = Meteor.users.find().count();





  if (Websites.find({}).count() < 30){
    console.log("No websites yet. Creating starter data.");
    _.each(_.range(30), function() {
      // Function to fill in websites and comments
      var RandomUserNumber = Math.floor(Math.random() * userCount);
      var randomTitle = faker.fake('{{lorem.sentence}}');
      var randomUrl = faker.fake('{{internet.url}}');
      var randomUser = (Meteor.users.findOne({},{skip:RandomUserNumber}))._id;
      var randomDescription = faker.fake('{{lorem.paragraph}}');
      console.log('Title:' + randomTitle + '/n Url:'+ randomUrl
        + '/n UserNum'+ RandomUserNumber +'/n UserID:'
        + randomUser +'/n Decription'+ randomDescription);
      Websites.insert({
        title:randomTitle,
        url:randomUrl,
        author:randomUser,
        description:randomDescription
      });
    });
  }
});
