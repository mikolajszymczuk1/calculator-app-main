import { mount } from "@vue/test-utils";
import CalculatorScreen from "@/components/CalculatorScreen";

describe("CalculatorScreen.vue", () => {
    it("Screen should show prop value correctly", () => {
        const wrapper = mount(CalculatorScreen, {
            propsData: {
                value: "Hello"
            }
        });

        expect(wrapper.text()).toBe("Hello");
    });
});
