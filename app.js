const dns = require('dns');

setInterval(function() {
    dns.lookup('iana.org', (err, address, family) => {
   if (err) {
     console.log("Not found");
  } else {
     console.log("Found");
  }
});
}, 3000);