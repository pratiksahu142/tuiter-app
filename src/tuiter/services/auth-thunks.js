import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
      const user = await authService.login(credentials);
      return user;
    }
);

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
      return await authService.logout();
    });

export const profileThunk = createAsyncThunk(
    "auth/profile", async (user) => {
      return await authService.profile(user);
    });

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
      await authService.updateUser(user);
      return user;
    });

export const registerUserThunk = createAsyncThunk(
    "user/registerUser", async (user) => {
      await authService.registerUser(user);
      return user;
    });