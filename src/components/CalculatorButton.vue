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
    transition: background-color 250ms ease-out;
    border: 0;
    outline: none;
    border-radius: 5px;
    box-shadow: 0 4px $Grayish-orange;

    font-family: $spartan;
    font-size: 1.8em;
    color: $Very-dark-grayish-blue;

    @media screen and (min-width: 768px) {
        border-radius: 10px;

        font-size: 2em;
    }

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

        @media screen and (min-width: 768px) {
            font-size: 1.2em;
        }

        .theme-2 & {
            background-color: $Dark-moderate-cyan !important;
            box-shadow: 0 4px $Very-dark-cyan !important;
        
            color: $White !important;
        }

        .theme-3 & {
            background-color: $Dark-violet !important;
            box-shadow: 0 4px $Vivid-magenta !important;
        
            color: $White !important;
        }
    }

    &--result-button {
        background-color: $Red;
        box-shadow: 0 4px $Dark-red;

        color: $White;
        font-size: 1em;
    
        @media screen and (min-width: 768px) {
            font-size: 1.2em;
        }

        .theme-2 & {
            background-color: $Orange !important;
            box-shadow: 0 4px $Dark-orange !important;
        
            color: $White !important;
        }

        .theme-3 & {
            background-color: $Pure-cyan !important;
            box-shadow: 0 4px $Soft-cyan !important;

            color: $Very-dark-blue !important;
        }
    }

    .theme-2 & {
        background-color: $Light-grayish-yellow;
        box-shadow: 0 4px $Dark-grayish-orange;

        color: $Very-dark-grayish-yellow;
    }

    .theme-3 & {
        background-color: $Very-dark-violet-c;
        box-shadow: 0 4px $Dark-magenta;
        
        color: $Light-yellow;
    }
}
</style>
