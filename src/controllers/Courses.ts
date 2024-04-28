import CoursesService from '../services/Courses';

const coursesService = new CoursesService();

export default class CoursesController {
	createCourse = async (req: any, res: any) => {
		try {
			if (!req.body) {
				return res.status(400).send({ message: 'There is no value' });
			}
			return res.status(201).json(await coursesService.createCourse(req.body));
		} catch (err) {
			return res.status(400).send(err);
		}
	};
	getCourses = async (req: any, res: any) => {
		try {
			return res.status(200).json(await coursesService.getCourses());
		} catch (err) {
			return res.status(400).send(err);
		}
	};
	getCourseById = async (req: any, res: any) => {
		try {
			const id = parseInt(req.params.id);

			return res.status(200).json(await coursesService.getCourseById(id));
		} catch (err) {
			console.error(err);
		}
	};
	updateCourse = async (req: any, res: any) => {
		try {
			const id = parseInt(req.params.id);
			const postData = req.body;

			return res
				.status(200)
				.json(await coursesService.updateCourse(postData, id));
		} catch (err) {
			console.error(err);
		}
	};
	deleteCourse = async (req: any, res: any) => {
		try {
			const id = parseInt(req.params.id);

			return res.status(200).json(await coursesService.deleteCourse(id));
		} catch (err) {
			console.error(err);
		}
	};
}
