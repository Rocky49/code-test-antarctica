const sql = require("mssql");
const config = require('../config/config-dev');

async function searchAndSort(obj) {
    // search, sort, pageNum, rowSize
    try {
        let pageNum;
        let rowSize;
        let sortBy = obj.sortBy;
        let sortType;
        let search;
        let query;
        let empId;
        if (isNaN(+obj.search)) {
            empId = null; 
            search=obj.search 
        } else {
            empId = +obj.search;
        }

        if((sortBy && !obj.sortType) || (!sortBy && obj.sortType)) {
            return new Error('sortType and SortBy both must be present');
        } else {
            (obj.sortType === 1)? sortType='desc' : sortType='asc'
        }
    
        // if(obj.pageNum || obj.rowSize) {
            (obj.pageNum)? pageNum = +obj.pageNum : pageNum = 1;
            (obj.rowSize)? rowSize = +obj.rowSize : rowSize = 5;
        // }
    
        if(!obj.search && !obj.sortBy) {
            query = `SELECT * FROM employee
            order by empId
            OFFSET ${((+pageNum-1) * +rowSize)} ROWS
            FETCH NEXT ${+rowSize} ROWS ONLY`;
        }
    
        if(search && sortBy && sortType) {
            query = `
            SELECT * FROM employee
            where fname='${search}' OR lname='${search}' OR empid=${empId}
            order by ${sortBy} ${sortType}
            OFFSET ${((pageNum-1) * rowSize)} ROWS
            FETCH NEXT ${+rowSize} ROWS ONLY
            `;
        }else {
            if(search) {
                query = `
            SELECT * FROM employee
            where fname='${search}' OR lname='${search}' OR empid=${empId}
            order by empid
            OFFSET ${((pageNum-1) * rowSize)} ROWS
            FETCH NEXT ${+rowSize} ROWS ONLY
            `;
            }
            if(sortBy && sortType) {
                query = `
                SELECT * FROM employee
                order by ${sortBy} ${sortType}
                OFFSET ${((pageNum-1) * rowSize)} ROWS
                FETCH NEXT ${+rowSize} ROWS ONLY
                `
            }
        }
    
        console.log('========================================================================');
        console.log(query);
        console.log('========================================================================');
        let pool = await sql.connect(config);
        let result = await pool.request().query(query);
    
      if (result) {
        //   data = result.recordset;
          data = result;
        return data;
      }
    }
    catch(ex) {
        console.log('err', ex);
        return ex;
    }
}

async function save(obj) {
    try {
        let query = `Insert into dbo.employee (fname, lname, emailId, orgName) values ('${obj.fname}', '${obj.lname}', '${obj.emailId}', '${obj.orgName}')`;
        let userQuery = `Insert into dbo.users (login, password) values ('${obj.emailId}', '${obj.password}')`;
    
        let pool = await sql.connect(config);
        let result = await pool.request().query(query);
        
        if (result) {
            let result1 = await pool.request().query(userQuery);
            if(result1)
            // data = result.recordset;
            data = result;
            return data;
        }
    } catch(ex) {
        return ex;
    }
}

async function findOne(email) {
    try {
        let query = `select * from users where login = '${email}'`;
        let pool = await sql.connect(config);
        let result = await pool.request().query(query);
        if(result) {
            console.log(result);
            return result.recordset;
        }
    } catch(ex) {
        console.log(ex);
        return ex;
    }
}

module.exports.searchAndSort = searchAndSort;
module.exports.save = save;
module.exports.findOne = findOne;