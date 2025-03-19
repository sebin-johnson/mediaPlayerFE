import { serverUrl } from "./serverUrl";
import { commonApi } from "./commonApi";

// api call for upload video
export const uploadVideo = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

// api call for get all videos
export const getAllVideos = async () => {
    return await commonApi('GET', `${serverUrl}/videos`, "")
}

// alpi call for delete a video
export const deleteVideo = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/videos/${id}`, {})
}

// api call for watch history
export const addToHistory = async (data) => {
    return await commonApi('POST', `${serverUrl}/history`, data)
}

export const getHistory = async () => {
    return await commonApi('GET', `${serverUrl}/history`, "")
}

export const deleteHistory = async (id) => {
    return await commonApi('DELETE', `${serverUrl}/history/${id}`, {})
}

// api call for category
export const addcategory = async (data) => {
    return await commonApi('POST', `${serverUrl}/categories`, data)
}

export const getAllCategory = async () => {
    return await commonApi('GET', `${serverUrl}/categories`, "")
}

export const deleteCategory = async (data) => {
    return await commonApi('DELETE', `${serverUrl}/categories/${data}`, {})
}

export const getVideoDetailsById = async (id) => {
    return await commonApi('GET', `${serverUrl}/videos/${id}`, "")
}

export const updateCategory = async (id, data) => {
    return await commonApi('PUT', `${serverUrl}/categories/${id}`, data)
}