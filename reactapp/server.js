const express = require('express');
const path=require('path');


const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.use("/", (req, res) => {
 //res.sendFile(__dirname + "/index.html");
   res.sendFile(__dirname + "/client/src/index.html");
});


if(process.env.NODE_ENV==='production') {
	app.use(express.static(path.join(__dirname, 'client/build')));

	app.get('*',function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port,'0.0.0.0', () => console.log(`Listening on port ${port}`));
