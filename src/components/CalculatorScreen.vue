<template>
    <!-- Screen component -->
    <div class="calculator-screen">{{ value }}</div>
</template>

<script>
export default {
    name: "CalculatorScreen",
    props: {
        value: {
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.calculator-screen {
    padding: 25px 25px 28px 20px;

    background-color: $Very-dark-desaturated-blue-c;
    border-radius: 10px;

    color: $White;
    font-size: 2em;
    font-family: $spartan;
    text-align: right;
}
</style>
