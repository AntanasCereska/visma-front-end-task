import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [
      {
        id: "kOhZTPAVyApJGM7v09-7O",
        firstName: "Jonas",
        lastName: "Jonka",
        gender: "male",
        email: "jonasjonka@gmail.com",
        city: "Ukmerge",
        street: "Anyksciu g",
        houseNumber: "1",
        zipCode: "1234",
        latitude: 55.244687,
        longitude: 24.766536,
      },
      {
        id: "mPYw8uUpNdyOZCnpPCZ7H",
        firstName: "Tomas",
        lastName: "Tomka",
        gender: "male",
        email: "tomastomka@gmail.com",
        city: "Vilnius",
        street: "Gedimino pr",
        houseNumber: "3",
        zipCode: "1345",
        latitude: 54.700902,
        longitude: 25.251531,
      },
      {
        id: "j7M8ALjUTHF62lV6gZ6fU",
        firstName: "Simona",
        lastName: "Simonka",
        email: "simonasimonka@gmail.com",
        city: "Kaunas",
        street: "Ukmerges",
        houseNumber: "3",
        zipCode: "32425",
        latitude: 55.226883,
        longitude: 24.367299,
      },
      {
        id: "lDRzkpDh7fmOAwFnyWaD0",
        firstName: "Juste",
        lastName: "Justeviciene",
        gender: "female",
        email: "justeJ@gmail.com",
        city: "Vilnius",
        street: "Vilniaus g",
        houseNumber: "2",
        zipCode: "2342",
        latitude: 54.700902,
        longitude: 25.251531,
      },
    ];

export const addUserGeo = createAsyncThunk(
  "users/addUserGeo",
  async (payload) => {
    const responseData = await fetch(
      `http://api.positionstack.com/v1/forward?` +
        new URLSearchParams({
          access_key: "571fbc30210a2b1968f8c3a971a41559",
          query: `${payload.city}, ${payload.street}  ${payload.houseNumber}, ${payload.zipCode}`,
        })
    );
    const result = await responseData.json();
    const user = payload;
    user.latitude = result?.data[0].latitude;
    user.longitude = result?.data[0].longitude;
    return { user };
  }
);

export const editUserGeo = createAsyncThunk(
  "users/editUserGeo",
  async (payload) => {
    const responseData = await fetch(
      `http://api.positionstack.com/v1/forward?` +
        new URLSearchParams({
          access_key: "571fbc30210a2b1968f8c3a971a41559",
          query: `${payload.city}, ${payload.street}  ${payload.houseNumber}, ${payload.zipCode}`,
        })
    );
    const result = await responseData.json();
    const user = payload;
    user.latitude = result?.data[0].latitude;
    user.longitude = result?.data[0].longitude;
    return { user };
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      return state.map((user) =>
        user.id !== action.payload.id ? user : action.payload
      );
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id && user);
    },
  },

  extraReducers: {
    //  ADD USER
    [addUserGeo.fulfilled]: (state, action) => {
      state.push(action.payload.user);
      alert(
        `user ${action.payload.user.firstName} ${action.payload.user.firstName} registered successfully`
      );
    },
    [addUserGeo.pending]: (_state, _action) => {
      console.log("addUserGeo fetch is pending");
    },
    [addUserGeo.rejected]: (_state, action) => {
      alert(
        "Could not get geolocation for this user address. Please check for mistakes or try later"
      );
      console.error("ERROR MESSAGE", action.error.message);
    },
    //  EDIT USER
    [editUserGeo.fulfilled]: (state, action) => {
      alert("User edited successfully!");

      return state.map((x) =>
        x.id === action.payload.user.id ? { ...action.payload.user } : x
      );
    },
    [editUserGeo.pending]: (_state, _action) => {
      console.log("editUserGeo fetch is pending");
    },
    [editUserGeo.rejected]: (_state, action) => {
      alert(
        "Could not get geolocation for this user address. Please check for mistakes or try later"
      );
      console.error("ERROR MESSAGE", action.error.message);
    },
  },
});

export const selectUsers = (state) => state.users;

export const { addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
