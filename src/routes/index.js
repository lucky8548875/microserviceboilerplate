import express from 'express';
import * as entity from './../api/v01'

const router = express.Router();

// Testing..
router.get('/test', entity.test)

module.exports = router;