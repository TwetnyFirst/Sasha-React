import {createAsyncThunk,createSlice, current } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/photos");
            if (!response.ok) {
                throw new Error("Что-то пошло не так")
            }
            const data = await response.json();
            return data;
        }

        catch (error) {
            return rejectWithValue((error as Error).message)
        }

    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState:{
        posts:[],
        favorites:[],
        error:null,
        status:null,
        activeTab:'all'
    },
    reducers:{


        setActiveTab(state:any, payload:any){
            state.activeTab = payload.payload;
            console.log(state.activeTab)
        },
        addToFavorites(state:any,payload:any){
            const currentElem = state.posts.find((item:any) => item.id === payload.payload);
            state.favorites.push(currentElem)
            console.log(current(state.favorites));
        },

    },
    extraReducers: (builder) => {
        return builder.addCase(fetchPosts.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        }),
        builder.addCase(fetchPosts.fulfilled, (state: any, {payload}: {payload: any}) => {
            state.status = "resolved";
            state.error = null;
            state.posts = payload;
        }),
        builder.addCase(fetchPosts.rejected, (state: any, {payload}: {payload: any}) => {
            state.status = "rejected";
            state.error = payload;
            state.posts = [];
        })
    }
});

const {actions, reducer} = postsSlice;

export default reducer;

export const {addToFavorites,setActiveTab} = actions;
