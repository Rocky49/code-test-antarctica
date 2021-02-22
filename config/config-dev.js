// db URL

/** For ProdDB */

const configDev = {
    authentication: {
        options: {
          userName: "Rocky", 
          password: "Rocky@12345"
        },
        type: "default"
      },
      server: "mssql-21004-0.cloudclusters.net", // connection
      port: 21004,
      database: "code_test",
      connectionTimeout: 600000,
      requestTimeout: 600000,
      options: {
        trustServerCertificate: true,
        encrypt: true
      }
}

/** For TestDB */

// const configDev = {
//   authentication: {
//       options: {
//         userName: "xanadu", 
//         password: "X@nadu@12345"
//       },
//       type: "default"
//     },
//     server: "testsqldbserverxanadu.database.windows.net", // connection
//     database: "testsqldb",
//     connectionTimeout: 30000,
//     requestTimeout: 300000,
//     options: {
//       trustServerCertificate: true,
//       encrypt: true
//     }
// }



module.exports = configDev;
