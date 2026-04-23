function StudentTable({ students, updateScore, removeStudent }) {
  if (!students.length) {
    return (
      <div className="empty-state">
        <span className="empty-icon" aria-hidden="true">
          📋
        </span>
        <p>No students added yet.</p>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            const isPassing = student.score >= 40;
            const initials = student.name
              .split(" ")
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0]?.toUpperCase() ?? "")
              .join("");

            return (
              <tr className="table-row" key={student.id}>
                <td className="td-index">{index + 1}</td>
                <td>
                  <div className="name-cell">
                    <div className="avatar" aria-hidden="true">
                      {initials || "ST"}
                    </div>
                    <span className="student-name">{student.name}</span>
                  </div>
                </td>
                <td>
                  <input
                    className="score-input"
                    type="number"
                    min="0"
                    max="100"
                    value={student.score}
                    onChange={(event) =>
                      updateScore(student.id, event.target.value)
                    }
                  />
                </td>
                <td className="td-bar">
                  <div className="bar-bg">
                    <div
                      className={`bar-fill ${isPassing ? "bar-pass" : "bar-fail"}`}
                      style={{ width: `${student.score}%` }}
                    />
                  </div>
                </td>
                <td>
                  <span className={`badge ${isPassing ? "badge-pass" : "badge-fail"}`}>
                    {isPassing ? "Pass" : "Fail"}
                  </span>
                </td>
                <td>
                  <button
                    className="btn-del"
                    type="button"
                    onClick={() => removeStudent(student.id)}
                    aria-label={`Remove ${student.name}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
