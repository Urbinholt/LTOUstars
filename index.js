let express = require('express');
let app = express();

app.set('view engine', 'ejs');

let users = [
    {id: 1, name: 'Darius Urbonas', organization: "Technologijų palaikymo skyrius (LOU_450)", stars: [0,0,0,0,0,0,0,0,0,0,0]},
    {id: 2, name: 'Andrius Mikuta', organization: "Technologijų palaikymo skyrius (LOU_450)", stars: [0,0,0,0,0,0,0,0,0,0,0]},
    {id: 3, name: 'Beatričė Paškevičiūtė', organization: "Komunikacijos skyrius (LOU_170)", stars: [1,0,1,1,0,0,0,0,0,0,0]}
];

app.get('/', function(req, res) {
    let sum = el => el.stars.reduce((a,b) => a + b);
    users.sort((a,b) => sum(b) - sum(a));
    res.render('pages/index', {
        users: users
    });
});

app.get('/star/:id/:month', function(req, res) {
    let user = users.find(x => x.id == req.params.id);

    console.log(user)

    if(user.stars[req.params.month]) {
        user.stars[req.params.month] = 0
    } else {
        user.stars[req.params.month] = 1
    }  

    res.redirect('/')
})

// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

app.listen(8080);
console.log('8080 is the magic port');