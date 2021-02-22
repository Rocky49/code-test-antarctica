create table users (login varchar(255), password varchar(255))

create table employee(empId bigint identity(1,1) primary key, fname varchar(255), lname varchar(255), emailId varchar(255), orgName varchar(255))

select empId, fname, lname, emailId, orgName from employee

select * from users

SELECT * FROM employee
            where fname like '%Rocky%'
            order by fname desc
            OFFSET 1 ROWS
            FETCH NEXT 100 ROWS ONLY