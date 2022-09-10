import { baseURL, FETCH_ALL_USER } from "./actionType";
import axios from "axios";

export const loginUser = (payload, cb) =>
    async () => {
        try {
            const { data } = await axios.post(baseURL + "/users/login", payload);
            cb(null, data);
        } catch (error) {
            cb(error);
        }
    }

export const usersFetchSuccess = function (payload) {
    return {
        type: FETCH_ALL_USER,
        payload
    }
}

export const fetchUsers = (cb) =>
    async (dispatch) => {
        try {
            const { data } = await axios(baseURL + `/users`, {
                method: "GET",
                headers: {
                    access_token: localStorage.access_token
                }
            });
            dispatch(usersFetchSuccess(data));
            cb(null, data);
        } catch (error) {
            cb(error);
        }
    }

export const updateUsersPassword = (userId, payload, cb) =>
    async () => {
        try {
            const { data } = await axios(baseURL + `/users/admin/${+userId}`, {
                method: "PUT",
                data: payload,
                headers: {
                    access_token: localStorage.access_token
                }
            });

            cb(null, data);
        } catch (error) {
            cb(error);
        }
    }

export const deleteUser = (userId, cb) =>
    async () => {
        try {
            const { data } = await axios(baseURL + `/users/${+userId}`, {
                method: "DELETE",
                headers: {
                    access_token: localStorage.access_token
                }
            });

            cb(null, data);
        } catch (error) {
            cb(error);
        }
    }