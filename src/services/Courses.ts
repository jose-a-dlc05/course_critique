import CoursesDAO from '../dao/Courses';

export interface CourseInt {
	college_id: number;
	title: string;
	description: string;
	instructor: string;
}

const coursesDAO = new CoursesDAO();

export default class CoursesService {
	getCourses = async () => {
		try {
			return await coursesDAO.getCourses();
		} catch (err) {
			console.error(err);
		}
	};
	getCourseById = async (id: number) => {
		try {
			return await coursesDAO.getCourseById(id);
		} catch (err) {
			console.error(err);
		}
	};
	createCourse = async (data: CourseInt) => {
		try {
			return await coursesDAO.addNewCourse(data);
		} catch (err) {
			console.error(err);
		}
	};
	updateCourse = async (data: CourseInt, id: number) => {
		try {
			return await coursesDAO.updateCourse(data, id);
		} catch (err) {
			console.error(err);
		}
	};
	deleteCourse = async (id: number) => {
		try {
			return await coursesDAO.deleteCourse(id);
		} catch (err) {
			console.error(err);
		}
	};
}
