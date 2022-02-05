<template>
    <!-- Calculator component -->
    <div class="calculator-main"
        :class="getThemeClass(theme)">
        <!-- Top bar of calculator -->
        <div class="calculator-main__header-bar">
            <h1 class="calculator-main__logo">calc</h1>
            <calculator-theme-changer @change-theme="onChangeTheme" />
        </div>

        <calculator-screen :value="result" />

        <!-- Buttons container -->
        <div class="calculator-main__buttons-container">
            <calculator-button button-name="7" @insert="insertElementToScreen" />
            <calculator-button button-name="8" @insert="insertElementToScreen" />
            <calculator-button button-name="9" @insert="insertElementToScreen" />
            <calculator-button button-name="DEL" @clear="clearScreen" is-clear-button />
            <calculator-button button-name="4" @insert="insertElementToScreen" />
            <calculator-button button-name="5" @insert="insertElementToScreen" />
            <calculator-button button-name="6" @insert="insertElementToScreen" />
            <calculator-button button-name="+" @operator="operatorAction" is-operator-button />
            <calculator-button button-name="1" @insert="insertElementToScreen" />
            <calculator-button button-name="2" @insert="insertElementToScreen" />
            <calculator-button button-name="3" @insert="insertElementToScreen" />
            <calculator-button button-name="-" @operator="operatorAction" is-operator-button />
            <calculator-button button-name="." @insert="insertElementToScreen" />
            <calculator-button button-name="0" @insert="insertElementToScreen" />
            <calculator-button button-name="/" @operator="operatorAction" is-operator-button />
            <calculator-button button-name="x" @operator="operatorAction" is-operator-button />
            <calculator-button button-name="RESET" @reset="resetCalculator" is-clear-button />
            <calculator-button button-name="=" @result="calculateResult" is-result-button />
        </div>
    </div>
</template>

<script>
import CalculatorThemeChanger from "@/components/CalculatorThemeChanger";
import CalculatorScreen from "@/components/CalculatorScreen";
import CalculatorButton from "@/components/CalculatorButton";
import themeMixin from "@/mixins/themeMixin";

export default {
    name: "CalculatorMain",
    mixins: [themeMixin],
    data() {
        return {
            memoryNumber: "",
            result: "0",
            currentOperator: "",
            isOperatorButtonClicked: false,
            isResultCalculated: false
        }
    },
    components: {
        CalculatorThemeChanger,
        CalculatorScreen,
        CalculatorButton
    },
    methods: {
        // Set theme class to calculator component
        onChangeTheme(e) {
            this.theme = e;
        },

        // Insert number or dot to calculator screen
        insertElementToScreen(element) {    
            if (element === "." && (this.result === "" || this.result.search("[.]") !== -1)) {
                return;
            }

            if (this.isResultCalculated) {
                this.resetCalculator();
            }

            if (this.result === "0" && element !== ".") {
                this.result = "";
            }

            this.result += element;
        },

        // Do operator action
        operatorAction(operator) {
            if (this.isOperatorButtonClicked) return;

            this.isOperatorButtonClicked = true;
            this.memoryNumber = this.result;
            this.result = "0";
            this.currentOperator = operator;
        },

        // Clear calculator screen
        clearScreen() {
            if (this.isResultCalculated) return;

            this.result = this.result.length > 1 ? this.result.slice(0, this.result.length - 1) : "0";
        },

        // Reset all calculator
        resetCalculator() {
            this.memoryNumber = "";
            this.result = "0";
            this.currentOperator = "";
            this.isOperatorButtonClicked = false;
            this.isResultCalculated = false;
        },

        // Calculate result from numberA and numberB
        calculateResult() {
            if (!this.isOperatorButtonClicked) return;

            let a;
            let b;

            if (!this.isResultCalculated) {
                a = parseFloat(this.fixNumber(this.memoryNumber));
                b = parseFloat(this.fixNumber(this.result));
                this.memoryNumber = this.result;
            } else {
                a = parseFloat(this.fixNumber(this.result));
                b = parseFloat(this.fixNumber(this.memoryNumber));
            }

            switch(this.currentOperator) {
                case "+":
                    this.result = this.add(a, b).toString();
                    break;
                
                case "-":
                    this.result = this.subtract(a, b).toString();
                    break;

                case "x":
                    this.result = this.multiply(a, b).toString();
                    break;

                case "/":
                    this.result = this.divide(a, b).toString();
                    break;
            }
            
            this.isResultCalculated = true;
        },

        // Fix number. remove unused dot, replace empty string with 0
        fixNumber(stringNumber) {
            let fixedNumber = stringNumber;
            fixedNumber = fixedNumber === "" ? "0" : fixedNumber;
            fixedNumber = fixedNumber[fixedNumber.length - 1] === "." ? fixedNumber.slice(0, fixedNumber.length - 1) : fixedNumber;
            
            return fixedNumber;
        },

        // Return sum of two numbers
        add(a, b) {
            return a + b;
        },

        // Return difference of two numbers
        subtract(a, b) {
            return a - b;
        },
        
        // Return product of two numbers
        multiply(a, b) {
            return a * b;
        },
        
        // Return quotient of two numbers
        divide(a, b) {
            if (b === 0) {
                return "Divide by 0 !";
            }

            return a / b;
        }
    }
}
</script>

<style lang="scss" scoped>
.theme-2 {
    background-color: $Light-gray !important;
}

.theme-3 {
    background-color: $Very-dark-violet-a !important;
}

.calculator-main {
    height: 100vh;
    
    padding: 27px 25px 26px 25px;

    overflow-y: auto;
    background-color: $Very-dark-desaturated-blue-a;

    @media screen and (min-width: 600px) {
        padding: 27px 15vw 26px 15vw;
    }

    @media screen and (min-width: 1024px) {
        padding: 27px 25vw 26px 25vw;
    }

    @media screen and (min-width: 1440px) {
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 27px 31.5vw 26px 31.5vw;
    }

    @media screen and (min-width: 1800px) {
        padding: 27px 36vw 26px 36vw;
    }

    &__header-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 33px;
    }

    &__logo {
        font-size: 1.9em;
        color: $White;
        font-family: $spartan;

        .theme-2 & {
            color: $Very-dark-grayish-yellow;
        }

        .theme-3 & {
            color: $Light-yellow;
        }
    }

    &__buttons-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, auto);
        row-gap: 17px;
        column-gap: 14px;
        justify-content: center;

        margin-top: 22px;
        padding: 25px 25px 30px 25px;

        border-radius: 10px;
        background-color: $Very-dark-desaturated-blue-b;
        transition: background-color 250ms ease-out;
    
        @media screen and (min-width: 768px) {
            row-gap: 28px;
            column-gap: 24px;

            padding: 30px 30px 38px 30px;
        }
    
        .theme-2 & {
            background-color: $Grayish-red;
        }

        .theme-3 & {
            background-color: $Very-dark-violet-b;
        }
    }
}
</style>
