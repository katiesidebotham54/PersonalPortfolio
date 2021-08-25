import emoji from "react-easy-emoji";

import collablearning from "./assets/img/icons/common/CollabLearningLogo.png";
import osteofit from "./assets/img/icons/common/OsteofitLogo.png";
import girlswhocode from "./assets/img/icons/common/GirlsWhoCodeLogo.png";

export const greetings = {
	name: "Katie Sidebotham",
	title: "Hey friends, I'm Katie!",
	description:
		"An ambitious student at the Rutgers University Honors College passionate about the intersectionality of technology, finance, and social good. I have experience building Web applications with Javascript / Reactjs / Nodejs / HTML / CSS. I also have experience building applications with Java which I currently study at university.",
	resumeLink: "../assets/resume.pdf",
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
		progressPercentage: "30",
	},
	{
		Stack: "CSS",
		progressPercentage: "80",
	},
	{
		Stack: "Java",
		progressPercentage: "75",
	},
	{
		Stack: "React Native",
		progressPercentage: "65",
	}
];

export const educationInfo = [
	{
		schoolName: "Rutgers University New Brunswick Honors College",
		subHeader: "Majoring in Computer Science, Minoring in Economics",
		duration: "September 2020 - Present (Expected May 2024)",
		desc: "Member of the Honors College.",
		descBullets: [
			"Learning Assistant for Honors Forum 2021-2022",
			"Relevant Coursework: Introduction in Computer Science, Data Structures, Calculus II, Writing for Business and Professions",
			"Extracurriculars: Students for Environmental Awareness"
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
		role: "Teaching Assistant",
		company: "Girls Who Code Summer Immersion Program",
		companylogo: girlswhocode,
		date: "June 2021 – August 2021",
		desc: "Taught 3 rounds of a 2-week program introducing high schoolers to foundational skills of HTML, CSS, & Javascript",
		descBullets: [
			"Led classroom activities and team-building exercises to promote sisterhood and cultivate a safe and supportive learning environment",
			"Aided in the development of projects including a personal portfolio, a Buzzfeed-inspired quiz, & a website bringing awareness to a relevant social issue",
		],
	},
	{
		role: "Lead Web Developer",
		company: "Osteofit LLC",
		companylogo: osteofit,
		date: "Sept. 2020 – Present",
		desc: "Worked alongside another developer to build a website for Osteofit, a company dedicated to building single-use, sustainable reamers for orthopaedic surgeons.",
		descBullets: [
			"Mainly worked in HTML, SCSS, Javascript, and Bootstrap ",
			"Designed logo for company using 3D Paint",
		],
	},
	{
		role: "Lead Front-End Developer",
		company: "Collab Learning",
		companylogo: collablearning,
		date: "Sept. 2020 – Present",
		desc: "An online platform combating the intimidation and stress of building relationships in large classes; uses a matchmaking system and active learning techniques to improve students' grades & overall wellbeing.",
		descBullets: [
			"Led workshops teaching members foundational skills of React Hooks, CSS, and HTML",
			"Utilized Mockflow and Figma to design UI/UX of website",
			"Developed landing page and MVP using React, React-Bootsrap, HTML, SCSS, Axios",
		],

	},
];

export const projects = [
	{
		name: "Elevate",
		duration: "May 2021-Present",
		desc: "An app made using React Native, Elevate aims to personalize and guide users on their fitness track. Using a body diagram, users choose the specific region, learn about that region, and are presented with a variety of exercises and workout routines catered towards them. Users also have the ability to design their own playlists and track their progress!",
		github: "https://github.com/Body-App/BodyApp",
	},
	{
		name: "Too Good To Go Campaign",
		duration: "August 2021- Present",
		desc: "Initative focused on persuading companies in New Brunswick to join the app, Too Good to Go. The app lets involved businesses sell their leftover food to customers at discounted rates. This diminished food waste and provides feasible meal options for students on campus.",
		link:"",
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
		name: "Finance",
		desc: "I'm interested in the interectionality of technology and finance and creating ways for youth to receive comprehensive and useful financial education to better prepare them for the future. I'm also interested in investment banking and create efficient and secure ways for transactions to advance the economy",
		icon: 'fa fa-money'
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
		duration: "September 2019 - June 2020",
		company: "Future Business Leaders of America",
		descBullets: [
			"Increased membership by 30% by introducing relevant speakers and presentations",
			"Led workshops on resume building and mastering interviews",
			"Prepared students for regional and national tournaments"
		],
		icon: 'ni ni-briefcase-24 icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "Speaker at CCL Regional Conference",
		duration: "March 2019",
		company: "Citizens Climate Lobby",
		descBullets: [
			"Chosen to speak on behalf of New Jersey Students Climate Advocates",
			"Discussed the importance and relevance of implementing a state carbon fee in NJ",
		],
		icon: 'fa fa-leaf icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "Social Media Manager",
		duration: "May 2021 - Present",
		company: "Students For Environmental Awareness",
		descBullets: [
			"Create unique and interactive posts for club's instagram using Canva",
			"Maintain and design the club website using Wix",
		],
		icon: 'fa fa-hashtag icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "Learning Assistant",
		duration: "September 2021 - Present",
		company: "Honors College Forum",
		descBullets: [
			"Work alongside intructor to aid students through projects and assessments",
		],
		icon: 'fa fa-users icon-lg icon-shape shadow rounded-circle text-info'

	}

]

