import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="App" key="app-root">
      <section className="movie-list-section" key="movie-list-section">
        <div className="movie-list-wrapper" key="movie-list-wrapper">
          <MovieCard key="movie-card-component" />
        </div>
      </section>
    </div>
  );
}

export default App;
