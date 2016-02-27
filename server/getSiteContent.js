

Meteor.methods({
		getUsername:function(id){
			var post_user = Meteor.users.findOne({_id : id});
			return post_user.username;
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
				if (!error) {
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

		  if (data.error)
		    console.log('getSiteData: ' + data.error);

			} catch (e) {
				console.error('Request returned error: ', e);
			}
			return data;
		},
		// Build list of keywords by splitting the text into words,
	  // sorting, removing duplicates, and filtering out stop words.

	  getKeywords: function (text) {
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

	    return text.toLowerCase().split(/[^a-z]+/g).sort().filter(function (word, index, array) {
	        return (array.indexOf(word) == index) &&	//Remove duplicates
	               (word.length > 1) &&								//Remove single character
	               (stop_words.indexOf(word) == -1);	//Not in stop word array
	      });
	  }
	});
