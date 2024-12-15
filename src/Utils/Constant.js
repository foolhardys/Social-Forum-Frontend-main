import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import maths from "../assets/Illustrations/Maths.png";
import science from "../assets/Illustrations/Science.png";
import physics from "../assets/Illustrations/Physics.png";
import chemistry from "../assets/Illustrations/Chemistry.png";
import bolt from "../assets/Png/bolt.png";
import barchart from "../assets/Png/barchart.png";
import mission from "../assets/Png/mission.png";

export const NavLinks = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "About Us",
    url: "/aboutus",
  },
  {
    id: 3,
    text: "Our Courses",
    url: "/our-courses",
  },
  {
    id: 4,
    text: "Careers",
    url: "/careers",
  },
  {
    id: 5,
    text: "Contact Us",
    url: "/contact",
  },
];

export const SocialLinks = [
  {
    id: 1,
    name: "Facebook",
    url: "/",
    icon: FaFacebook,
  },
  {
    id: 2,
    name: "Instagram",
    url: "/",
    icon: FaInstagram,
  },
  {
    id: 3,
    name: "Youtube",
    url: "/",
    icon: FaYoutube,
  },
];

export const HowWeWorkList = [
  {
    id: 1,
    title: "Critical Thinking",
  },
  {
    id: 2,
    title: "Creativity",
  },
  {
    id: 3,
    title: "Curiosity",
  },
  {
    id: 4,
    title: "Resilience",
  },
  {
    id: 5,
    title: "Focus",
  },
  {
    id: 6,
    title: "Self Regulation",
  },
  {
    id: 7,
    title: "Memory",
  },
  {
    id: 8,
    title: "Comprehension & Communication",
  },
];

export const Questions = [
  {
    id: 1,
    question: "What is the application process?",
    answer:
      "Applicants should submit their application online via this website. Structured questions will enable you to exhibit your potential to work at Drona Learning Academy and the job position for which you have applied. You should also ensure that you have uploaded your CV, and filled in all required criteria’s while applying, to enable a thorough review of your application.",
    isOpen: false,
  },
  {
    id: 2,
    question: "How do I apply for a position?",
    answer:
      "First, review the job description you are interested in applying and confirm you meet all the requirements for the position. Then click the Apply Now button, create a profile and complete the application form, or log in with an existing profile account and update your information. Complete the required steps to submit your application.",
    isOpen: false,
  },
  {
    id: 3,
    question: " How do I search for job opportunities?",
    answer:
      "On the Career site homepage, click the current openings option. Select your search criteria and you will be presented with opportunities that match your criteria as you click on view jobs on the career opportunities search page. To view each position’s description, click on the position’s title in the search results. Note: If nothing is returned when you perform a search, it indicates that no current vacancies exist in your preferred geographic location and/or within your selected job area.",
    isOpen: false,
  },
  {
    id: 4,
    question: "What will happen after I complete the online application?",
    answer:
      "You will receive an automatic message from the system confirming the successful receipt of your application. Once submitted, your resume enters our candidate tracking system. Upon scrutiny of your filled in application and being identified as potential applicant for the job role, you will be contacted via telephone/e-mail to take part in the next phase of the recruitment process. You will participate in competency based job interview(s) and the number of interview(s) may vary by role.",
    isOpen: false,
  },
  {
    id: 5,
    question: "Is my personal data safe when I apply online?",
    answer:
      "Yes. Your personal data in your online application is protected in a secure database. Without your username and password, nobody can access your information. Your personal information will not be shared by us to anyone.",
    isOpen: false,
  },
  {
    id: 6,
    question:
      "Will I be considered for other positions when applying for a specific position?",
    answer:
      "Yes – your candidate profile will be stored in our database and will be available to our Staffing team to be considered for alternate job opportunities.",
    isOpen: false,
  },
  {
    id: 7,
    question: "How often can I update my profile?",
    answer:
      "Once you have submitted your profile on our site, unfortunately you will not be able to access your profile or the application form for any update. If there is a change in your skills or employment history, you may resubmit the application form once again(if the position/role is still open) or submit another application for any other role that might have published.",
    isOpen: false,
  },
  {
    id: 8,
    question: "Is Background verification mandatory in Drona Learning Academy?",
    answer:
      "Yes – Background check is mandatory and it is initiated immediately after the joining. As part of the background check process, you may be required to provide certain information such as employment references and proof, education documents, address proof, ID proof and provide other information and/or documentation necessary to enable us to comply to company policy.",
    isOpen: false,
  },
  {
    id: 9,
    question:
      "Does Drona Learning Academy hire only experienced people or freshers also?",
    answer:
      "It is vital for our continued success that we bring in teaching faculty who are experienced in Academic, Vocational, Competitive Exam preparation and career enhancement courses. Some of our courses required seasoned and experienced teaching professional who can start quickly and enhance the brand of Drona. There would be opportunity for freshers in specific domains who completes the spectrum of employment from both ends.",
    isOpen: false,
  },
  {
    id: 10,
    question: "Are jobs in Drona Full Time or Part-time?",
    answer:
      "Depending upon the job position some roles are Full-time and some are part-time.",
    isOpen: false,
  },
  {
    id: 11,
    question:
      "I would like to speak to someone about opportunities at Drona Learning Academy?",
    answer:
      "We hope you will find all the information you need about all the job opportunity on this website. We also encourage you to write to us helpus@dronalearning.com for all job inquiries.",
    isOpen: false,
  },
];

