<template>
    <!-- Theme changer component -->
    <div class="calculator-theme-changer"
        :class="getThemeClass(theme)"
    >
        <!-- Theme numbers -->
        <div class="calculator-theme-changer__numbers-container">
            <span class="calculator-theme-changer__number">1</span>
            <span class="calculator-theme-changer__number">2</span>
            <span class="calculator-theme-changer__number">3</span>
        </div>

        <!-- Theme three mode button -->
        <div class="calculator-theme-changer__mode-button"
            @click="changeTheme()"
        >
            <h2 class="calculator-theme-changer__button-title">THEME</h2>
        </div>
    </div>
</template>

<script>
import themeMixin from "@/mixins/themeMixin";

export default {
    name: "CalculatorThemeChanger",
    mixins: [themeMixin],
    methods: {
        // Change theme and emit new 'theme' value
        changeTheme() {
            this.theme++;
            if (this.theme > 3) this.theme = 1;
            this.$emit("change-theme", this.theme);
        }
    }
}
</script>

<style lang="scss" scoped>
.calculator-theme-changer {
    &__numbers-container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 10px 5px 10px;
    }

    &__number {
        color: $White;
        font-family: $spartan;
        font-size: 0.75em;

        .theme-2 & {
            color: $Very-dark-grayish-yellow;
        }

        .theme-3 & {
            color: $Light-yellow;
        }
    }

    &__mode-button {
        position: relative;

        width: 70px;
        height: 26px;

        border-radius: 40px;
        background-color: $Very-dark-desaturated-blue-b;
        transition: background-color 250ms ease-out;

        .theme-2 & {
            background-color: $Grayish-red;
        }

        .theme-3 & {
            background-color: $Very-dark-violet-b;
        }

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 6px;

            width: 16px;
            height: 16px;

            transform: translateY(-50%);
            border-radius: 50%;
            background-color: $Red;
            transition: left 150ms ease-out,
                        transform 150ms ease-out;
        
            .theme-2 & {
                left: 50%;

                transform: translate(-50%, -50%);
                background-color: $Orange;
            }
        
            .theme-3 & {
                left: 100%;

                transform: translate(calc(-100% - 6px), -50%);
                background-color: $Pure-cyan;
            }
        }
    }

    &__button-title {
        position: absolute;
        top: 50%;
        right: 95px;
        
        transform: translateY(-50%);

        font-family: $spartan;
        color: $White;
        font-size: 0.8em;        
        
        .theme-2 & {
            color: $Very-dark-grayish-yellow;
        }

        .theme-3 & {
            color: $Light-yellow;
        }
    }
}
</style>
