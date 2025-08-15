function Hero() {
  function viewBooks() {
    console.log("clicked")
  }

  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Saman Hamasaied</h1>
        <p>Author Intro</p>
        <div className="actions">
          <button className="btn" onClick={viewBooks}>
            View books
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
