/**
 * SELECT FruitName,Price FROM SampleFruits
ORDER BY Price 
OFFSET (@PageNumber-1)*@RowsOfPage ROWS
FETCH NEXT @RowsOfPage ROWS ONLY
 */

const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const { searchAndSort } = require('../service/employee');

router.post("/", auth, async (req, res) => {
  try {
    let list;
    list = await searchAndSort(req.body);
    if(list.recordset.length > 0) {
        return res.send(list);
    } else {
        return res.status(404).send({ message: 'No records found'});
    }
  } catch (ex) {
      console.log('inside catch', ex);
    res.status(500).send({ error: 'something went wrong'});
  }
});

module.exports = router;
