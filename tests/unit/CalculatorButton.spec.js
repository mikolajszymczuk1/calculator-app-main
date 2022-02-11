import { mount } from "@vue/test-utils";
import CalculatorButton from "@/components/CalculatorButton";

describe("CalculatorButton.vue", () => {
    it("Button should show button name", () => {
        const wrapper = mount(CalculatorButton, {
            propsData: {
                buttonName: "6"
            }
        });

        expect(wrapper.text()).toBe("6");
    });

    describe("Buttons types", () => {
        describe("Number button", () => {
            it("Number button shouldn't has extra class", () => {
                const wrapper = mount(CalculatorButton, {
                    propsData: {
                        buttonName: "7"
                    }
                });

                expect(wrapper.classes()).toContain("calculator-button");
            });

            it("Number button should emit insert event", async () => {
                const wrapper = mount(CalculatorButton, {
                    propsData: {
                        buttonName: "4"
                    }
                });
    
                await wrapper.trigger("click");
                expect(wrapper.emitted("insert")[0]).toEqual(["4"]);
            });
        });

        describe("Operator button", () => {
            it("Operator button should emit operator event", async () => {
                const wrapper = mount(CalculatorButton, {
                    propsData: {
                        buttonName: "+",
                        isOperatorButton: true
                    }
                });
    
                await wrapper.trigger("click");
                expect(wrapper.emitted("operator")[0]).toEqual(["+"]);
            });
        });

        describe("Result button", () => {
            it("Result button should has extra class", () => {
                const wrapper = mount(CalculatorButton, {
                    propsData: {
                        buttonName: "=",
                        isResultButton: true
                    }
                });

                expect(wrapper.classes()).toContain("calculator-button--result-button");
            });

            it("Result button should emit result event", async () => {
                const wrapper = mount(CalculatorButton, {
                    propsData: {
                        buttonName: "=",
                        isResultButton: true
                    }
                });
    
                await wrapper.trigger("click");
                expect(wrapper.emitted("result")).toBeTruthy();
            });
        });

        describe("Clear button", () => {
            it("Clear button should has extra class", () => {
                const wrapper = mount(CalculatorButton, {
                    propsData: {
                        buttonName: "DEL",
                        isClearButton: true
                    }
                });

                expect(wrapper.classes()).toContain("calculator-button--clear-button");
            });

            it("Clear button should emit clear event", async () => {
                const wrapper = mount(CalculatorButton, {
                    propsData: {
                        buttonName: "DEL",
                        isClearButton: true
                    }
                });
    
                await wrapper.trigger("click");
                expect(wrapper.emitted("clear")).toBeTruthy();
            });
    
            it("Reset button should emit reset event", async () => {
                const wrapper = mount(CalculatorButton, {
                    propsData: {
                        buttonName: "RESET",
                        isClearButton: true
                    }
                });
    
                await wrapper.trigger("click");
                expect(wrapper.emitted("reset")).toBeTruthy();
            });
        });
    });
});
