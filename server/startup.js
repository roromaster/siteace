// start up function that creates entries in the Websites databases.
Meteor.startup(function() {
  // code to run on server at startup
  // sets locale to de
  faker.locale = "en";
  // Create in 25 fake users.

  matchAny = function (str, regexList) {
    var found;
    regexList.some(function (r) {
      return found = str.match(r);
    });
    return found ? _.unescape(found[1]): '';
  };

  getKeywords= function (text) {

    console.log("Keywords from text:" + text);
    var stop_words = [
      'a', 'able', 'about', 'across', 'after', 'all', 'almost', 'also', 'am',
      'among', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been',
      'but', 'by', 'can', 'cannot', 'could', 'dear', 'did', 'do', 'does',
      'either', 'else', 'ever', 'every', 'for', 'from', 'get', 'got', 'had',
      'has', 'have', 'he', 'her', 'hers', 'him', 'his', 'how', 'however', 'i',
      'if', 'in', 'into', 'is', 'it', 'its', 'just', 'least', 'let', 'like',
      'likely', 'may', 'me', 'might', 'most', 'must', 'my', 'neither', 'no',
      'nor', 'not', 'of', 'off', 'often', 'on', 'only', 'or', 'other', 'our',
      'own', 'rather', 'said', 'say', 'says', 'she', 'should', 'since', 'so',
      'some', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these',
      'they', 'this', 'tis', 'to', 'too', 'twas', 'us', 'wants', 'was', 'we',
      'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why',
      'will', 'with', 'would', 'yet', 'you', 'your',

      'best', 'biggest', 'com', 'company', 'corporation', 'first', 'free',
      'global', 'home', 'largest', 'learn', 'less', 'login', 'more', 'new',
      'official', 'online', 'provider', 'sign', 'site', 'web', 'website',
      'welcome', 'world'
    ];

    if (!text)
      return '';

    var keywords_filtered = text.toLowerCase().split(/[^a-z]+/g).sort().filter(function (word, index, array) {
        return ((array.indexOf(word) == index) &&	//Remove duplicates
               (word.length > 1) &&								//Remove single character
               (stop_words.indexOf(word) == -1));	//Not in stop word array
      });
      console.log("Keywords for the site: " + keywords_filtered);
      return keywords_filtered;
  };

  // If the user count ever falls below 25 this code will
  // make sure that you ALWAYS have 25 fresh users to
  // do with what you will. Be sure to place this
  // in your Meteor.startup or a Tracker.deps block
  if (Meteor.users.find().count() < 25) {
    _.each(_.range(25), function() {
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





  if (Websites.find({}).count() < 30) {
    console.log("No websites yet. Creating starter data.");
    _.each(_.range(30), function() {
      // Function to fill in websites and comments
      var RandomUserNumber = Math.floor(Math.random() * userCount);
      var randomTitle = faker.fake('{{lorem.sentence}}');
      var randomUrl = faker.fake('{{internet.url}}');
      var randomUser = (Meteor.users.findOne({}, {
        skip: RandomUserNumber
      }))._id;
      var randomDescription = faker.fake('{{lorem.paragraph}}');
      console.log('Title:' + randomTitle + '/n Url:' + randomUrl + '/n UserNum' + RandomUserNumber + '/n UserID:' + randomUser + '/n Decription' + randomDescription);
      var webid = Websites.insert({
        title: randomTitle,
        url: randomUrl,
        author: randomUser,
        description: randomDescription
      });
      _.each(_.range(10), function() {
        var RandomUserNumber = Math.floor(Math.random() * userCount);
        var randomComment = faker.fake('{{lorem.sentence}}');
        var randomUser = (Meteor.users.findOne({}, {
          skip: RandomUserNumber
        }))._id;
        Comments.insert({
          websiteid: webid,
          comment: randomComment});
      });
    });
  }
});
