<template>
    <h1 class="hello-world">{{ msg }}</h1>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Hello World !!!"
        }
    }
}
</script>

<style lang="scss" scoped>
.hello-world {
    color: $Very-dark-grayish-blue;
    font-family: $spartan;
}
</style>
