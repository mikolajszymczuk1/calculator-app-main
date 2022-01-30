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
    </div>
</template>

<script>
import CalculatorThemeChanger from "@/components/CalculatorThemeChanger";
import CalculatorScreen from "@/components/CalculatorScreen";
import themeMixin from "@/mixins/themeMixin";

export default {
    name: "CalculatorMain",
    mixins: [themeMixin],
    components: {
        CalculatorThemeChanger,
        CalculatorScreen
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
.calculator-main {
    height: 100vh;
    
    padding: 27px 25px;

    overflow-y: auto;
    background-color: $Very-dark-desaturated-blue-a;

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
    }
}
</style>
