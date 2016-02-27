

Meteor.methods({
		getUsername:function(id){
			var post_user = Meteor.users.findOne({_id : id});
			return post_user.username;
		},
		insertNewSite:function(url,title,description){
			console.log("insertNewSite title and desc:" + title + description);
			var keywords = getKeywords(title + " " + description);
			var siteID = Websites.insert({url: url, title: title, description: description});
			console.log("siteID: "+siteID);
			keywords.forEach(function(element){
				Keywords.insert({keyword: element, siteID: siteID});
			});
		},
		requestWebsite:function(url){
			var data = {
		    title: '',
		    description: '',
		    error: 'GET failed on ' + url
		  };

			try {
				console.log("making the request to "+url);
				var result = HTTP.get(url, {followRedirects:true});
				console.log("Request to "+url+" returned successfully!");
				if (result) {
		      var titleMatch = [
		        /<title[^>]*>[\n\s]*(.*)[\n\s]*<\/title>/im
		      ];

		      data.title = matchAny(result.content, titleMatch);

		      var descriptionMatch = [
		        /<meta[^>]*\bname="description"[^>]*\bcontent="([^"]*)"[^>]*>/i,
		        /<meta[^>]*\bcontent="([^"]*)"[^>]*\bname="description"[^>]*>/i
		      ];

		      data.description = matchAny(result.content, descriptionMatch);

		      // Dump missing titles and descriptions to console to tweek regex

		      if (!data.title) {
		        console.log(url + ' no title found');
		        console.log('  '+result.content.match(/(.{1,20}\btitle\b.{1,20})/img));
		      }

		      if (!data.description) {
		        console.log(url + ' no description found');
		        result.content.match(/<meta[^>]*>/ig).forEach(function (meta) {
		          console.log('  ' + meta);
		        });
		      }
		    }

			} catch (e) {
				console.error('Request returned error: ', e);
			}
			console.log(data);
			return data;
		}
	});
