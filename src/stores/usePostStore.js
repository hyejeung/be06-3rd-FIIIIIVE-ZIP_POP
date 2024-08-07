import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.withCredentials = true;
const backend = "http://localhost:8080/api/v1/post";
// 전역 저장소 생성
export const usePostStore = defineStore("post", {
    state: () => ({
        dataList: [],
     }),
    persist: { storage: sessionStorage, },
    actions: {
        async searchAll() {
            try {
                let response = await axios.get(backend + "/search-all?page=0&size=10",);
                if (response.status === 200) {
                    this.dataList = response.data.result;
                } else {
                    return false;
                }
            } catch (error) {
                console.error("Error", error);
                return false;
            }
        },
        async create(formData) {
            try {
                let response = await axios.post( 
                    backend + "/register", formData,
                    { headers: { "Content-Type": "multipart/form-data", }, },
                    { withCredentials: true }
                );
                console.log(response)
            } catch (error) {
                console.error("Error", error);
                return false;
            }
        }
    },
});