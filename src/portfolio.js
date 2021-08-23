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
			"⚡ Develop interactive Frontend / User Interfaces for web applications using UI services like Material UI and Bootstrap"
		),
		emoji(
			"⚡ Implementing product planning techniques for front end development with services including Mockflow and Figma "
		),
		emoji(
			"⚡ Integration of third party services such as Firebase, specifically hosting and authentication"
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
		desc: "Ranked in first decile. Took courses about Software Engineering, Web Security, Operating Systems, ...",
		descBullets: [
			"Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
		],
	},
];

export const experience = [
	{
		role: "Teaching Assistant",
		company: "Girls Who Code",
		companylogo: girlswhocode,
		date: "June 2021 – August 2021",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
	},
	{
		role: "Lead Web Developer",
		company: "Osteofit",
		companylogo: osteofit,
		date: "Sept. 2020 – Present",
		desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		role: "Lead Front-End Developer",
		company: "Collab Learning",
		companylogo: collablearning,
		date: "Sept. – Present",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export const projects = [
	{
		name: "Elevate",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "Too Good To Go Campaign",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
	{
		name:"Dr. Aid",
		desc:"",
		github: "https://gitlab.com/disasterrelief/cooper-union-csesg-boilerplate",
		link: "https://devpost.com/software/dr-a"
	}
];

export const interests = [
	{
		name: "Environmentalism",
		desc: "Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
		image: girlswhocode,
		icon: 'ni ni-world'
	},
	{
		name: "Financial Education",
		desc: "Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
		image: girlswhocode,
		icon: 'ni ni-money'
	},
	{
		name: "Start Ups",
		desc: "Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit",
		image: girlswhocode,
		icon: 'ni ni-shop'
	},
];

export const ambition = "Lorem ipsum dolorfdg sit amet, consectetur adipiscing elitLorem ipsum dolorfdg sit amet, consectetur adipiscing elitLorem ipsum dolorfdg sit amet, consectetur adipiscing elit";

export const leadership = [
	{
		name: "President",
		duration: "September 2020 - Present (Expected May 2024)",
		company: "Future Business Leaders of America",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
		icon: 'ni ni-briefcase-24 icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "Speaker at CCL Regional Conference",
		duration: "March 2019",
		company: "Citizens Climate Lobby",
		descBullets: [
			"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
		icon: 'fa fa-leaf icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "Software Developer Lead",
		duration: "January 2021 - Septemeber 2021",
		company: "ENACTUS",
		descBullets: [
			"Increased membership by 30%",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
		icon: 'fa fa-laptop icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "Social Media Manager",
		duration: "May 2021 - Present",
		company: "Students For Environmental Awareness",
		descBullets: [
			"Increased membership by 30%",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
		icon: 'fa fa-hashtag icon-lg icon-shape shadow rounded-circle text-info'

	},
	{
		name: "Learning Assistant",
		duration: "September 2021 - Present",
		company: "Honors College Forum",
		descBullets: [
			"Increased membership by 30%",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		],
		icon: 'fa fa-users icon-lg icon-shape shadow rounded-circle text-info'

	}

]

