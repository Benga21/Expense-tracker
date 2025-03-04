import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Expense Tracker</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#4CAF50",
    padding: "10px 0",
    textAlign: "center",
    color: "white",
  },
  title: {
    margin: 0,
    fontSize: "24px",
  },
};

export default Header;
