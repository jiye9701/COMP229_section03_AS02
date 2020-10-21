let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// create the User Model Instance
let userModel = require('../models/user');
let User = userModel.User; // alias

module.exports.DisplayHomePage = (req, res, next) => {

    console.log("Home Page Controller");

    res.render('index', { title: 'Home',
    displayName: req.user ? req.user.displayName : '' });
  }
  
module.exports.DisplayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products',
    displayName: req.user ? req.user.displayName : '' });
  }

module.exports.DisplayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services',
    displayName: req.user ? req.user.displayName : '' });
  }

module.exports.DisplayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About',
    displayName: req.user ? req.user.displayName : '' });
  }
  
module.exports.DisplayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact',
    displayName: req.user ? req.user.displayName : '' });
  }

  module.exports.DisplayLoginPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user)
    {
      res.render('auth/login', 
      {
        title: 'Login',
        messages: req.flash('loginMessage'),
        displayName: req.user ? req.user.displayName : ''
      });
    }
    return res.redirect('/');
  }

  module.exports.processLoginPage = (req, res, next) => {
    
  }

  module.exports.DisplayRegisterPage = (req, res, next) => {
    // check if the user is already logged in
    if(!req.user)
    {
      res.render('auth/register', 
      {
        title: 'Register',
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : ''
      });
    }
    return res.redirect('/');
  }

  module.exports.ProcessRegisterPage = (req, res, next) => {
    
  }

  module.exports.PerformLogout = (req, res, next) => {
    req.logout();
    res.redirect('/login');
  }
