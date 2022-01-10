import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import LessonPlanTemplate from "./Components/LessonPlanTemplate/template";
import LessonPlan from "./Components/LessonPlanTemplate/lessonPlan";

function App() {
  const [formValues, setFormValues] = useState("");

  function setForm(e) {
    setFormValues(e);
  }

  return (
    <div className="App">
        <Navbar />
        <div className="row m-4 px-2 py-4">
          <LessonPlanTemplate onChangeForm={e => setForm(e)} />
          <LessonPlan form={formValues} />
        </div>
    </div>
  );
}

export default App;