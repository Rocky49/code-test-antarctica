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
    res.send(list);
  } catch (ex) {
    res.status(500).send(ex);
  }
});

module.exports = router;
