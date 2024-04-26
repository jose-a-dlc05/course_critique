import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	await prisma.$transaction([
		prisma.users.create({
			data: {
				username: 'jkuna0',
				email: 'nchick0@cnet.com',
				password_hash:
					'$2a$04$90IiyNcGM7jclsKjxirhH.QTnf1ymWT2pBRBEJZB61DiJX.STO1/K',
			},
		}),
		prisma.users.create({
			data: {
				username: 'wbartul1',
				email: 'celliston1@yahoo.com',
				password_hash:
					'$2a$04$fwVERPWhA9RwwnYRzjliGubC77GhZDDtb9LtOPsAbiIgtHv4BqaSe',
			},
		}),
		prisma.users.create({
			data: {
				username: 'kharberer2',
				email: 'bcowling2@ca.gov',
				password_hash:
					'$2a$04$Jmcp.lK9idvBoJ5NCiKGBuMpRWxg1p/NisZdVMSDdVuRlG3xyoLyS',
			},
		}),
		prisma.users.create({
			data: {
				username: 'rgonthard3',
				email: 'nvaleri3@comcast.net',
				password_hash:
					'$2a$04$hYJb2AkJixin9nWF.qSCze44nDHZLT7xtDDNfiwWOepTvOwXJc.ai',
			},
		}),
		prisma.users.create({
			data: {
				username: 'croll4',
				email: 'thunnybun4@nih.gov',
				password_hash:
					'$2a$04$/InlyesiJA1uDpVw3rnRkurXQwqcSsnu6Z3TZC.M5hsatUm2UDg/.',
			},
		}),
		prisma.colleges.create({
			data: {
				name: 'Harvard University',
				location: 'MA',
				description: 'Private Ivy League university',
			},
		}),
		prisma.colleges.create({
			data: {
				name: 'University of California',
				location: 'CA',
				description: 'Top-ranked public university',
			},
		}),
		prisma.colleges.create({
			data: {
				name: 'Stanford University',
				location: 'CA',
				description: 'Top-ranked public university',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 1,
				title: 'Introduction to Computer Science',
				description:
					'An introduction to the intellectual enterprises of computer science and the art of programming.',
				instructor: 'David Malan',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 1,
				title: 'Introduction to Computer Science',
				description:
					'An introduction to the intellectual enterprises of computer science and the art of programming.',
				instructor: 'David Malan',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 1,
				title: 'Principles of Economics',
				description:
					'Foundational principles of microeconomics and macroeconomics.',
				instructor: 'Greg Mankiw',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 1,
				title: 'Philosophy and Ethics',
				description:
					'Exploration of classic philosophical questions and moral dilemmas.',
				instructor: 'Michael Sandel',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 1,
				title: 'Genetics and Genomics',
				description:
					'Understanding the principles of genetic inheritance and the function of genes in living organisms.',
				instructor: 'George Church',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 1,
				title: 'Artificial Intelligence',
				description:
					'Study of the fundamental principles and techniques of artificial intelligence.',
				instructor: 'Barbara Grosz',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 2,
				title: 'Environmental Science',
				description:
					'Comprehensive overview of environmental science with a focus on sustainability.',
				instructor: 'Jennifer Hughes',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 2,
				title: 'Molecular Biology',
				description: 'Study of the molecular basis of biological activity.',
				instructor: 'Elizabeth Watkins',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 2,
				title: 'Data Structures',
				description: 'Introduction to data structures and their applications.',
				instructor: 'Josh Hug',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 2,
				title: 'Political Science',
				description:
					'Study of government systems, political behavior, and political issues.',
				instructor: 'Robert Powell',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 2,
				title: 'Psychology',
				description: 'Introduction to theories and concepts in psychology.',
				instructor: 'Alison Gopnik',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 3,
				title: 'Machine Learning',
				description:
					'Courses on the theory and practical applications of machine learning.',
				instructor: 'Andrew Ng',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 3,
				title: 'Theoretical Physics',
				description:
					'Advanced principles of theoretical physics including quantum mechanics and relativity.',
				instructor: 'Leonard Susskind',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 3,
				title: 'Comparative Literature',
				description: 'Study of world literature and its cultural impact.',
				instructor: 'David Palumbo-Liu',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 3,
				title: 'Human-Computer Interaction',
				description: 'Design and evaluation of user interfaces.',
				instructor: 'Terry Winograd',
			},
		}),
		prisma.courses.create({
			data: {
				college_id: 3,
				title: 'Entrepreneurship',
				description:
					'From startup to scale: A course on building and growing your business.',
				instructor: 'Tom Byers',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 1,
				user_id: 1,
				rating: 5,
				comment:
					'Incredible introduction to computer science, very thorough and engaging.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 1,
				user_id: 2,
				rating: 4,
				comment: 'Great course but quite challenging for beginners.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 2,
				user_id: 3,
				rating: 5,
				comment: 'Comprehensive and insightful, highly recommend.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 2,
				user_id: 4,
				rating: 4,
				comment: 'Excellent material, though the assignments can be tough.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 3,
				user_id: 5,
				rating: 5,
				comment: 'Thought-provoking content and engaging discussions.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 3,
				user_id: 1,
				rating: 4,
				comment: 'Very good course on ethics, a bit philosophical at times.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 4,
				user_id: 2,
				rating: 3,
				comment:
					'Interesting material, but the course structure could be better.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 4,
				user_id: 3,
				rating: 5,
				comment:
					'Fascinating insights into genetics, well-taught and structured.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 5,
				user_id: 4,
				rating: 4,
				comment: 'AI course was detailed and informative.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 5,
				user_id: 5,
				rating: 5,
				comment:
					'Outstanding course, learned a lot about AI and its applications.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 6,
				user_id: 1,
				rating: 4,
				comment: 'Very good overview of environmental issues and solutions.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 6,
				user_id: 2,
				rating: 5,
				comment: 'Amazing course, the professor was very knowledgeable.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 7,
				user_id: 3,
				rating: 3,
				comment: 'Solid content, but could be more engaging.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 7,
				user_id: 4,
				rating: 4,
				comment: 'Great for anyone interested in biology.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 8,
				user_id: 5,
				rating: 5,
				comment: 'Excellent structure and very informative.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 8,
				user_id: 1,
				rating: 4,
				comment: 'Learned a lot, but the course pace is fast.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 9,
				user_id: 2,
				rating: 3,
				comment: 'Good basic overview of political science.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 9,
				user_id: 3,
				rating: 4,
				comment: 'Interesting lectures and readings.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 10,
				user_id: 4,
				rating: 5,
				comment:
					'Comprehensive and challenging, great introduction to psychology.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 10,
				user_id: 5,
				rating: 4,
				comment: 'Informative but requires a lot of reading.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 11,
				user_id: 1,
				rating: 5,
				comment: 'Best course on machine learning, very practical.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 11,
				user_id: 2,
				rating: 5,
				comment: 'Excellent course, Andrew Ng is a fantastic instructor.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 12,
				user_id: 3,
				rating: 4,
				comment: 'Challenging but extremely rewarding.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 12,
				user_id: 4,
				rating: 4,
				comment: 'Great content, but very heavy on math.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 13,
				user_id: 5,
				rating: 3,
				comment: 'Good course but very theoretical, less practical than hoped.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 13,
				user_id: 1,
				rating: 4,
				comment: 'Very insightful, broadens literary perspectives.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 14,
				user_id: 2,
				rating: 4,
				comment: 'Useful and interactive, great HCI techniques taught.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 14,
				user_id: 3,
				rating: 5,
				comment: 'Excellent learning experience, highly recommend.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 15,
				user_id: 4,
				rating: 5,
				comment:
					'Inspiring course, very practical tips on starting a business.',
			},
		}),
		prisma.reviews.create({
			data: {
				course_id: 15,
				user_id: 5,
				rating: 4,
				comment: 'Great insights into entrepreneurship, but quite demanding.',
			},
		}),
	]);
}

main()
	.then(async () => {
		await prisma.$disconnect();
		console.log('DB seeded successfully');
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
