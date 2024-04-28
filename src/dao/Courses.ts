import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default class CoursesDAO {
	getCourses = async () => {
		try {
			return await prisma.courses.findMany({
				include: {
					colleges: true,
				},
			});
		} catch (err) {
			console.error(err);
		} finally {
			await prisma.$disconnect();
		}
	};
	getCourseById = async (id: number) => {
		try {
			return await prisma.courses.findUniqueOrThrow({
				where: { course_id: id },
				select: {
					title: true,
					description: true,
					instructor: true,
					colleges: {
						select: {
							name: true,
						},
					},
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
	addNewCourse = async (data: any) => {
		try {
			return await prisma.courses.create({
				data,
			});
		} catch (err) {
			console.error(err);
			await prisma.$disconnect();
			process.exit(1);
		} finally {
			await prisma.$disconnect();
		}
	};
	updateCourse = async (data: any, id: number) => {
		try {
			return await prisma.courses.update({
				where: { course_id: id },
				data,
			});
		} catch (err) {
			console.error(err);
			await prisma.$disconnect();
			process.exit(1);
		} finally {
			await prisma.$disconnect();
		}
	};
	deleteCourse = async (id: number) => {
		try {
			return await prisma.courses.delete({
				where: { course_id: id },
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
