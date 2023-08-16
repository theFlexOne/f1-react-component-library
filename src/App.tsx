import { useState } from "react";
import Button from "./components/Button";
import TextField from "./components/TextField";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="h-screen flex items-center justify-center">
      {/* <Carousel /> */}
      <TextField
        type="textarea"
        label="Email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className="bg-lime-500 hover:bg-lime-600">Signup!</Button>
    </div>
  );
}

export default App;
