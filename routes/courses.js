const express = require('express');
const router = express.Router({ mergeParams: true });
const { getCourses, getCourse } = require('../controllers/courses');

// Routes
router.route('/').get(getCourses);

router.route('/:id').get(getCourse);

module.exports = router;
