Websites = new Mongo.Collection('websites');
Comments = new Mongo.Collection('comments');
Keywords = new Mongo.Collection('keywords');

AdminConfig = {
  name: 'Website Aggregator',
  adminEmails: ['roromaster@gmail.com', 'admin@admin.com'],
  collections: {
    Websites: {
      icon: 'cloud',
      tableColumns: [
        { label: 'Title', name: 'title' },
        { label: 'Created', name: 'createdOn' }
  ]},
    Comments: {
      icon: 'comment'
    },
    Keywords: {
      icon: 'heart',
      tableColumns: [
        {label: 'Word', name:'keyword'},
        {label: 'SideID', name:'siteID'}
      ]
    }
  }
};

// search index
WebsitesIndex = new EasySearch.Index({
  collection: Websites,
  fields: ['url','title', 'description'],
  defaultSearchOptions: {
  limit: 1000 // could also have skip and props
},
  engine: new EasySearch.Minimongo({
    sort: function() {
      return {
        upCount: -1,
        downCount: -1,
        createOn: -1
      };
    }
  })
});

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

Comments.allow({
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

Keywords.allow({
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

keywordSchema = new SimpleSchema({
  keyword: {
    type: String
  },
  siteID: {
    type: String
  }
});


commentSchema2 = new SimpleSchema({
  comment: {
    type: String,
  },
  createdOn: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  },
  websiteid: {
    type: String,
    autoform: {
      type: 'hidden'
    }
  },
  userid: {
    type: String,
    label: "UserID",
    autoValue: function() {
      if (this.userId)
      {
        return this.userId;
      }
      else {
        return "Startup Script";
      }
    }
  },
  username: {
    type: String,
    label: "Username",
    autoValue: function() {
      if (this.userId)
      {
        return Meteor.user().username;
      }
      else {
        return "Startup Script";
      }
    }
  }
});

commentSchema = new SimpleSchema({
  userid: {
    type: String,
    label: "UserID",
    autoValue: function() {
      if (this.userId)
      {
        return this.userId;
      }
      else {
        return "Startup Script";
      }
    }
  },
  username: {
    type: String,
    label: "Username",
    autoValue: function() {
      if (this.userId)
      {
        return Meteor.user().username;
      }
      else {
        return "Startup Script";
      }
    }
  },
  comment: {
    type: String,
    label: "Comment"
  },
  createdOn: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    }
  }

});


WebsiteSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    optional: true
  },
  description: {
    type: String,
    label: "Description",
    optional: true
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
  comments: {
    type: [commentSchema],
    optional: true,
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
      if (this.isInsert) {
      if (!!this.userId)
      {
        return this.userId;
      }
      else {
        return this.value;
      }
    }},
    autoform: {
      type: 'hidden'
    }
  },
  createdOn: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    },
    autoform: {
      type: 'hidden'
    }
  },
  updatedOn: {
    type: Date,
    label: "Updated At",
    optional: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    },
    autoform: {
      type: 'hidden'
    }
  }
});


Websites.attachSchema(WebsiteSchema);
Comments.attachSchema(commentSchema2);
Keywords.attachSchema(keywordSchema);
