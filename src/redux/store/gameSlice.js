import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGameDetails, fetchAsyncGames, fetchAsyncMyGameFromRawg} from "../utils/gameUtils";
import { fetchAsyncMyGamesFromSb } from "../utils/springbootUtils";

const initialState = {
    games: [],
    gamesStatus: STATUS.IDLE,
    gamesSingle: {},
    gamesSingleStatus: STATUS.IDLE,
    myGames: [],
    myGamesStatus: STATUS.IDLE,
    myGamesFromRawg: [],
    myGamesFromRawgStatus: STATUS.IDLE,
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncGames.pending, (state) => {
            state.gamesStatus = STATUS.LOADING
        })

        builder.addCase(fetchAsyncGames.fulfilled, (state, action) => {
            state.games = action.payload;
            state.gamesStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncGames.rejected, (state) => {
            state.gamesStatus = STATUS.FAILED
        })

        builder.addCase(fetchAsyncGameDetails.pending, (state) => {
            state.gamesSingleStatus = STATUS.LOADING
        })

        builder.addCase(fetchAsyncGameDetails.fulfilled, (state, action) => {
            state.gamesSingle = action.payload;
            state.gamesSingleStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncGameDetails.rejected, (state) => {
            state.gamesSingleStatus = STATUS.FAILED
        })

        builder.addCase(fetchAsyncMyGamesFromSb.pending, (state) => {
            console.log("Inside gameSlice fetchAsyncMyGamesFromSb pending");
            state.myGamesStatus = STATUS.LOADING
        })

        builder.addCase(fetchAsyncMyGamesFromSb.fulfilled, (state, action) => {
            console.log("Inside gameSlice fetchAsyncMyGamesFromSb fulfilled");
            state.myGames = action.payload;
            state.myGamesStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncMyGamesFromSb.rejected, (state) => {
            console.log("Inside gameSlice fetchAsyncMyGamesFromSb rejected");
            state.myGamesStatus = STATUS.FAILED
        })

        builder.addCase(fetchAsyncMyGameFromRawg.pending, (state) => {
            console.log("Inside gameSlice fetchAsyncMyGameFromRawg pending");
            state.myGamesFromRawgStatus = STATUS.LOADING
        })

        builder.addCase(fetchAsyncMyGameFromRawg.fulfilled, (state, action) => {
            console.log("Inside gameSlice fetchAsyncMyGameFromRawg fulfilled");
            state.myGamesFromRawg = action.payload;
            state.myGamesFromRawgStatus = STATUS.SUCCEEDED;
        })

        builder.addCase(fetchAsyncMyGameFromRawg.rejected, (state) => {
            console.log("Inside gameSlice fetchAsyncMyGameFromRawg rejected");
            state.myGamesFromRawgStatus = STATUS.FAILED
        })
    },
    reducers: {}
});

export const selectMyGames = (state) => state.game.myGames;
export const selectMyGameFromRwg = (state) => state.game.myGamesFromRawg;

export const selectAllGames = (state) => state.game.games.results;
export const selectAllGamesStatus = (state) => state.game.gamesStatus;
export const selectGamesNextPage = (state) => state.game.games.next;
export const selectGamesPrevPage = (state) => state.game.games.previous;
export const selectSingleGame = (state) => state.game.gamesSingle;
export const selectSingleGameStatus = (state) => state.game.gamesSingleStatus;

export default gameSlice.reducer;