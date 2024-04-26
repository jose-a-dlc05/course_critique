import express from 'express';
const router = express.Router();
import {
	createCollege,
	getCollege,
	getColleges,
	updateCollege,
	deleteCollege,
} from '../controllers/College';

router.route('/').get(getColleges).post(createCollege);

router.route('/:id').get(getCollege).patch(updateCollege).delete(deleteCollege);

export default router;
