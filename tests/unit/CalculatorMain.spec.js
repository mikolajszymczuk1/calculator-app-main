import { mount } from "@vue/test-utils";
import CalculatorMain from "@/components/CalculatorMain";
import CalculatorThemeChanger from "@/components/CalculatorThemeChanger";
import CalculatorButton from "@/components/CalculatorButton";

describe("CalculatorMain.vue", () => {
    it("Component should has correct default data values", () => {
        const wrapper = mount(CalculatorMain);
        expect(wrapper.vm.memoryNumber).toBe("");
        expect(wrapper.vm.result).toBe("0");
        expect(wrapper.vm.currentOperator).toBe("");
        expect(wrapper.vm.isOperatorButtonClicked).toBeFalsy();
        expect(wrapper.vm.isResultCalculated).toBeFalsy();
    });

    it("fixNumber method should remove unused dot and/or replace empty string with 0", () => {
        const wrapper = mount(CalculatorMain);
        expect(wrapper.vm.fixNumber("")).toBe("0");
        expect(wrapper.vm.fixNumber("125.")).toBe("125");
        expect(wrapper.vm.fixNumber("5421")).toBe("5421");
        expect(wrapper.vm.fixNumber("144.55")).toBe("144.55");
    });

    describe("Changing theme", () => {
        it("When emit change-theme, should set new 'theme' value", () => {
            const wrapper = mount(CalculatorMain);
            const themeChanger = wrapper.findComponent(CalculatorThemeChanger);
            
            expect(wrapper.vm.theme).toBe(1);
            themeChanger.vm.$emit("change-theme", 2);
            expect(wrapper.vm.theme).toBe(2);
        });
    });

    describe("Calculator logic", () => {
        it("clearScreen should correctly remove elements from calculator screen", () => {
            const wrapper = mount(CalculatorMain);
            const clearButton = wrapper.findAllComponents(CalculatorButton).at(3);
            wrapper.vm.result = "125";
            wrapper.vm.isResultCalculated = true;

            clearButton.vm.$emit("clear");
            expect(wrapper.vm.result).toBe("125");
            
            wrapper.vm.isResultCalculated = false;

            expect(wrapper.vm.result).toBe("125");
            wrapper.vm.clearScreen();
            expect(wrapper.vm.result).toBe("12");
            wrapper.vm.clearScreen();
            expect(wrapper.vm.result).toBe("1");
            wrapper.vm.clearScreen();
            expect(wrapper.vm.result).toBe("0");
        });
    
        it("resetCalculator should reset data to default values", () => {
            const wrapper = mount(CalculatorMain, {
                data() {
                    return {
                        memoryNumber: "100",
                        result: "500",
                        currentOperator: "+",
                        isOperatorButtonClicked: true,
                        isResultCalculated: true
                    }
                }
            });

            const resetButton = wrapper.findAllComponents(CalculatorButton).at(16);

            expect(wrapper.vm.memoryNumber).toBe("100");
            expect(wrapper.vm.result).toBe("500");
            expect(wrapper.vm.currentOperator).toBe("+");
            expect(wrapper.vm.isOperatorButtonClicked).toBeTruthy();
            expect(wrapper.vm.isResultCalculated).toBeTruthy();

            resetButton.vm.$emit("reset");

            expect(wrapper.vm.memoryNumber).toBe("");
            expect(wrapper.vm.result).toBe("0");
            expect(wrapper.vm.currentOperator).toBe("");
            expect(wrapper.vm.isOperatorButtonClicked).toBeFalsy();
            expect(wrapper.vm.isResultCalculated).toBeFalsy();
        });
    
        it("operatorAction should set current operator", () => {
            const wrapper = mount(CalculatorMain);
            const plusButton = wrapper.findAllComponents(CalculatorButton).at(7);
        
            wrapper.vm.isOperatorButtonClicked = true;  
            plusButton.vm.$emit("operator", "+");
            expect(wrapper.vm.currentOperator).toBe("");

            wrapper.vm.isOperatorButtonClicked = false;  
            plusButton.vm.$emit("operator", "+");
            expect(wrapper.vm.currentOperator).toBe("+");
            expect(wrapper.vm.memoryNumber).toBe("0");
            expect(wrapper.vm.result).toBe("0");
            expect(wrapper.vm.isOperatorButtonClicked).toBeTruthy();
        });

        describe("insertElementToScreen", () => {
            it("Dot can be insert only when screen is not empty or screen not contains any else dots", () => {
                const wrapper = mount(CalculatorMain);
                const dotButton = wrapper.findAllComponents(CalculatorButton).at(12);

                dotButton.vm.$emit("insert", ".");
                expect(wrapper.vm.result).toBe("0.");
                dotButton.vm.$emit("insert", ".");
                expect(wrapper.vm.result).toBe("0.");
            });
    
            it("When insert element when screen contains only 0, should replace 0 with element", () => {
                const wrapper = mount(CalculatorMain);

                expect(wrapper.vm.result).toBe("0");
                wrapper.findAllComponents(CalculatorButton).at(0).vm.$emit("insert", 7);  // 7 button
                expect(wrapper.vm.result).toBe("7");
            });

            it("After calculate result, when click insert button, calculator should reset", () => {
                const wrapper = mount(CalculatorMain, {
                    data() {
                        return {
                            memoryNumber: "100",
                            result: "500",
                            currentOperator: "+",
                            isOperatorButtonClicked: true,
                            isResultCalculated: true
                        }
                    }
                });

                wrapper.findAllComponents(CalculatorButton).at(0).vm.$emit("insert", "7");
                
                expect(wrapper.vm.memoryNumber).toBe("");
                expect(wrapper.vm.result).toBe("7");
                expect(wrapper.vm.currentOperator).toBe("");
                expect(wrapper.vm.isOperatorButtonClicked).toBeFalsy();
                expect(wrapper.vm.isResultCalculated).toBeFalsy();
            });
        });

        describe("calculateResult", () => {
            it("( + ) operation", () => {
                const wrapper = mount(CalculatorMain, {
                    data() {
                        return {
                            memoryNumber: "100",
                            result: "10",
                            currentOperator: "+",
                            isOperatorButtonClicked: true,
                            isResultCalculated: false
                        }
                    }
                });

                const resultButton = wrapper.findAllComponents(CalculatorButton).at(17);
                resultButton.vm.$emit("result");
                expect(wrapper.vm.result).toBe("110");
            });
    
            it("( - ) operation", () => {
                const wrapper = mount(CalculatorMain, {
                    data() {
                        return {
                            memoryNumber: "50",
                            result: "10",
                            currentOperator: "-",
                            isOperatorButtonClicked: true,
                            isResultCalculated: false
                        }
                    }
                });

                const resultButton = wrapper.findAllComponents(CalculatorButton).at(17);
                resultButton.vm.$emit("result");
                expect(wrapper.vm.result).toBe("40");
            });

            it("( x ) operation", () => {
                const wrapper = mount(CalculatorMain, {
                    data() {
                        return {
                            memoryNumber: "5",
                            result: "5",
                            currentOperator: "x",
                            isOperatorButtonClicked: true,
                            isResultCalculated: false
                        }
                    }
                });

                const resultButton = wrapper.findAllComponents(CalculatorButton).at(17);
                resultButton.vm.$emit("result");
                expect(wrapper.vm.result).toBe("25");
            });
    
            it("( / ) operation", () => {
                const wrapper = mount(CalculatorMain, {
                    data() {
                        return {
                            memoryNumber: "100",
                            result: "10",
                            currentOperator: "/",
                            isOperatorButtonClicked: true,
                            isResultCalculated: false
                        }
                    }
                });

                const resultButton = wrapper.findAllComponents(CalculatorButton).at(17);
                resultButton.vm.$emit("result");
                expect(wrapper.vm.result).toBe("10");
            });

            it("If operator button is not clicked, do nothing", () => {
                const wrapper = mount(CalculatorMain, {
                    data() {
                        return {
                            memoryNumber: "",
                            result: "10",
                            currentOperator: "",
                            isOperatorButtonClicked: false,
                            isResultCalculated: false
                        }
                    }
                });

                const resultButton = wrapper.findAllComponents(CalculatorButton).at(17);
                resultButton.vm.$emit("result");
                expect(wrapper.vm.result).toBe("10");
            });
        });
    });

    describe("Math operations", () => {
        it("add method should add two numbers", () => {
            const wrapper = mount(CalculatorMain);
            expect(wrapper.vm.add(5, 5)).toBe(10);
            expect(wrapper.vm.add(-4, 12)).toBe(8);
        });

        it("subtract method should subtract two numbers", () => {
            const wrapper = mount(CalculatorMain);
            expect(wrapper.vm.subtract(4, 3)).toBe(1);
            expect(wrapper.vm.subtract(7, 7)).toBe(0);
        });

        it("multiply method should multiply two numbers", () => {
            const wrapper = mount(CalculatorMain);
            expect(wrapper.vm.multiply(10, 10)).toBe(100);
            expect(wrapper.vm.multiply(3, 11)).toBe(33);
        });

        it("divide method should divide two numbers", () => {
            const wrapper = mount(CalculatorMain);
            expect(wrapper.vm.divide(4, 2)).toBe(2);
            expect(wrapper.vm.divide(9, 3)).toBe(3);
            expect(wrapper.vm.divide(5, 0)).toBe("Divide by 0 !");
        });
    });
});
