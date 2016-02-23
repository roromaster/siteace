if (Meteor.isClient) {
  Accounts.onLogin(function() {
    FlowRouter.go('websites');
  });

  Accounts.onLogout(function() {
    FlowRouter.go('home');
  });
}


AdminConfig = {
name: 'Website Aggregator',
adminEmails: ['roromaster@gmail.com','admin@admin.com'],
collections: {
  Websites: {}
  }
};

FlowRouter.triggers.enter([function(context, redirect) {
  if (!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);


FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) {
      FlowRouter.go('websites');
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/websites', {
  name: 'websites',
  action() {
    //GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {
      main: 'Websites'
    });
  }
});


FlowRouter.route('/websites/:id', {
  name: 'website-detail',
  action() {
    //GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {
      main: 'DetailedWebSite'
    });
  }
});
