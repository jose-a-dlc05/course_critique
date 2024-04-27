import express from 'express';
const router = express.Router();
import CoursesController from '../controllers/Courses';

const courseController = new CoursesController();

router
	.route('/')
	.get(courseController.getCourses)
	.post(courseController.createCourse);

router
	.route('/:id')
	.get(courseController.getCourse)
	.patch(courseController.updateCourse)
	.delete(courseController.deleteCourse);

export default router;
