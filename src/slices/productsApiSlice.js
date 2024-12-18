import { PRODUCTS_URL, UPLOAD_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query({
      query: ({ limit, skip, search }) => ({
        url: PRODUCTS_URL,
        params: { limit, skip, search },
         credentials: 'include',
      }),
      providesTags: ['Product']
    }),
    getTopProducts: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/top`,
         credentials: 'include'
      }),
      providesTags: ['Product']
    }),
    getProductDetails: builder.query({
      query: productId => ({
        url: `${PRODUCTS_URL}/${productId}`,
         credentials: 'include'
      }),
      providesTags: ['Product']
    }),
    createProduct: builder.mutation({
      query: productData => ({
        url: PRODUCTS_URL,
        method: 'POST',
        body: productData,
         credentials: 'include'
      }),
      invalidatesTags: ['Product']
    }),
    updateProduct: builder.mutation({
      query: ({ productId, ...productData }) => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'PUT',
        body: { ...productData },
         credentials: 'include'
      }),
      invalidatesTags: ['Product']
    }),
    deleteProduct: builder.mutation({
      query: productId => ({
        url: `${PRODUCTS_URL}/${productId}`,
        method: 'DELETE',
         credentials: 'include'
      }),
      invalidatesTags: ['Product']
    }),
    uploadProductImage: builder.mutation({
      query: data => ({
        url: UPLOAD_URL,
        method: 'POST',
        body: data,
         credentials: 'include'
      }),
      invalidatesTags: ['Product']
    }),
    createProductReview: builder.mutation({
      query: ({ productId, ...reviewData }) => ({
        url: `${PRODUCTS_URL}/reviews/${productId}`,
        method: 'POST',
         credentials: 'include',
        body: { ...reviewData }
      }),
      invalidatesTags: ['Product']
    })
  })
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUploadProductImageMutation,
  useUpdateProductMutation,
  useCreateProductReviewMutation,
  useGetTopProductsQuery
} = productApiSlice;
