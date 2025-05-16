import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CHOCO_BARS } from "../constants";

type AnswerValue = number | null;

type AnswersState = {
  data: {
    [barId: string]: AnswerValue;
  };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
};

const initialState: AnswersState = {
  data: {},
  status: 'idle',
  error: null
};

export const submitAnswers = createAsyncThunk(
  'answers/submit',
  async (_, { getState}) => {
    const state = getState() as { answers: AnswersState };
    const answers = state.answers.data;

    const orderedAnswers = CHOCO_BARS.reduce((acc, bar) => {
      acc[bar.label] = answers[bar.id];
      return acc;
    }, {} as Record<string, AnswerValue>);
    //
    //
    return orderedAnswers;
  }
)

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ id: string; value: AnswerValue }>) => {
      state.data[action.payload.id] = action.payload.value;
    },
    removeAnswer: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload];
    },
    resetAnswers: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitAnswers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitAnswers.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitAnswers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Произошли ошибка';
      });
  },
});

export const { setAnswer, removeAnswer, resetAnswers } = answersSlice.actions;
export default answersSlice.reducer;