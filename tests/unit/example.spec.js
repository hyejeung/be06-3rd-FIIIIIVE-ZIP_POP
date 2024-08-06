import { createPinia, setActive } from "pinia";
import { shallowMount } from '@vue/test-utils';
import LoginComponent from "@/components/login/LoginComponent.vue";

describe('일반회원 회원가입  페이지 테스트', () => {
  test("이메일 입력값 검증 테스트", async () => {
    const pinia = createPinia();
    setActivePinia(pinia);

    const wrapper = shallowMount(LoginComponent, {
      global: {
        plugins: [pinia],
      },
    });

    const loginButton = wrapper.find("button");
    expect(loginButton.exists()).toBe(true);

    await loginButton.trigger("click");

    const emailErrorMessage = wrapper.find("span");
    expect(emailErrorMessage.text()).toBe("email은 필수입니다.");
  });
});