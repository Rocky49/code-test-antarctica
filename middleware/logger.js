function log(req, res, next) {
    console.log('logging....' + req.path + ' request type: ' + req.method);
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*'); // for dev
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9094');
    // res.setHeader('Access-Control-Allow-Origin', 'http://103.143.9.195:9094');
    // res.setHeader('Access-Control-Allow-Origin', 'http://103.143.9.195:9094'); // for prod

    // if(req.path === '/api/file/cust-full') {
    //     res.setHeader(
    //         "Content-Type",
    //         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    //         );
    //     // res.setHeader('Content-Type', 'text/csv');
    //         res.setHeader(
    //         "Content-Disposition",
    //         "attachment; filename=" + `customer.xlsx`
    //         );
    // }
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

module.exports = log;