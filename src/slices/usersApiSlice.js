import { USERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: data => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
         credentials: 'include',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
         credentials: 'include',
        method: 'POST'
      }),
      invalidatesTags: ['User']
    }),
    register: builder.mutation({
      query: data => ({
        url: `${USERS_URL}`,
        method: 'POST',
         credentials: 'include',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    newPasswordRequest: builder.mutation({
      query: data => ({
        url: `${USERS_URL}/reset-password/request`,
        method: 'POST',
         credentials: 'include',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    resetPassword: builder.mutation({
      query: ({ userId, token, password }) => ({
        url: `${USERS_URL}/reset-password/reset/${userId}/${token}`,
        method: 'POST',
         credentials: 'include',
        body: { password }
      }),
      invalidatesTags: ['User']
    }),
    profile: builder.mutation({
      query: data => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
         credentials: 'include',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    getUserProfile: builder.query({
      query: async () => ({
        url: `${USERS_URL}/profile` ,
         credentials: 'include'
      }),
      providesTags: ['User']
    }),
    getUsers: builder.query({
      query: () => ({
        url: USERS_URL ,
         credentials: 'include'
      }),
      providesTags: ['User']
    }),
    admins: builder.query({
      query: () => ({
        url: `${USERS_URL}/admins` ,
         credentials: 'include'
      }),
      providesTags: ['User']
    }),
    getUserById: builder.query({
      query: userId => ({
        url: `${USERS_URL}/${userId}` ,
         credentials: 'include'
      }),
      providesTags: ['User']
    }),
    deleteUser: builder.mutation({
      query: userId => ({
        url: `${USERS_URL}/${userId}`,
         credentials: 'include',
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    }),
    updateUser: builder.mutation({
      query: ({ userId, ...userData }) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'PUT',
         credentials: 'include',
        body: { ...userData }
      }),
      invalidatesTags: ['User']
    })
  })
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useNewPasswordRequestMutation,
  useResetPasswordMutation,
  useProfileMutation,
  useGetUserProfileQuery,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
  useAdminsQuery
} = usersApiSlice;
