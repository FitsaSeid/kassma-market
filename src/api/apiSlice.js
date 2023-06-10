import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from '../features/authSlice';
import { useSelector } from 'react-redux';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:4000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token)
            headers.set('authorization', `Bearer ${token}`);
        return headers
    }
})

const baseQueryWithRefreshToken = async (arg, api, extraOptions) => {
    let result = await baseQuery(arg, api, extraOptions);
    console.log(result?.error?.data)
    if (result?.error != undefined) {
        const newToken = await baseQuery('/refresh', api, extraOptions)
        console.log(newToken)
        if (newToken?.data) {
            const user = useSelector(state => state.auth.user)
            api.dispatch(setCredentials(user, newToken));
            result = baseQuery(arg, api, extraOptions);
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

const apiSlice = createApi({
    reducerPath: "loginAPI",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: builder => ({})
})

export default apiSlice