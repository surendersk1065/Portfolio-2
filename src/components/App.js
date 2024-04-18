import About from "./About";
import Certificate from "./Certificate";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Project from "./Project";
import Skills from "./Skills";




function App() {

  const title = "MY PORTFOLIO"
  const project = [
    {
      id:1,
      title:"Food Zone App",
      tech:"React Js, Bootstrap 5, JavaScript",
      body:"Developed a functional food ordering application.Implemented features such as menu browsing and route functionalities.API integration to fetch data from custom JSON server enabling dynamic content usage.",
      link:"https://react-food-zone.netlify.app/"
    },
    {
      id:2,
      title : "Online Tour Website",
      tech : "HTML,CSS,JavaScript",
      body : "A Responsive Online Tour Booking Website that allows user to View toue Packages and an user friendly Website.",
      link:"https://surendersk1065.github.io/project3/"
    },
    {
      id:3,
      title : "React Todo App",
      tech : " html and Css",
      body : "Developed a dynamic To-Do application leveraging React.js, Bootstrap, and JavaScript to facilitate seamless task management. Employed CRUD operations (Create, Read, Update, Delete) to enable users to add, view, edit, and remove tasks effortlessly.",
      link: "https://react-task-app-todo.netlify.app/"
    },
    {
      id:4,
      title: "PC Purchase website",
      tech :"html,Css,JavaScript and Bootstrap",
      body : "Developed a responsive Pc purchase website using HTML, CSS, JavaScript and Bootstrap. The website allows user to browse various Pc Products, view details.",
      link:"https://surendersk1065.github.io/bootstrap-project/"
    }

  ]
  const skills = [
    {
      id:1,
      name :"HTML",
    },
    {
      id:2,
      name :"CSS",
    },
    {
      id:3,
      name :"JAVASCRIPT",
    },
    {
      id:4,
      name :"REACT JS",
    },
    {
      id:5,
      name :"BOOTSTRAP 5",
    },
    {
      id:6,
      name :"SCSS",
    },
    {
      id:7,
      name :"SQL",
    },
    {
      id:8,
      name :"JAVA",
    },
    {
      id:9,
      name :"FRONT-END DEVELOPMENT",
    },
    {
      id:10,
      name :"WEB DEVELOPMENT",
    },
    
  ]
  const education = [
    {
      id:1,
      name : "St Joseph's Institute of Technology",
      year: "2019-2023",
      cgpa :"8.08"
    }
  ]
  const non_tech = [
    {
      id:1,
      name : "Team Work"
    },
    {
      id:2,
      name : "Communication"
    },
    {
      id:3,
      name : "Problem Solving"
    },
    {
      id:4,
      name : "Time Management"
    }
  ]

  const certificate = [
    {
      id:1,
      title :"AWS Cloud Foundation",
      img:"./media/c1.png"
    },
    {
      id:2,
      title :"Cognizant Salesforce certificate",
      img:"./media/c2.png"
    },
    {
      id:3,
      title :"BEC Exam council of Europe",
      img:"./media/c3.png"
    },
    {
      id:4,
      title :"Value Added course in angular js",
      img:"./media/c4.png"
    },
    {
      id:5,
      title :"Android Application workshop using Flutter and Dart",
      img:"./media/c5.png"
    },
    {
      id:6,
      title :"Stigmata cloud Certificate",
      img:"./media/c6.png"
    },
  ]
  

  return (
    <div className="App">
      <Header 
        title = {title}
      />
      <About />
      <Skills 
        skills = {skills}
        education = {education}
        non_tech = {non_tech}
      />
      <Project 
        project={project}
      />
      <Certificate 
      certificate={certificate}/>
      <Contact />
      <Footer />
      
      
    </div>
  );
}

export default App;
