import { createRouter, createWebHistory } from "vue-router";

import MainComponent from "@/components/main/MainComponent.vue";
import PopupRegisterComponent from "@/components/mypage/PopupRegisterComponent.vue";
import CompanySignupComponent from "@/components/signup/CompanySignupComponent.vue";
import CustomerSignupComponent from "@/components/signup/CustomerSignupComponent.vue";
import CommunityPage from "@/pages/CommunityPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PaymentPage from "@/pages/PaymentPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import WishPopupPage from "@/pages/WishPopupPage.vue";
import PostAllComponent from "@/components/community/post-all/PostAllComponent.vue";
import PostCreateComponent from "@/components/community/post-edit/PostCreateComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: MainComponent },
        { path: "/login", component: LoginPage },
        {   path: "/signup", 
            children: [
                { path: "customer", component: CustomerSignupComponent },
                { path: "company", component: CompanySignupComponent },
            ],
            component: SignupPage , 
        },
        { path: "/wish_popup", component: WishPopupPage },
        { path: "/popup_register", component: PopupRegisterComponent },
        { path: "/payment", component: PaymentPage },
        {   path: "/community", 
            children: [
                {path: "post-all", component: PostAllComponent },
                {path: "post-edit",
                    children: [
                        {path: "create", component: PostCreateComponent},
                        {path: "update/:postIdx", component: CustomerSignupComponent}
                    ],
                }
            ],
            component: CommunityPage}
    ],
});

export default router;