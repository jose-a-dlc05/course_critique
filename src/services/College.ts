import CollegeDAO from '../dao/College';

export interface CollegeInt {
	name: string;
	location: string;
	description: string;
}

const collegeDAO = new CollegeDAO();

export default class CollegeService {
	constructor() {}
	getColleges = async () => {
		try {
			return await collegeDAO.getColleges();
		} catch (err) {
			console.error(err);
		}
	};
	createCollege = async (data: CollegeInt) => {
		try {
			return await collegeDAO.addNewCollege(data);
		} catch (err) {
			console.error(err);
		}
	};
	getCollegeById = async (id: number) => {
		try {
			return await collegeDAO.getCollegeById(id);
		} catch (err) {
			console.error(err);
		}
	};
	updateCollege = async (data: CollegeInt, id: number) => {
		try {
			return await collegeDAO.updatedCollege(data, id);
		} catch (err) {
			console.error(err);
		}
	};
	deleteCollege = async (id: number) => {
		try {
			return await collegeDAO.deleteCollege(id);
		} catch (err) {
			console.error(err);
		}
	};
}
