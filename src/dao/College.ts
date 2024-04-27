import { PrismaClient } from '@prisma/client';
import { CollegeInt } from '../services/College';

const prisma = new PrismaClient();
export default class CollegeDAO {
	getColleges = async () => {
		try {
			return await prisma.colleges.findMany();
		} catch (err) {
			console.error(err);
			await prisma.$disconnect();
			process.exit(1);
		} finally {
			await prisma.$disconnect();
		}
	};

	getCollegeById = async (id: number) => {
		try {
			return await prisma.colleges.findUniqueOrThrow({
				where: { college_id: id },
				select: {
					name: true,
					location: true,
					description: true,
				},
			});
		} catch (err) {
			console.error(err);
			await prisma.$disconnect();
			process.exit(1);
		} finally {
			await prisma.$disconnect();
		}
	};

	addNewCollege = async (data: CollegeInt) => {
		let { name, location, description } = data;
		try {
			return await prisma.colleges.create({
				data: {
					name,
					location,
					description,
				},
			});
		} catch (err) {
			console.error(err);
			await prisma.$disconnect();
			process.exit(1);
		} finally {
			await prisma.$disconnect();
		}
	};

	updatedCollege = async (data: CollegeInt, id: number) => {
		try {
			let { name, location, description } = data;
			return await prisma.colleges.update({
				where: { college_id: id },
				data: { name, location, description },
			});
		} catch (err) {
			console.error(err);
			await prisma.$disconnect();
			process.exit(1);
		} finally {
			await prisma.$disconnect();
		}
	};

	deleteCollege = async (id: number) => {
		try {
			return await prisma.colleges.delete({
				where: { college_id: id },
			});
		} catch (err) {
			console.error(err);
			await prisma.$disconnect();
			process.exit(1);
		} finally {
			await prisma.$disconnect();
		}
	};
}
