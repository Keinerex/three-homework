import "./pages/MarketPage/styles.module.css";
// eslint-disable-next-line
import MarketPage from "./pages/MarketPage/MarketPage";
import classnames from "classnames";
import styles from "./app.module.css";
import { catalog } from "./constants/mock";
// eslint-disable-next-line
import BookPage from "./pages/BookPage/BookPage";
import Header from "./components/Header/Header";
import React from "react";

function App() {
  return (
    <div className={classnames(styles.app)}>
      <Header />

      <BookPage book={catalog[0].books[0]}></BookPage>
      {/*
            <MarketPage catalog={catalog}></MarketPage>
            */}
    </div>
  );
}

export default App;
