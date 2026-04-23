function Header({ total, passing, avg }) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-icon" aria-hidden="true">
          🎓
        </div>
        <div>
          <h1 className="header-title">
            Student <span>Scoreboard</span>
          </h1>
          <p className="header-sub">Track results, progress, and pass rate</p>
        </div>
      </div>

      <div className="stats-row" aria-label="Student statistics">
        <div className="stat">
          <span className="stat-val">{total}</span>
          <span className="stat-label">Students</span>
        </div>
        <div className="stat-divider" aria-hidden="true" />
        <div className="stat">
          <span className="stat-val">{passing}</span>
          <span className="stat-label">Passing</span>
        </div>
        <div className="stat-divider" aria-hidden="true" />
        <div className="stat">
          <span className="stat-val">{avg}</span>
          <span className="stat-label">Average</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
