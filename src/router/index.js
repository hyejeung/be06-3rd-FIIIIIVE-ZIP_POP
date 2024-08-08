import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import PopupRegisterPage from "@/pages/PopupRegisterPage.vue";
import CompanySignupComponent from "@/components/signup/CompanySignupComponent.vue";
import CustomerSignupComponent from "@/components/signup/CustomerSignupComponent.vue";
import CommunityPage from "@/pages/CommunityPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import PaymentPage from "@/pages/PaymentPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import ProductRegisterPage from "@/pages/ProductRegisterPage.vue";
import PostAllComponent from "@/components/community/post-all/PostAllComponent.vue";
import PostCreateComponent from "@/components/community/post-edit/PostCreateComponent.vue";
import CartComponent from "@/components/Cart/CartComponent.vue";
import CustomerMypage from "@/pages/CustomerMypage.vue";

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
    { path: '/cart', component: CartComponent } ,
    { path: "/wish_popup", component: CustomerMypage },
    { path: "/popup_register", component: PopupRegisterPage },
    { path: "/product_register", component: ProductRegisterPage },
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
            component: CommunityPage}  ],
});

export default router;
