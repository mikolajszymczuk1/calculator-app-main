<template>
    <button class="calculator-button"
        :class="getClasses"
    >
        {{ buttonName }}
    </button>
</template>

<script>
export default {
    name: "CalculatorButton",
    props: {
        buttonName: {
            type: String,
            required: true
        },
        isClearButton: {
            type: Boolean
        },
        isResultButton: {
            type: Boolean
        }
    },
    computed: {
        // Return special button class
        getClasses() {
            if (this.isClearButton) return "calculator-button--clear-button";
            if (this.isResultButton) return "calculator-button--result-button";
            return "";
        }
    }
}
</script>

<style lang="scss" scoped>
.calculator-button {
    width: 100%;
    height: 60px;

    background-color: $Light-grayish-orange;
    border: 0;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 4px $Grayish-orange;

    font-family: $spartan;
    font-size: 1.8em;
    color: $Very-dark-grayish-blue;

    &:nth-child(17) {
        grid-column: 1 / 3;
    }

    &:nth-child(18) {
        grid-column: 3 / 5;
    }

    &--clear-button {
        background-color: $Desaturated-dark-blue-a;
        box-shadow: 0 4px $Desaturated-dark-blue-b;

        color: $White;
        font-size: 1em;
    }

    &--result-button {
        background-color: $Red;
        box-shadow: 0 4px $Dark-red;

        color: $White;
        font-size: 1em;
    }
}
</style>
