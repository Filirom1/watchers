var watch = require('watch');

watch.createMonitor('/home/romain/htmlizr/example', function (monitor) {

  monitor.on("created", function (f, stat) {
    // Handle file changes
    console.log('create ' + f);
  })
  monitor.on("changed", function (f, curr, prev) {
    // Handle new files
    console.log('change ' + f);
  })
  monitor.on("removed", function (f, stat) {
    console.log('remove ' + f);
  })
});
