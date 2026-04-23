import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim() || score === "") {
      setIsShaking(true);
      window.setTimeout(() => setIsShaking(false), 400);
      return;
    }

    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <form
      className={`add-form${isShaking ? " shake" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label className="form-label" htmlFor="student-name">
          Student Name
        </label>
        <input
          id="student-name"
          className="form-input"
          type="text"
          placeholder="Enter full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="student-score">
          Score
        </label>
        <input
          id="student-score"
          className="form-input"
          type="number"
          min="0"
          max="100"
          placeholder="0 - 100"
          value={score}
          onChange={(event) => setScore(event.target.value)}
        />
      </div>

      <button className="btn-add" type="submit">
        Add Student
      </button>
    </form>
  );
}

export default AddStudentForm;
