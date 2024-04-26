import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// Prisma Queries
	const courses = await prisma.courses.findMany();
	console.log(courses);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
