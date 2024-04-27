import CollegeDatabaseObj from '../dao/Courses';

interface CollegeInt {
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
			let { name, location, description } = data;
			console.log({ name, location, description });
		} catch (err) {
			console.error(err);
		}
	};
	getCollegeById = async (id: string) => {
		try {
			console.log(`Getting college with ${id}`);
		} catch (err) {
			console.error(err);
		}
	};
	updateCollege = async (data: CollegeInt, id: string) => {
		try {
			let { name, location, description } = data;

			console.log(`College with ID of ${id} updated`);
		} catch (err) {
			console.error(err);
		}
	};
	deleteCollege = async (id: string) => {
		try {
			console.log(`College with ID of ${id} deleted`);
		} catch (err) {
			console.error(err);
		}
	};
}
