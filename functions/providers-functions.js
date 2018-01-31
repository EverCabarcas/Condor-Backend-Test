var providers_model = require('../models/providers');
var specialties_model = require('../models/specialties');

exports.createproviders = function (req, res, next) {
    var providers = new providers_model(req.body);
    specialties_model.findOne({name: req.body.specialty}, function (err, specialty) {
        if (err) {
            return res.status(500).send('problem whit name of Specialty ' + err);
        }
        if (!specialty) {
            return res.status(500).send('Specialty not found');
        }

        providers.specialty = specialty;
        providers.save(function (err, provider_save) {
            if (err) {
                return res.status(500).send('problem to save provider ' + err);
            }
            return res.status(200).send(provider_save);
        });

    });

};

exports.getproviders = function (req, res, next) {
    providers_model.find({}, function (err, providers) {
        if (err) {
            return res.send('problem to get providers ' + err);
        }
        if (!providers) {
            return res.send('Providers not found');
        }
        res.send(providers);
    });
};

exports.getprovider = function (req, res, next) {
    providers_model.findById(req.params.id, function (err, provider) {
        if (err) {
            return res.send('problem to get provider ' + err);
        }
        if (!provider) {
            return res.send('Provider not found');
        }
        res.send(provider);
    })
};

exports.updateproviders = function (req, res, next) {
    providers_model.findOneAndUpdate({_id: req.params.id}, req.body, function (err, provider) {
        if (err) {
            return res.send('problem to update provider ' + err);
        }
        if (!provider) {
            return res.send('Provider not found');
        }
        res.send(provider);
    });

};

exports.deleteproviders = function (req, res, next) {
    providers_model.findByIdAndRemove(req.params.id, function (err, provider) {
        if (err) {
            return res.status(500).send('problem to delete provider ' + err);
        }
        if (!provider) {
            return res.status(500).send('Provider not found');
        }
        res.status(200).send(provider)
    });

};


