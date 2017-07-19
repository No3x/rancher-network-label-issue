require('dns').lookup('iana.org', (err, address, family) => {
   if (err) {
     console.log("Not found");
  } else {
     console.log("Found");
  }
});