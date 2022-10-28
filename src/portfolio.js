import emoji from "react-easy-emoji";

import collablearning from "./assets/img/icons/common/CollabLearningLogo.png";
import osteofit from "./assets/img/icons/common/OsteofitLogo.png";
import girlswhocode from "./assets/img/icons/common/GirlsWhoCodeLogo.png";
import climit from "./assets/img/icons/common/CliMitLogo.svg";
import paramount from "./assets/img/icons/common/ParamountLogo.svg";


export const greetings = {
	name: "Katie Sidebotham",
	title: "Hey friends, I'm Katie!",
	description:
	"An ambitious student at the Rutgers University Honors College passionate about the intersectionality of technology, sustainability, & human interaction. I have experience with a variety of programming language including ReactJS / Java / Python. I am most interested in full stack development & product management — take a look at the rest of my site!",
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
			"🌟 Develop interactive Frontend / User Interfaces for web applications using UI services like Material UI and Bootstrap"
		),
		emoji(
			"🌟 Implementing product planning techniques for front end development with services including Mockflow and Figma "
		),
		emoji(
			"🌟 Integration of third party services such as Firebase, specifically hosting and authentication"
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
		desc: "Member of the Honors College, GPA: 3.61",
		descBullets: [
			"Vice President of Students for Environmental Awareness",
			"Recruitment Chair for Road to Silicon Valley",
			"Learning Assistant for Intro to Computer Science",
			"Relevant Coursework: Intro to Computer Science, Data Structures, Calculus II, Intro to Discrete Structures I & II, Linear Algebra, Software Methodology, Computer Architecture",
		],
	},
	{
		schoolName: "Randolph High School",
		duration: "September 2016 - June 2020",
		desc: "Ranked in first decile. Weighted GPA: 4.5, Unweighted GPA: 3.8",
		descBullets: [
			"President of Future Business Leaders of America",
			"National Honors Society, Math National Honors Society, English National Honors Society",
			"Membership Director of Speech and Debate",
			"Board of Education Student Representative",
		],
	},
];

export const experience = [
	{
		role: "Software Engineer Intern",
		company: "Paramount+",
		companylogo: paramount,
		date: "June 2022-Present",
		desc: "Worked on Roku Development team and Kids AVOD Web Team",
		descBullets: [
			"Helped with the Integration of new channel, My5, to Roku Platform",
			"Aided in the deployment of new search component on Nick Jr Web Platform",
			"Primary language used was Bright Script"
		],
	},
	{
		role: "Lead Web Developer",
		company: "Osteofit LLC",
		companylogo: osteofit,
		date: "Sept. 2020 – March 2022",
		desc: "Worked alongside another developer to build a website for Osteofit, a company dedicated to building single-use, sustainable reamers for orthopaedic surgeons",
		descBullets: [
			"Mainly worked with HTML, SCSS, Javascript, and Bootstrap ",
			"Designed logo for company using 3D Paint",
		],
	},
	{
		role: "CTO, COO",
		company: "CliMit",
		companylogo: climit,
		date: "Sept. 2021 – Present",
		desc: "Rutgers-based startup composed of 45 undergrad students building a platform for mitigating the impacts of climate change",
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
		name: "Rutgers Cafe Simulator",
		duration: "April 2022",
		desc: "Online platform made using Java and Android Studio which simulates a cafe for users to order coffee and donuts and visualize/edit their orders.",
		github: "",
	},
	{
		name: "Machine Learning Rent Projector",
		duration: "Oct 2021",
		desc: "Machine-learning algorithm developed in C that estimates the house prices based on historical data and additional attributes & manages data using matrices",
		github: "https://github.com/katiesidebotham54/One-Shot-Learning",
	},
	{
		name: "Elevate",
		duration: "May 2021-Present",
		desc: "An app made using React Native, Elevate aims to personalize and guide users on their fitness track. Using a body diagram, users choose the specific region, learn about that region, and are presented with a variety of exercises and workout routines catered towards them. Users also have the ability to design their own playlists and track their progress!",
		github: "https://github.com/Body-App/BodyApp",
	},
	{
		name: "Collab Learning",
		duration: "September 2020-Present",
		desc: "Online platform that gamifies the learning process using active learning techniques and live interactions between students and teaching staff for effective and meaningful studying.",
		github: "https://github.com/Collaboration-Learning",
		link: "https://collablearning.org",
	},
	{
		name: 'Osteofit LLC',
		duration: "September 2020- Present",
		desc: "Up and coming company that is transforming the orthopedic reamer industry. Osteofit is focused on creating single-use reamers that are sterile and sharp for each patient and recylcable after use. This aims to combat the flaws of the current procedure that relies on reusable reamers that dull after each use.",
		github: 'https://github.com/katiesidebotham54/osteofit',
		link: 'https://osteofitllc.com/',
	},
	{
		name:"Dr. Aid",
		duration: "September 2018",
		desc:"Created during the Bytehacks Hackathon, Dr. Aid provides information for protecting and preparing for natural disasters. Included in the app is Google Maps for finding nearest shelter, surveys for determining an indivudal's prepareness for a disaster, and a text messaging system for helping those in crisis",
		github: "https://gitlab.com/disasterrelief/cooper-union-csesg-boilerplate",
		link: "https://devpost.com/software/dr-a"
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
		name: "Vice President",
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
		name: "Recruitment Lead",
		duration: "Sept. 2022 - Present",
		company: "Road to Silicon Valley",
		descBullets: [
			"Headed recruitment of 100+ applicants for RSVP’s 4th Cohort through digital marketing & selective interview process",
		],
		icon: 'fa fa-users icon-lg icon-shape shadow rounded-circle text-info'

	}

]

