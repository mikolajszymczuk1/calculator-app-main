import { mount } from "@vue/test-utils";
import CalculatorThemeChanger from "@/components/CalculatorThemeChanger";

describe("CalculatorThemeChanger.vue", () => {
    it("When click mode button, should emit change-theme event", async () => {
        const wrapper = mount(CalculatorThemeChanger);
        const modeButton = wrapper.find(".calculator-theme-changer__mode-button");
        await modeButton.trigger("click");
        
        expect(wrapper.emitted("change-theme")[0]).toEqual([2]);
    });

    it("Button should should switch correctly between modes 1, 2, 3", async () => {
        const wrapper = mount(CalculatorThemeChanger);
        const modeButton = wrapper.find(".calculator-theme-changer__mode-button");
        
        expect(wrapper.vm.theme).toBe(1);
        await modeButton.trigger("click");
        expect(wrapper.vm.theme).toBe(2);
        await modeButton.trigger("click");
        expect(wrapper.vm.theme).toBe(3);
        await modeButton.trigger("click");
        expect(wrapper.vm.theme).toBe(1);
    });
});
