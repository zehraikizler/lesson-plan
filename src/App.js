import './App.css';
import {useState} from "react";
import LessonPlanTemplate from "./Components/LessonPlanTemplate/template";
import LessonPlan from "./Components/LessonPlanTemplate/lessonPlan";

function App() {
  const [formValues, setFormValues] = useState();

  function setForm(e) {
    setFormValues(e);
  }

  return (
    <div className="App">
      <LessonPlanTemplate onChangeForm={(e) => setForm(e)} />
      <LessonPlan form={formValues} />
    </div>
  );
}

export default App;