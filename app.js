const express = require('express');
const app = express();
const { execFile } = require('child_process');

// call this url, lock the screen
// TODO: implement some sort of security so people can't randomly lock the screen, lol
function lockScreen(req, res) {
	const child = execFile('./lockscreen', [], (err, stout, sterr) => {
		if(err) {
			throw err;
		} else {
			res.send('locked');
		}
	});
};

app.get('/lock', (req, res) => lockScreen(req, res));

app.listen(3000, ()=> console.log('Lockscreen app listening on port 3000!'));
