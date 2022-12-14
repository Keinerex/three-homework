import React, { useState } from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Books from "../../components/Books/Books";

function MarketPage({ catalog }) {
  const [active, setActive] = useState(catalog[0]);
  return (
    <main className={classnames(styles.main)}>
      <Navigation groups={catalog} setActive={setActive} active={active} />
      <Books group={active} />
    </main>
  );
}

export default MarketPage;
