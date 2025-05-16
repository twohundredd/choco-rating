import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnswer, removeAnswer } from "../../store/answersSlice";
import { AppDispatch } from "../../store";
import { selectAnswersData } from "../../store/selectors";
import { RatingList } from "./RatingList";

export const RatingContainer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const answers = useSelector(selectAnswersData);

  const handleChange = (id: string, value: number | null) => {
    if(value === null) {
      dispatch(removeAnswer(id));
    } else {
      dispatch(setAnswer({ id, value }));
    }
  };

  return <RatingList answers={answers} onChange={handleChange} />;
};