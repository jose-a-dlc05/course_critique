import CollegeDatabaseObj from '../dao/College';

export interface CollegeInt {
	name: string;
	location: string;
	description: string;
}

const CollegeDAO = new CollegeDatabaseObj();

export default class CollegeService {
	getColleges = async () => {
		try {
			return await CollegeDAO.getColleges();
		} catch (err) {
			console.error(err);
		}
	};
	createCollege = async (data: CollegeInt) => {
		try {
			return await CollegeDAO.addNewCollege(data);
		} catch (err) {
			console.error(err);
		}
	};
	getCollegeById = async (id: number) => {
		try {
			return await CollegeDAO.getCollegeById(id);
		} catch (err) {
			console.error(err);
		}
	};
	updateCollege = async (data: CollegeInt, id: number) => {
		try {
			return await CollegeDAO.updatedCollege(data, id);
		} catch (err) {
			console.error(err);
		}
	};
	deleteCollege = async (id: number) => {
		try {
			return await CollegeDAO.deleteCollege(id);
		} catch (err) {
			console.error(err);
		}
	};
}
