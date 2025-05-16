import { RootState } from './index';

export const selectAnswersState = (state: RootState) => state.answers;
export const selectAnswersData = (state: RootState) => state.answers.data;
export const selectAnswersStatus = (state: RootState) => state.answers.status;
export const selectAnswersError = (state: RootState) => state.answers.error;