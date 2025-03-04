import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ExpenseChart from "./ExpenseChart";

const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <h2>Welcome to Expense Tracker</h2>
        <ExpenseChart />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Main = styled.main`
  padding: 20px;
`;

export default Home;
