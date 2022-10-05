import "./styles.css";
// We are using useState to check
import { useState } from "react";

// Where the list is stored
const movieList = {
  // List of Horror Movies
  Horror: [
    { name: "Conjuring", rating: "4/5" },
    { name: "The Black Phone", rating: "4.3/5" },
    { name: "Wrong Turn", rating: "5/5" }
  ],

  // List of Thriller Movies
  Thriller: [
    { name: "Gemini Man", rating: "2/5" },
    { name: "Old", rating: "4.3/5" },
    { name: "Harry Potter and the Philosopher's Stone", rating: "4.9/5" },
    { name: "TENET", rating: "5/5" }
  ],

  // List of Action Comedy Movies
  "Action Comedy": [
    { name: "Who Am I", rating: "3.5/5" },
    { name: "Rush Hour", rating: "5/5" },
    { name: "The Hitman's Bodyguard", rating: "4/5" },
    { name: "The King's Man", rating: "5/5" }
  ],

  "Sci Fi": [
    { name: "Power Rangers", rating: "4/5" },
    { name: "The Adam Project", rating: "5/5" },
    { name: "Spider head", rating: "3/5" },
    { name: "Arrival", rating: "5/5" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Horror");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div className="titleBox">
        <h1 style={{ color: "white" }}> Movies Recommendation List</h1>
      </div>
      {/* Using React to style the description */}
      <h3 style={{padding: "1rem"}}>
        Here are some of my favourite movies list which I recommend everyone
        should watch.
      </h3>
      {/* Custom Style Buttons (START) */}
      {Object.keys(movieList).map((genre) => (
        <button onClick={() => genreClickHandler(genre)} className="btn">
          {genre}
        </button>
      ))}
      <hr />
      {/* Custom style Button (END) */}

      {/* Custom List Pills Style */}
      <div>
        <ul className="listPills">
          {movieList[selectedGenre].map((movies) => (
            <li key={movies.name} className="genreList">
              <div style={{ fontSize: "larger" }}>{movies.name}</div>
              <div style={{ fontSize: "small" }}>{movies.rating}</div>
            </li>
          ))}
        </ul>
      </div>

    <footer class="footer">
        <div class="footer-container">
            <h3 id="#page-end">
              <br />
              Made with 💖 by Harsh Vyapari <br />
              <br />
              Powered by Vercel
            </h3>
          <br />
        </div>
      </footer>
    </div>
  );
}
