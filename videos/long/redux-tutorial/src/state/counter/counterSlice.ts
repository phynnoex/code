import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

//define slice interface
interface CounterSlice {
    value: number,
    isPending: boolean
}

//define slice's initial state 
const initialState: CounterSlice = {
    value: 0,
    isPending: false
}

// define slice
const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(incrementAsync.pending, (state) => {
            state.isPending = true;
        })

            .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.isPending = false;
                state.value += action.payload
            })
    }

})

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => {
            setTimeout(resolve, 1000)
        });
        return amount;
    })

export const { increment, decrement, incrementByAmount } = CounterSlice.actions
export default CounterSlice.reducer;