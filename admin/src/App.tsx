import { useState } from "react";
import "./App.css";
import { CircularProgress } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CircularProgress
        value={30}
        size="120px"
        thickness="4px"
        color="orange.400"
        isIndeterminate
      />
    </div>
  );
}

export default App;
