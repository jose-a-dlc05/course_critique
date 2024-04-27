import { PrismaClient } from '@prisma/client';

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
			return await prisma.colleges.findUnique({
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
