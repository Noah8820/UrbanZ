import { url } from "inspector";
import axios, { AxiosInstance } from "axios";
import defaultAxiosInstance from "../Components/Api";

const DataService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getData: async () => {
    const { data } = await api.get("products");
    return data;
  },
  getOneData: async (id: number) => {
    const response = await api.get(`products/${id}`);
    return response.data;
  },
  deleteData: async (id: number) => {
    const response = await api.delete(`products/${id}`);
    return response.data;
  },
  login: async (email: string, password: string) => {
    const data = await api.post("login", {
      email,
      password,
    });

    if (data && data.status === 200) {
      localStorage.setItem("accessToken", data["data"]["accessToken"]);
    }
  },
  postData: async (newData: {
    id: number;
    price?: number | null;
    name?: string | null;
    image?: string | undefined;
    number?: number | null;
  }
  ) => {
    const response = await api.post(`products`, newData);
    return response.data;
  }, 
  updateData: async (id: number, updateData: {
    id: number;
    price?: number | null;
    name?: string | null;
    image?: string | undefined;
    number?: number | null;
  }
  ) => {
    const response = await api.put(`products/${id}`, updateData);
    return response.data;
  },
});

export default DataService;
