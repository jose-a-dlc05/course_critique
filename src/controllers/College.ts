import College from '../services/College';
const CollegeService = new College();

export const createCollege = async (req: any, res: any) => {
	try {
		if (!req.body) {
			return res.status(400).send({ message: 'There is no value' });
		}

		return res.status(201).json(await CollegeService.createCollege(req.body));
	} catch (err) {
		return res.status(400).send(err);
	}
};
export const getColleges = async (req: any, res: any) => {
	try {
		return res.status(200).json(await CollegeService.getColleges());
	} catch (err) {
		console.error(err);
	}
};
export const getCollege = async (req: any, res: any) => {
	try {
		const id: string = req.params.id;

		return res.status(200).json(await CollegeService.getCollegeById(id));
	} catch (err) {
		console.error(err);
	}
};
export const updateCollege = async (req: any, res: any) => {
	try {
		const id: string = req.params.id;
		const postData = req.body;

		return res
			.status(200)
			.json(await CollegeService.updateCollege(postData, id));
	} catch (err) {
		console.error(err);
	}
};
export const deleteCollege = async (req: any, res: any) => {
	try {
		const id: string = req.params.id;

		return res.status(200).json(await CollegeService.deleteCollege(id));
	} catch (err) {
		console.error(err);
	}
};
