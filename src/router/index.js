import { createRouter, createWebHistory } from "vue-router";

import MainComponent from "@/components/common/MainComponent.vue";
import LoginPage from "@/pages/LoginPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import WishPopupPage from "@/pages/WishPopupPage.vue";
import CompanySignupComponent from "@/components/signup/CompanySignupComponent.vue";
import PopupRegisterComponent from "@/components/mypage/PopupRegisterComponent.vue";
import PaymentPage from "@/pages/PaymentPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainComponent },
        { path: "/login", component: LoginPage },
        { path: "/signup", component: SignupPage },
        { path: "/wish_popup", component: WishPopupPage },
        { path: "/company_signup", component: CompanySignupComponent },
        { path: "/popup_register", component: PopupRegisterComponent },
        { path: "/payment", component: PaymentPage },
    ],
});

export default router;