import React from "react";
import axios from "axios";
import Personal from "./Personal.js";
import Skills from "./Skills.js";
import Education from "./Education.js";

export default function App() {
  const [firstname, setPost] = React.useState(null);
  const [lastname, setlast] = React.useState(null);

  React.useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => {
      setPost("Supakorn");
      setlast("Kingkhokkruad");
    });
  }, []);

  if (!firstname) return null;

  return (
    <div className="content">
      <Personal firstname={firstname} lastname={lastname} />
      <Skills />
      <Education />
    </div>
  );
}
