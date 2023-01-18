import Navbar from "./components/Navbar.js";
import Content from "./components/content/Index.js";
import Totop from "./components/Totop.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section class="content">
        <Content />
      </section>
      <section class="Totop">
        <Totop />
      </section>
    </div>
  );
}

export default App;
