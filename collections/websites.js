Websites = new Mongo.Collection('websites');


Websites.allow({
  insert: function(userId, doc){
    return !!userId;
  },
  update: function(userId, doc){
    return !!userId;
  },
  remove: function(userId, doc){
    return !!userId;
  }
});

WebsiteSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  description: {
    type: String,
    label: "Description"
  },
  url: {
    type: String,
    label: "URL"
  },
  upCount: {
    type: Number,
    label: "UP Count",
    defaultValue: 0,
    autoform: {
      type: 'hidden'
    }
  },
  downCount:{
    type: Number,
    label: "DOWN Count",
    defaultValue: 0,
    autoform: {
      type: 'hidden'
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      if (!!this.userId)
      {
        return this.userId
      }
      else {
        return "Startup Script"
      }
    },
    autoform: {
      type: 'hidden'
    }
  },
  createdOn: {
    type: Date,
    label: "Create At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: 'hidden'
    }
  }
});


Websites.attachSchema(WebsiteSchema);
