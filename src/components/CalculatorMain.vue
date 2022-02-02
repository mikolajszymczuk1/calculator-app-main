<template>
    <!-- Calculator component -->
    <div class="calculator-main"
        :class="getThemeClass(theme)">
        <!-- Top bar of calculator -->
        <div class="calculator-main__header-bar">
            <h1 class="calculator-main__logo">calc</h1>
            <calculator-theme-changer @change-theme="onChangeTheme" />
        </div>

        <calculator-screen :value="399.981" />

        <!-- Buttons container -->
        <div class="calculator-main__buttons-container">
            <calculator-button button-name="7" />
            <calculator-button button-name="8" />
            <calculator-button button-name="9" />
            <calculator-button button-name="DEL" is-clear-button />
            <calculator-button button-name="4" />
            <calculator-button button-name="5" />
            <calculator-button button-name="6" />
            <calculator-button button-name="+" />
            <calculator-button button-name="1" />
            <calculator-button button-name="2" />
            <calculator-button button-name="3" />
            <calculator-button button-name="-" />
            <calculator-button button-name="." />
            <calculator-button button-name="0" />
            <calculator-button button-name="/" />
            <calculator-button button-name="x" />
            <calculator-button button-name="RESET" is-clear-button />
            <calculator-button button-name="=" is-result-button />
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
    components: {
        CalculatorThemeChanger,
        CalculatorScreen,
        CalculatorButton
    },
    methods: {
        // Set theme class to calculator component
        onChangeTheme(e) {
            this.theme = e;
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
