import p1 from "/pic1.jpg";
import p2 from "/pic2.jpg";
import p3 from "/pic3.jpg";
import Select from "./components/Select";

const images = [p1, p2, p3];

// list of programming languages
const options = [
  { value: "javascript", label: "JavaScript" },
  { value: "python", label: "Python" },
  { value: "ruby", label: "Ruby" },
  { value: "c", label: "C" },
  { value: "c++", label: "C++" },
  { value: "c#", label: "C#" },
  { value: "java", label: "Java" },
];

function App() {
  return (
    <div className="h-screen bg-zinc-800 flex flex-col gap-4 items-center justify-center">
      <Select options={options} />
    </div>
  );
}

export default App;
