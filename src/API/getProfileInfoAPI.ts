import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const profileApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost/profile.php"}),
    reducerPath: 'Profile',
    endpoints: (build) => ({
        getProfileInfo: build.query({
            query: (skill:boolean) => skill?`?hight-skill=1`:'',
        }),
    }),
});


export const {useGetProfileInfoQuery} = profileApi


//https://picic.live/profile.php?hight-skill=1