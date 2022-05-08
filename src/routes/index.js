const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
const axios = require('axios')
const router = express.Router();

router.use(cookieParser());

router.get('', async (req, res) => {res.render('index')})
router.get('/go', async (req, res) => {res.render('go')})
module.exports = router;