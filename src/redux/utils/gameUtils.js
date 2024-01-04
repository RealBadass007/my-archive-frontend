import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { apiURL } from "../../constants";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncMyGameFromRawg = createAsyncThunk('mygames/rawg/fetch', async(gamesIdArr) => {
    // const { data } = await axios.get(`${apiURL.gamesURL}/${id}?${API_KEY}`);
    // console.log("fetchAsyncMyGameFromRawg gamesIdArr => ");
    // console.log(gamesIdArr);
    // console.log("fetchAsyncMyGameFromRawg gamesIdArr.payload => ");
    // console.log(gamesIdArr.payload);
    // console.log("fetchAsyncMyGameFromRawg gamesIdArr.payload[0] => ");
    // console.log(gamesIdArr.payload[0]);
    // console.log("fetchAsyncMyGameFromRawg gamesIdArr.payload[0].id => ");
    // console.log(gamesIdArr.payload[0].id);
    let dataArr = [];
    for (const id in gamesIdArr.payload) {
        // console.log("gamesIdArr id => ");
        // console.log(id);
        let gameId = gamesIdArr.payload[id].id;
        // console.log("gamesIdArr gameId => ");
        // console.log(gameId);
        const { data } = await axios.get(`${apiURL.gamesURL}/${gameId}?${API_KEY}`);
        dataArr.push(data);
    }

    console.log("fetchAsyncMyGameFromRawg dataArr => ");
    console.log(dataArr);
    return dataArr;
})

export const fetchAsyncGames = createAsyncThunk('games/fetch', async(page = 1) => {
    const { data } = await axios.get(`${apiURL.gamesURL}?${API_KEY}&page=${page}`);
    console.log("fetchAsyncGames => ");
    console.log(data);
    return data;
})

export const fetchAsyncGameDetails = createAsyncThunk('game/details/fetch', async(id) => {
    const { data } = await axios.get(`${apiURL.gamesURL}/${id}?${API_KEY}`);
    return data;
})