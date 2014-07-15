var fs = require('fs');
var onlyScripts = require('./gulp/util/scriptFilter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
tasks.forEach(function(task) {
  require('./gulp/tasks/' + task);
});