export const TeacherData = [
  {
    id: 1,
    role: "Maths Teacher(Grade 6 -12)",
    image: maths,
    responsibilities: [
      "Planning and delivering effective lessons that meet the curriculum(CBSE, ICSE, IGSCE ETC.) and are suitable for all pupils in grade 6 to 12.",
      "Ensuring all your lessons, units, and projects are clearly understood by your pupils.",
      "Staying current with any changes and developments to the national teaching curriculum.",
      "Working with your colleagues to coordinate lesson plans where other subjects can complement your Mathematics lessons.",
      "Being able to adapt your instructional materials and teaching methods to meet the classes varying learning abilities.",
      "Creating lesson plans that deliver a balance of instruction, demonstration, and work time, so that pupils are provided with the opportunity to observe, question, and investigate.",
      "Being creative and enthusiastic about using different teaching methods, including solo work, group work, whole-class work, demonstrations.",
      "Attending meetings, parent's evenings.",
      "Creating a classroom environment where pupils work together to achieve their learning goals.",
      "Helping and supporting individual pupils as required and encouraging them to research topics themselves.",
      "Keeping a register of pupils' attendance, set assignments and homework, mark pupils work, record completion, write progress reports and carry out continuous assessment.",
      "Taking responsibility for the individual's progress and development, feeding this information back to us.",
      "Meeting with parents, guardians or careers to discuss their child/children's progress in the subject and determine learning priorities and any needed resources.",
      "Must have a Post Graduation level education in the relevant subjects. ",
      "Teaching experience of 1-2 years is a plus for this role.",
    ],
  },
  {
    id: 2,
    role: "Science Teacher(Grade 6-10)",
    image: science,
    responsibilities: [
      "Planning and delivering effective lessons that meet the curriculum(CBSE, ICSE, IGSCE ETC.) and are suitable for all pupils in grade 6 to 12.",
      "Ensuring all your lessons, units, and projects are clearly understood by your pupils.",
      "Staying current with any changes and developments to the national teaching curriculum.",
      "Working with your colleagues to coordinate lesson plans where other subjects can complement your Mathematics lessons.",
      "Being able to adapt your instructional materials and teaching methods to meet the classes varying learning abilities.",
      "Creating lesson plans that deliver a balance of instruction, demonstration, and work time, so that pupils are provided with the opportunity to observe, question, and investigate.",
      "Being creative and enthusiastic about using different teaching methods, including solo work, group work, whole-class work, demonstrations.",
      "Attending meetings, parent&apos;s evenings.",
      "Creating a classroom environment where pupils work together to achieve their learning goals.",
      "Helping and supporting individual pupils as required and encouraging them to research topics themselves.",
      "Keeping a register of pupils&apos; attendance, set assignments and homework, mark pupils work, record completion, write progress reports and carry out continuous assessment.",
      "Taking responsibility for the individual&apos;s progress and development, feeding this information back to us.",
      "Meeting with parents, guardians or careers to discuss their child/children&apos;s progress in the subject and determine learning priorities and any needed resources.",
      "Must have a Post Graduation level education in the relevant subjects. ",
      "Teaching experience of 1-2 years is a plus for this role.",
    ],
  },
  {
    id: 3,
    role: "Physics Teacher(Grade 6-12)",
    image: physics,
    responsibilities: [
      "Planning and delivering effective lessons that meet the curriculum(CBSE, ICSE, IGSCE ETC.) and are suitable for all pupils in grade 6 to 12.",
      "Ensuring all your lessons, units, and projects are clearly understood by your pupils.",
      "Staying current with any changes and developments to the national teaching curriculum.",
      "Working with your colleagues to coordinate lesson plans where other subjects can complement your Mathematics lessons.",
      "Being able to adapt your instructional materials and teaching methods to meet the classes varying learning abilities.",
      "Creating lesson plans that deliver a balance of instruction, demonstration, and work time, so that pupils are provided with the opportunity to observe, question, and investigate.",
      "Being creative and enthusiastic about using different teaching methods, including solo work, group work, whole-class work, demonstrations.",
      "Attending meetings, parent&apos;s evenings.",
      "Creating a classroom environment where pupils work together to achieve their learning goals.",
      "Helping and supporting individual pupils as required and encouraging them to research topics themselves.",
      "Keeping a register of pupils&apos; attendance, set assignments and homework, mark pupils work, record completion, write progress reports and carry out continuous assessment.",
      "Taking responsibility for the individual&apos;s progress and development, feeding this information back to us.",
      "Meeting with parents, guardians or careers to discuss their child/children&apos;s progress in the subject and determine learning priorities and any needed resources.",
      "Must have a Post Graduation level education in the relevant subjects. ",
      "Teaching experience of 1-2 years is a plus for this role.",
    ],
  },
  {
    id: 4,
    role: "Chemistry Teacher(Grade 6-12)",
    image: chemistry,
    responsibilities: [
      "Planning and delivering effective lessons that meet the curriculum(CBSE, ICSE, IGSCE ETC.) and are suitable for all pupils in grade 6 to 12.",
      "Ensuring all your lessons, units, and projects are clearly understood by your pupils.",
      "Staying current with any changes and developments to the national teaching curriculum.",
      "Working with your colleagues to coordinate lesson plans where other subjects can complement your Mathematics lessons.",
      "Being able to adapt your instructional materials and teaching methods to meet the classes varying learning abilities.",
      "Creating lesson plans that deliver a balance of instruction, demonstration, and work time, so that pupils are provided with the opportunity to observe, question, and investigate.",
      "Being creative and enthusiastic about using different teaching methods, including solo work, group work, whole-class work, demonstrations.",
      "Attending meetings, parent&apos;s evenings.",
      "Creating a classroom environment where pupils work together to achieve their learning goals.",
      "Helping and supporting individual pupils as required and encouraging them to research topics themselves.",
      "Keeping a register of pupils&apos; attendance, set assignments and homework, mark pupils work, record completion, write progress reports and carry out continuous assessment.",
      "Taking responsibility for the individual&apos;s progress and development, feeding this information back to us.",
      "Meeting with parents, guardians or careers to discuss their child/children&apos;s progress in the subject and determine learning priorities and any needed resources.",
      "Must have a Post Graduation level education in the relevant subjects. ",
      "Teaching experience of 1-2 years is a plus for this role.",
    ],
  },
];

