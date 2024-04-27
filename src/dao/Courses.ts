import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default class CollegeDAO {
	getColleges = async () => {
		try {
			const colleges = await prisma.colleges.findMany();
			console.log('Colleges:', colleges);
		} catch (err) {
			console.error(err);
			await prisma.$disconnect();
			process.exit(1);
		} finally {
			await prisma.$disconnect();
		}
	};

	// getUsers = () =>
	// 	this.prisma.user.findMany({
	// 		select: {
	// 			id: true,
	// 			email: true,
	// 			age: true,
	// 		},
	// 	});

	// getUser = (id) =>
	// 	this.prisma.user.findUnique({
	// 		where: { id },
	// 		select: {
	// 			id: true,
	// 			email: true,
	// 			age: true,
	// 		},
	// 	});
}
// const prisma = new PrismaClient();
// export default class CollegeDAO {
// 	getColleges = async () => {
// 		const colleges = await prisma.colleges.findMany();

// 	}
// }

// getColleges()
// 	.then(async () => {
// 		await prisma.$disconnect();
// 	})
// 	.catch(async (e) => {
// 		console.error(e);
// 		await prisma.$disconnect();
// 		process.exit(1);
// 	});
