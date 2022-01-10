import './App.css';
import {useState} from "react";
import LessonPlanTemplate from "./Components/LessonPlanTemplate/template";
import LessonPlan from "./Components/LessonPlanTemplate/lessonPlan";

function App() {
  const [formValues, setFormValues] = useState();

function formduzenleyici(data) {
  console.log(data);
  setFormValues(data);
}
  return (
    <div className="App">
      <LessonPlanTemplate onChange={(e) => formduzenleyici(e)} />
      <LessonPlan form={formValues} />
    </div>
  );
}

export default App;