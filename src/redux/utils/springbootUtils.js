import { createAsyncThunk } from "@reduxjs/toolkit";
import springAaxios from "../../api/springbootaxios";
import rawgAaxios from "../../api/axios";
import { apiURL } from "../../constants";
import { API_KEY } from "../../api/api_key";

export const fetchAsyncMyGamesFromSb = createAsyncThunk('mygames/fetch', async(page = 1) => {
    console.log("Inside fetchAsyncMyGamesFromSb");
    const { data } = await springAaxios.get(`games/mygames`);
    console.log("fetchAsyncMyGamesFromSb data => ");
    console.log(data);
    return data;

    // let gamesIdArr = data;

    // let dataArr = [];
    // for (const id in gamesIdArr) {
    //     console.log("id => ");
    //     console.log(id);
    //     console.log("data[id] => ");
    //     console.log(gamesIdArr[id].id);
    //     let gameId = gamesIdArr[id].id;
    //     console.log("gamesIdArr gameId => ");
    //     console.log(gameId);
    //     const { data2 } = await rawgAaxios.get(`${apiURL.gamesURL}/${gameId}?${API_KEY}`);
    //     console.log("data2 => ");
    //     console.log(data2);
    //     dataArr.push(data2);
    // }

    // console.log("fetchAsyncMyGamesFromSb rawg dataArr => ");
    // console.log(dataArr);
    // return dataArr;
})