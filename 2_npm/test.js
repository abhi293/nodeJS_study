const figlet = require('figlet')
figlet("H e l l o  W o r l d ! !", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });