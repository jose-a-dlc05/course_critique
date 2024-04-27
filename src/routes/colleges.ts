import express from 'express';
const router = express.Router();
import CollegeController from '../controllers/College';

const collegeController = new CollegeController();

router
	.route('/')
	.get(collegeController.getColleges)
	.post(collegeController.createCollege);

router
	.route('/:id')
	.get(collegeController.getCollege)
	.patch(collegeController.updateCollege)
	.delete(collegeController.deleteCollege);

export default router;
