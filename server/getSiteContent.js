

Meteor.methods({
		requestWebsite:function(url){
			try {
				console.log("making the request to "+url);
				var result = HTTP.get(url, {followRedirects:true});
				console.log("Request to "+url+" returned successfully!");
				var cheerio = Meteor.npmRequire('cheerio');
				$ = cheerio.load(result.content);
				var answer = {};
				answer["title"] = $("title").text();
				console.log("Title: " + answer["title"]);
				answer["description"] = $('meta[name="description"]').prop('content');
				console.log("Description: " + answer["description"]);

			} catch (e) {
				console.error('Request returned error: ', e);
			}
			return answer;
		} // end requestWebsite
	});
