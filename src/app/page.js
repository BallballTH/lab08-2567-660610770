import Header from "./components/header.jsx"
import Taskinput from "./components/taskinput.jsx"
import Tasks from "./components/task.jsx"
import Footer from "./components/footer.jsx"

export default function Home() {

  const tasks = [
    {id: 1, title: "Read a book", completed: true},
    {id: 2, title: "Take a shower", completed: false},
    {id: 3, title: "Sleep", completed: false},
  ];

  const fotte = [
    {year: "2023", fullname:"Buranin Bunyoprakan", Id:"660610770"}
  ];


  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* taskinput section */}
        <Taskinput />
        {/* task */}
        <Tasks {...tasks[0]}/>

        {/* task */}
        <Tasks {...tasks[1]}/>

        {/* task */}
        <Tasks {...tasks[2]}/>

      </div>

      {/* //footer section */}
      <Footer {...fotte[0]}/>
    </div>
  );
}

