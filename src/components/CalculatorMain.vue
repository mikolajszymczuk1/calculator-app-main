<template>
    <!-- Calculator component -->
    <div class="calculator-main">
        <!-- Top bar of calculator -->
        <div class="calculator-main__header-bar">
            <h1 class="calculator-main__logo">calc</h1>
            <calculator-theme-changer />
        </div>

        <calculator-screen />
    </div>
</template>

<script>
import CalculatorThemeChanger from "@/components/CalculatorThemeChanger";
import CalculatorScreen from "@/components/CalculatorScreen";

export default {
    name: "CalculatorMain",
    components: {
        CalculatorThemeChanger,
        CalculatorScreen
    }
}
</script>

<style lang="scss" scoped>

</style>
