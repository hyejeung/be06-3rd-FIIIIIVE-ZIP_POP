import { defineStore } from "pinia";
import axios from "axios";

const backend = "http://localhost:8080/api/v1/member";
// 전역 저장소 생성
export const useMemberStore = defineStore("member", {
    state: () => ({ isLoggedIn: false }),
    persist: {
        storage: sessionStorage,
    },
    actions: {
        async login(member) {
            let response = await axios.post(backend + "/login", member);
            if (response.status === 200) {
                this.isLoggedIn = true;
                return true;
            } else {
                return false;
            }
        },
        logout() {
            this.isLoggedIn = false;
        },
    },
});