import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initialState={
    msg:"",
    user:"",
    token:"",
    loading:false,
    error:""
}
export const signInUser=createAsyncThunk('signinUser',async(body)=>{
    const res =await fetch('http://localhost:3000',
    {
    method:"post",
    headers:{'Content-Type':"application/json",
    },
body:JSON.stringify(body)
})
return await res.json();
})

const authSlice=createSlice({

    name:'user',
    initialState,
    reducers:{
addToken:(state,action)=>{
    state.token= localStorage.getItem("token")
},
addUser:(state,action)=>{
        state.user= localStorage.getItem("user") },
    logout:(state,action)=>{
        state.token=null;
        localStorage.clear();}
    },
    extraReducers:{
[signInUser.pending]:(state,action)=>
{state.loading=true},
[signInUser.fulfilled]:(state,{payload:{error,msg,token,user}})=>
{state.loading=false; 
    if (error) 
     {
    state.error=error}

    else {state.msg=msg;
        state.token=token;
        state.user=user;
        localStorage.setitem('msg',msg)
        localStorage.setitem('user',JSON.stringify(user))
        localStorage.setitem('token',token)
}
},
[signInUser.rejected]:(state,action)=>
{state.loading=true}
    }

})
export const{addToken,addUser,logout}=authSlice.actions;
export default authSlice.reducer


