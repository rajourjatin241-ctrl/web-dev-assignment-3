import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Jatin", score: 75 }
  ]);


  const updateScore = (id, newScore) => {
    const clamped = Math.min(100, Math.max(0, Number(newScore)));
    setStudents(students.map(s =>
      s.id === id ? { ...s, score: clamped } : s
    ));
  };

  const addStudent = (name, score) => {
    setStudents(prev => [...prev, {
      id: Date.now(),
      name: name.trim(),
      score: Math.min(100, Math.max(0, Number(score))),
    }]);
  };

  const removeStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  const passing = students.filter(s => s.score >= 40).length;
  const avg = students.length
    ? Math.round(students.reduce((a, s) => a + s.score, 0) / students.length)
    : 0;

  return (
    <div className="app">
      <div className="container">
        <Header total={students.length} passing={passing} avg={avg} />
        <AddStudentForm addStudent={addStudent} />
        <StudentTable
          students={students}
          updateScore={updateScore}
          removeStudent={removeStudent}
        />
      </div>
    </div>
  );
}

export default App;
