import { mount } from "@vue/test-utils";
import themeMixin from "@/mixins/themeMixin";
import MockComponent from "@/components/MockComponent";

describe("themeMixin", () => {
    it("getThemeClass should return correct class", () => {
        const wrapper = mount(MockComponent, {
            mixins: [themeMixin]
        });

        let theme = 1;
        expect(wrapper.vm.getThemeClass(theme)).toBe("");
        theme++;
        expect(wrapper.vm.getThemeClass(theme)).toBe("theme-2");
        theme++;
        expect(wrapper.vm.getThemeClass(theme)).toBe("theme-3");
    });
});
