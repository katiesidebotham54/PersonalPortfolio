import emoji from "react-easy-emoji";
import girlswhocode from "./assets/img/icons/common/GirlsWhoCodeLogo.png";
import climit from "./assets/img/icons/common/CliMitLogo.svg";
import paramount from "./assets/img/icons/common/ParamountLogo.svg";
import rutgers from './assets/img/icons/common/rutgers.webp'


export const greetings = {
	name: "Katie Sidebotham",
	title: "Hey friends, I'm Katie!",
	description:
	"An ambitious student at the Rutgers University Honors College passionate about the intersectionality of technology, sustainability, & human interaction. I have experience with a variety of programming language including Typescript / ReactJS / Java / Python. I am most interested in full stack development — take a look at the rest of my site!",
	resumeLink: "",
};

export const openSource = {
	githubUserName: "katiesidebotham54",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/katiesidebotham54/",
	github: "https://github.com/katiesidebotham54",
	linkedin: "https://www.linkedin.com/in/katie-sidebotham/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"STUDENT EAGER TO BECOME A FULL STACK PROGRAMMER. HERES WHAT I KNOW HOW TO DO SO FAR:",
	skills: [
		emoji(
			"🌟 Programming frontend services with popular, relevant frameworks like React JS and Typescript"
		),
		emoji(
			"🌟 Implementing product planning techniques for full stack development with services including Mockflow, Figma, and Agile "
		),
		emoji(
			"🌟 Integration of third party services such as Firebase, AWS, prisma for seamless communication and workflow"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "java",
			fontAwesomeClassname: "vscode-icons:file-type-java",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		}
	],
};

export const SkillBars = [
	{
		Stack: "ReactJs", //Insert stack or technology you have experience in
		progressPercentage: "85", //Insert relative proficiency in percentage
	},
	{
		Stack: "Typescript", //Insert stack or technology you have experience in
		progressPercentage: "85", //Insert relative proficiency in percentage
	},
	{
		Stack: "HTML",
		progressPercentage: "95",
	},
	{
		Stack:'Python',
		progressPercentage: "55",
	},
	{
		Stack: "CSS",
		progressPercentage: "80",
	},
	{
		Stack: "Java",
		progressPercentage: "90",
	},
	
	{
		Stack: "Brightscript",
		progressPercentage: "45",
	},
	{
		Stack: "C",
		progressPercentage: "45",
	}
];

export const educationInfo = [
	{
		schoolName: "Rutgers University New Brunswick Honors College",
		subHeader: "Double Majoring in Computer Science and Cognitive Science",
		duration: "September 2020 - Present (Expected May 2024)",
		desc: "Member of the Honors College, GPA: 3.64",
		descBullets: [
			"President of Students for Environmental Awareness",
			"President of Road to Silicon Valley",
			"Learning Assistant for Intro to Computer Science",
			"Relevant Coursework: Intro to Computer Science, Data Structures, Calculus II, Intro to Discrete Structures I & II, Linear Algebra, Software Methodology, Computer Architecture, Principles of Information Management and Databases, Intro to Artificial Intelligence, Computer Design and Algorithms"
		],
	}
];

export const experience = [
	{
		role: "Roku Developer, Software Engineer Intern",
		company: "Paramount+",
		companylogo: paramount,
		date: "June 2022-Nov. 2022",
		desc: "Worked on Roku Development team and Kids AVOD Web Team",
		descBullets: [
			"Helped with the Integration of new channel, My5, to Roku Platform",
			"Aided in the deployment of new search component on Nick Jr Web Platform",
			"Primary language used was Bright Script and Javascript"
		],
	},
	{
		role: "Learning Assistant",
		company: "Rutgers Univeristy",
		companylogo: rutgers,
		date: "Sept. 2021 – May 2023",
		desc: "Led weekly recitations for 3 sections of Introduction to Computer Science course, teaching the foundations of Java and computer science principles",
		descBullets: [
			"Taught curriculum to over 60 students weekly",
			"Aided in the review and debugging process of students' code",
		],
	},
	{
		role: "CTO, COO",
		company: "CliMit",
		companylogo: climit,
		date: "Sept. 2021 – Present",
		desc: "Rutgers-based startup composed of 35 undergrad students building a platform for mitigating the impacts of climate change",
		descBullets: [
			"Lead a team of 8 developers in building a product for analyzing areas & outputting the best possible solution for mitigating climate-induced disasters",
			"Integrate Machine Learning and GIS using Python & ArcGIS",
			"Participant in Clinton Global Initiative University"
		],
	},
	{
		role: "Teaching Assistant",
		company: "Girls Who Code",
		companylogo: girlswhocode,
		date: "June 2021 – August 2021",
		desc: "Taught 60 high school students over a 6-week period for Summer Immersion Program introducing foundational skills of HTML, CSS, & Javascript",
		descBullets: [
			"Led classroom activities & team-building exercises to promote sisterhood and cultivate a supportive learning environment",
			"Aided in the development of projects including a personal portfolio, a Buzzfeed-inspired quiz, & a website bringing awareness to a relevant social issue",
		],
	}
];

