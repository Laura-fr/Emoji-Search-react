import React, { useState } from "react";
import "./App.css";
import Emoji from "./components/Emoji";
import Emojilist from "./emojiList.json";

import Search from "./components/Search";

// 1) Usestate pour la search bar

function App() {
  const [search, setSearch] = useState("");

  const tab = [];

  for (let i = 0; i < Emojilist.length; i++)
    if (Emojilist[i].keywords.indexOf(search) !== -1) {
      if (tab.length >= 8) {
        break;
      } else {
        tab.push(
          <Emoji
            key={Emojilist[i].title}
            title={Emojilist[i].title}
            symbol={Emojilist[i].symbol}
          />
        );
      }
    }
  return (
    <div className="container">
      <Search search={search} setSearch={setSearch} />
      {tab}
      <footer>
        <p>
          Made with{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>{" "}
          at{" "}
          <a href="https://www.lereacteur.io/" target="_blank" rel="noreferrer">
            Le Reacteur
          </a>{" "}
          by{" "}
          <a
            href="https://github.com/Laura-fr"
            target="_blank"
            rel="noreferrer"
          >
            Laura
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
