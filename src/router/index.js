import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import PopupRegisterPage from "@/pages/PopupRegisterPage.vue";
import CompanySignupComponent from "@/components/signup/CompanySignupComponent.vue";
import CustomerSignupComponent from "@/components/signup/CustomerSignupComponent.vue";
import CommunityPage from "@/pages/CommunityPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PaymentPage from "@/pages/PaymentPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import WishPopupPage from "@/pages/WishPopupPage.vue";
import ProductRegisterPage from "@/pages/ProductRegisterPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/login", component: LoginPage },
    {
      path: "/signup",
      children: [
        { path: "customer", component: CustomerSignupComponent },
        { path: "company", component: CompanySignupComponent },
      ],
      component: SignupPage,
    },
    { path: "/wish_popup", component: WishPopupPage },
    { path: "/popup_register", component: PopupRegisterPage },
    { path: "/product_register", component: ProductRegisterPage },
    { path: "/payment", component: PaymentPage },
    { path: "/community", component: CommunityPage },
  ],
});

export default router;
