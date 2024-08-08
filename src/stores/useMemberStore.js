import { defineStore } from "pinia";
import axios from "axios";

const backend = "/api/api/v1/member";
// 전역 저장소 생성
export const useMemberStore = defineStore("member", {
    state: () => ({ isLoggedIn: false }),
    persist: { storage: sessionStorage, },
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
        async logout() {
            let response = await axios.post(backend + '/logout');
            console.log(response);
            if (response.status === 200) {
                this.isLoggedIn = false;
                return true;
            } else {
                return false;
            }
        },
    },
});