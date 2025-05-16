import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswers } from "../store/answersSlice";
import { AppDispatch } from "../store";
import { selectAnswersStatus } from "../store/selectors";

export const SubmitButton: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector(selectAnswersStatus);

  const handleNext = () => {
    dispatch(submitAnswers())
      .unwrap()
      .then((result: Record<string, number | 'not_selected' | null>) => {
        alert("Ответы сохранены в redux:\n" + JSON.stringify(result, null, 2));
      })
      .catch((error: { message: string }) => {
        alert('Произошла ошибка при сохранении ответов:\n' + error.message);
      });
  };

  return (
    <button 
        className="next-btn" 
        onClick={handleNext} 
        disabled={status === 'loading'}
    >
        {status === 'loading' ? 'Отправка...' : 'Далее'}
    </button>
  );
};