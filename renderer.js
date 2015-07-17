var fs = require("fs");

function mergeValues(values, content) {
  //Cycle over the keys of values
  for(var key in values) {
    //Replace all {{key}} with value from values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  //return merged content
  return content;
}

function view(templateName, values, response) {
 //Read from the template files
 var fileContents = fs.readFileSync('./views/' + templateName + ".html", {encoding: "utf8"});
 //Insert values in to content
  fileContents = mergeValues(values, fileContents);
 //Write out the contents to the response
 response.write(fileContents);
}


module.exports.view = view;