//Created by: Jiye Yu - Student Nr.:301116244 Created on Oct 09, 2020
//COMP229_assignment1_301116244 Jiye Yu

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.DisplayHomePage);

/* GET home page. */
router.get('/home', indexController.DisplayHomePage);

/* GET Projects page. */
router.get('/projects', indexController.DisplayProductsPage);

/* GET Services page. */
router.get('/services', indexController.DisplayServicesPage);

/* GET About page. */
router.get('/about', indexController.DisplayAboutPage);

/* GET Contact page. */
router.get('/contact', indexController.DisplayContactPage);

/* GET Display the Login page. */
router.get('/login', indexController.DisplayLoginPage);

/* GET Process the Login page. */
router.post('/login', indexController.ProcessLoginPage);

/* GET Display the Register page. */
router.get('/register', indexController.DisplayRegisterPage);

/* GET Process the Login page. */
router.post('/register', indexController.ProcessRegisterPage);

/* GET Perform Logout */
router.get('/logout', indexController.PerformLogout);


module.exports = router;
