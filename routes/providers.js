'use strict';

var express = require('express');
var router = express.Router();
var providers = require('../functions/providers-functions');
var providers_model = require('../models/providers');
var specialties_model = require('../models/specialties');


/* GET home page. */
router.get('/', function(req, res, next) {
   providers.getproviders(req, res, next);
});

router.get('/:d', function (req, res, next) {
    providers.getprovider(req, res, next);
});

router.post('/', function (req, res, next) {
   providers.createproviders(req,res,next);
});

router.put('/:id', function (req, res, next) {
    providers.updateproviders(req, res, next);
});

router.delete('/:id', function (req, res, next) {
    providers.deleteproviders(req, res, next);
});

module.exports = router;