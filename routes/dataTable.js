var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('datatable/index', { title: 'DataTable' });
});

router.get('/data', function(req, res, next) {
    // console.log(req.query.draw);
    var data = {
          "draw": req.query.draw,
          "recordsTotal": 100,
          "recordsFiltered": 100,
          "data": [
            {
              "first_name": req.query.draw + "Charde",
              "last_name": "Marshall",
              "position": "Regional Director",
              "office": "San Francisco",
              "start_date": "16th Oct 08",
              "salary": "$470,600"
            },
            {
              "first_name": "Colleen",
              "last_name": "Hurst",
              "position": "Javascript Developer",
              "office": "San Francisco",
              "start_date": "15th Sep 09",
              "salary": "$205,500"
            },
            {
              "first_name": "Dai",
              "last_name": "Rios",
              "position": "Personnel Lead",
              "office": "Edinburgh",
              "start_date": "26th Sep 12",
              "salary": "$217,500"
            },
            {
              "first_name": "Donna",
              "last_name": "Snider",
              "position": "Customer Support",
              "office": "New York",
              "start_date": "25th Jan 11",
              "salary": "$112,000"
            },
            {
              "first_name": "Doris",
              "last_name": "Wilder",
              "position": "Sales Assistant",
              "office": "Sidney",
              "start_date": "20th Sep 10",
              "salary": "$85,600"
            },
            {
              "first_name": "Finn",
              "last_name": "Camacho",
              "position": "Support Engineer",
              "office": "San Francisco",
              "start_date": "7th Jul 09",
              "salary": "$87,500"
            },
            {
              "first_name": "Fiona",
              "last_name": "Green",
              "position": "Chief Operating Officer (COO)",
              "office": "San Francisco",
              "start_date": "11th Mar 10",
              "salary": "$850,000"
            },
            {
              "first_name": "Garrett",
              "last_name": "Winters",
              "position": "Accountant",
              "office": "Tokyo",
              "start_date": "25th Jul 11",
              "salary": "$170,750"
            },
            {
              "first_name": "Gavin",
              "last_name": "Joyce",
              "position": "Developer",
              "office": "Edinburgh",
              "start_date": "22nd Dec 10",
              "salary": "$92,575"
            },
            {
              "first_name": "Gavin",
              "last_name": "Cortez",
              "position": "Team Leader",
              "office": "San Francisco",
              "start_date": "26th Oct 08",
              "salary": "$235,500"
            }
          ]
        }

    res.json(data)
});

module.exports = router;
