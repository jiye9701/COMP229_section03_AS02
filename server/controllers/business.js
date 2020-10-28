let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Business = require('../models/business');

module.exports.DisplayBusinessList = (req, res, next) => {
  
    Business.Model.find( (err, data) => {
      if(err)
      {
        console.error(err);
        res.end()
      }
  
      res.render('index', { title: 'Business List', business: data });
    });
    
  }

module.exports.DisplayAddPage = (req, res, next)=> {
    res.render('index', { title: 'Add Business' });
}

module.exports.ProcessAddPage = (req, res, next)=> {

    // instantiate a new object of type Business
    let business = Business.Model({

        "name": req.body.name,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });

    Business.Model.create(business, (err, Business) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}

module.exports.DisplayEditPage = (req, res, next)=> {
    let id = req.params.id;

    // pass id to the db 
    Business.Model.findById(id, (err, BusinessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        // show the edit view
        res.render('index', { title: 'Edit Business', data: BusinessToEdit });
    });
}

module.exports.ProcessEditPage = (req, res, next)=> {
    let id = req.params.id;

     // instantiate a new object of type Business
     let updatedBusiness = Business.Model({
        "_id": id, 
        "name":req.body.name,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });

    Business.Model.updateOne({_id: id}, updatedBusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}

module.exports.ProcessDeletePage = (req, res, next)=> {
    let id = req.params.id;

    Business.Model.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        res.redirect('/business-list');
    });
}