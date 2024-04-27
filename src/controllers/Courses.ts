export default class CoursesController {
	createCourse = async (req: any, res: any) => {
		try {
			if (!req.body) {
				return res.status(400).send({ message: 'There is no value' });
			}
			return res.status(201).send('createCourse called');
		} catch (err) {
			return res.status(400).send(err);
		}
	};
	getCourses = async (req: any, res: any) => {
		try {
			return res.status(200).send('getCourses API Called');
		} catch (err) {
			return res.status(400).send(err);
		}
	};
	getCourse = async (req: any, res: any) => {
		try {
			const id = parseInt(req.params.id);

			return res.status(200).send(`getCourse API called with id of ${id}`);
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
				.send(
					`updateCollege called with id of ${id} and the following data: ${postData}`
				);
		} catch (err) {}
	};
	deleteCourse = async (req: any, res: any) => {
		try {
			const id = parseInt(req.params.id);

			return res.status(200).send(`deleteCollege called with id of ${id}`);
		} catch (err) {
			console.error(err);
		}
	};
}