export const projects = [
	{
		name: "CliMit",
		duration: "September 2021- Present",
		desc: "Online platform for visualizing climate solutions for mitigating the impact of natural disasters",
		link: "https://www.climit.co/",
	},
	{
		name: "Rutgers Cafe Simulator",
		duration: "April 2022",
		desc: "Online platform made using Java and Android Studio which simulates a cafe for users to order coffee and donuts and visualize/edit their orders.",
	
	},
	{
		name: "The Maze Solver",
		duration: "April 2023",
		desc: "Designed and implemented an A* search algorithm to trace the shortest path in 50 101x101 mazes using Python and path visualization integration in MATLAB",
		link: "https://github.com/katiesidebotham54/mazePathFinder"
	},
	{
		name: "Machine Learning Rent Projector",
		duration: "Oct 2021",
		desc: "Machine-learning algorithm developed in C that estimates the house prices based on historical data and additional attributes & manages data using matrices",
		link: "https://github.com/katiesidebotham54/One-Shot-Learning"
	},
	{
		name: "Collab Learning",
		duration: "September 2020-Present",
		desc: "Online platform that gamifies the learning process using active learning techniques and live interactions between students and teaching staff for effective and meaningful studying.",
		link: "https://collablearning.org",
	},
	{
		name: 'Osteofit LLC',
		duration: "September 2020- Present",
		desc: "Up and coming company that is transforming the orthopedic reamer industry. Osteofit is focused on creating single-use reamers that are sterile and sharp for each patient and recylcable after use. This aims to combat the flaws of the current procedure that relies on reusable reamers that dull after each use.",
		link: 'https://github.com/katiesidebotham54/osteofit'
	}
];

export const interests = [
	{
		name: "Environmentalism",
		desc: "Since high school, I've been focused on eliminating waste and the single-use ideology that has become the norm. Whether it's speaking events, lobbying, social media awareness, or pitching to businesses, I'm determined to change the way Rutgers and the surrounding community approach their practices and mindset.",
		icon: 'ni ni-world',
		link:"https://photos.app.goo.gl/o3yhcrXiwyP9s82N7"
	},
	{
		name: "Human Interaction",
		desc: "As someone interested in SWE, I am in no way looking to be stuck behind a desk every day. I love learning from people and analyzing human interaction to better promote communication and create systems that allow others to broaden their social networks.",
		icon: 'fa-solid fa-user'
	},
	{
		name: "Music",
		desc: "I've been playing piano since I was 4. Growing up, I've taken on ukulele and guitar and hope to pursue my love for music in the future. I plan to use my programming skills to digitize the music industry and broaden the limits of music for all!",
		icon: 'ni ni-note-03',
		link: "https://youtu.be/vM6aVmqnZZg"
	},
];

export const ambition = "I love being a part of a community that is focused on innovation and collaboration. That's why I want to work for start up companies that focus on intimate relationships and challenging the status quo. Beyond that, I want to work towards programming for social good-- whether that's broadening access to financial education, combating the effects of climate change, or opening doors to new music for individuals. I love staying curious, challenged, and ambitious about my goals and my career and cannot wait for what the future holds!";

export const leadership = [
	{
		name: "President",
		duration: "May 2022 - Present",
		company: "Students For Environmental Awareness",
		descBullets: [
			"Organize and manage club events and coalition building",
			"Maintain progress of club's 3 main campaigns focused on clean transpotation, administrative action, and food waste/insecurity",
		],
		icon: 'fa fa-hashtag icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "Learning Assistant",
		duration: "September 2021 - Present",
		company: "Rutgers Peer Learning Program",
		descBullets: [
			"Lead 3 recitations per week on topics involving Java, recursion, and OOP, assisting 80+ students in CS-related fields",
		],
		icon: 'fa fa-users icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "CTO and COO",
		duration: "November 2021 - Present",
		company: "CliMit",
		descBullets: [
			"Lead the development of company's MVP using Python and Esri's ArcGIS mapping software",
			"Participant of Clinton Global Initiative University (2022-Present)"
		],
		icon: 'fa fa-leaf icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "President",
		duration: "Sept. 2023 - Present",
		company: "Road to Silicon Valley",
		descBullets: [
			"Previously Recruitment Lead: Headed recruitment of 100+ applicants for RSVP’s 4th Cohort"
		],
		icon: 'fa fa-users icon-lg icon-shape shadow rounded-circle text-info'

	}

]

