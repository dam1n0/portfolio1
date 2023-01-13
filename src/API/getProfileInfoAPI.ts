import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const profileApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "https://konotop.site/profile.php"}),
    reducerPath: 'Profile',
    endpoints: (build) => ({
        getProfileInfo: build.query({
            query: (skill:boolean) => skill?`?hight-skill=1`:'',
        }),
    }),
});


export const {useGetProfileInfoQuery} = profileApi
