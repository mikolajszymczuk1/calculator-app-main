module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @use "@/assets/scss/utilities/_colors.scss" as *;
                    @use "@/assets/scss/utilities/_variables.scss" as *;
                `
            }
        }
    }
}
