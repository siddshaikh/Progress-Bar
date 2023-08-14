import { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState();
  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <div className="App">
      <span>Progress Bar</span>
      <ProgressBar
        value={value}
        onComplete={() => {
          setSuccess(true);
        }}
      />
      <span>{success ? "Complete!" : "Loading..."}</span>
    </div>
  );
}