export const AboutArticleData = [
  {
    id: 1,
    title: "Our Mission",
    content:
      "To employ our unique teaching methodology that helps students deepen their knowledge and skills to appreciate, and find their love of learning.  also encourage them to apply their learnings in a way that will help them build their future.",
    img: mission,
  },
  {
    id: 2,
    title: "Our Vision",
    content:
      "To be recognized as a premier learning academy in bridging learning gaps in students and self-assess one’s potential for skill and knowledge thus ensuring trustworthiness in whatever we impart.",
    img: bolt,
  },
  {
    id: 3,
    title: "Our Goal",
    content:
      "Ensure that students enjoy the process of learning and promote self learning. Bringing perfection in their learning ability with special focus to deepen their knowledge and develop their skills.Practical application of knowledge to shape future. ",
    img: barchart,
  },
];

export const WhatWeDo = [
  {
    id: 1,
    title: "Focus on the need of every child",
  },
  {
    id: 2,
    title: "Live Interactive Customized Online Sessions",
  },
  {
    id: 3,
    title: "Identify and bridge Learning Gaps",
  },
  {
    id: 4,
    title: "Doubt clarification classes to facilitate self learning",
  },
  {
    id: 5,
    title: "Tests at Regular intervals to improve perfection",
  },
];

export const Filters = ["Teacher Resources", "Student Resources"];

export const QuizCategories = ["6", "7", "8", "9", "10", "11", "12"];
