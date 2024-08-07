import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.withCredentials = true;

const backend = "http://localhost:8080/api/v1/popup-store";
// 전역 저장소 생성
export const usePopupStore = defineStore("popupstore", {
  state: () => ({ isLoggedIn: false }),
  persist: {
    storage: sessionStorage,
  },
  actions: {
    async register(formData) {
      try {
        let response = await axios.post(
          backend + "/register",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
          { withCredentials: true }
        );
        console.log(response);
      } catch (error) {
        console.error("Error", error);
        return false;
      }
    },
  },
});
