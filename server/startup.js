

// start up function that creates entries in the Websites databases.
Meteor.startup(function () {
  // code to run on server at startup
  if (!Websites.findOne()){
    console.log("No websites yet. Creating starter data.");

    Websites.insert({
      title:"Goldsmiths Computing Department",
      url:"http://www.gold.ac.uk/computing/",
      author:"Startup Script",
      description:"This is where this course was developed."

    });

     Websites.insert({
      title:"University of London",
      url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
      author:"Startup Script",
      description:"University of London International Programme."
    });

     Websites.insert({
      title:"Coursera",
      url:"http://www.coursera.org",
      author:"Startup Script",
      description:"Universal access to the world’s best education."
    });

    Websites.insert({
      title:"Google",
      url:"http://www.google.com",
      author:"Startup Script",
      description:"Popular search engine."
    });

    Websites.insert({
      title:"Goldsmiths Computing Department",
      url:"http://www.gold.ac.uk/computing/",
      author:"Startup Script",
      description:"This is where this course was developed."

    });

     Websites.insert({
      title:"University of London",
      url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
      author:"Startup Script",
      description:"University of London International Programme."
    });

     Websites.insert({
      title:"Coursera",
      url:"http://www.coursera.org",
      author:"Startup Script",
      description:"Universal access to the world’s best education."
    });

    Websites.insert({
      title:"Google",
      url:"http://www.google.com",
      author:"Startup Script",
      description:"Popular search engine."
    });
    Websites.insert({
      title:"Goldsmiths Computing Department",
      url:"http://www.gold.ac.uk/computing/",
      author:"Startup Script",
      description:"This is where this course was developed."

    });

     Websites.insert({
      title:"University of London",
      url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
      author:"Startup Script",
      description:"University of London International Programme."
    });

     Websites.insert({
      title:"Coursera",
      url:"http://www.coursera.org",
      author:"Startup Script",
      description:"Universal access to the world’s best education."
    });

    Websites.insert({
      title:"Google",
      url:"http://www.google.com",
      author:"Startup Script",
      description:"Popular search engine."
    });
    Websites.insert({
      title:"Goldsmiths Computing Department",
      url:"http://www.gold.ac.uk/computing/",
      author:"Startup Script",
      description:"This is where this course was developed."

    });

     Websites.insert({
      title:"University of London",
      url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
      author:"Startup Script",
      description:"University of London International Programme."
    });

     Websites.insert({
      title:"Coursera",
      url:"http://www.coursera.org",
      author:"Startup Script",
      description:"Universal access to the world’s best education."
    });

    Websites.insert({
      title:"Google",
      url:"http://www.google.com",
      author:"Startup Script",
      description:"Popular search engine."
    });
    Websites.insert({
      title:"Goldsmiths Computing Department",
      url:"http://www.gold.ac.uk/computing/",
      author:"Startup Script",
      description:"This is where this course was developed."

    });

     Websites.insert({
      title:"University of London",
      url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
      author:"Startup Script",
      description:"University of London International Programme."
    });

     Websites.insert({
      title:"Coursera",
      url:"http://www.coursera.org",
      author:"Startup Script",
      description:"Universal access to the world’s best education."
    });

    Websites.insert({
      title:"Google",
      url:"http://www.google.com",
      author:"Startup Script",
      description:"Popular search engine."
    });
    Websites.insert({
      title:"Goldsmiths Computing Department",
      url:"http://www.gold.ac.uk/computing/",
      author:"Startup Script",
      description:"This is where this course was developed."

    });

     Websites.insert({
      title:"University of London",
      url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route",
      author:"Startup Script",
      description:"University of London International Programme."
    });

     Websites.insert({
      title:"Coursera",
      url:"http://www.coursera.org",
      author:"Startup Script",
      description:"Universal access to the world’s best education."
    });

    Websites.insert({
      title:"Google",
      url:"http://www.google.com",
      author:"Startup Script",
      description:"Popular search engine."
    });
  }
});
