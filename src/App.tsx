import React from "react";
import { Header } from "./components/Header";
import { RatingContainer } from "./components/Rating/RatingContainer";
import { SubmitButton } from "./components/SubmitButton";
import "./App.css";

export const App: React.FC = () => {

  return (
    <div className="container">
      <Header />
      <RatingContainer />
      <SubmitButton />
    </div>
  );
};