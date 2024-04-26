export const createCollege = async (req: any, res: any) => {
	try {
		if (!req.body) {
			return res.status(400).send({ message: 'There is no value' });
		}
		const { name, location, description } = req.body;
		console.log(`Added the following college: ${name}`);
		return res.status(201).json({ name, location, description });
	} catch (err) {
		return res.status(400).send(err);
	}
};
export const getColleges = async (req: any, res: any) => {
	try {
		return res.status(200).send('Getting colleges from database');
	} catch (err) {
		console.error(err);
	}
};
export const getCollege = async (req: any, res: any) => {
	try {
		const id: string = req.params.id;

		return res.status(200).send(`Getting college with ${id}`);
	} catch (err) {
		console.error(err);
	}
};
export const updateCollege = async (req: any, res: any) => {
	try {
		const id: string = req.params.id;
		const postData = req.body;

		return res.status(200).send(`College with ID of ${id} updated`);
	} catch (err) {
		console.error(err);
	}
};
export const deleteCollege = async (req: any, res: any) => {
	try {
		const id: string = req.params.id;

		return res.status(200).send(`College with ID of ${id} deleted`);
	} catch (err) {
		console.error(err);
	}
};
