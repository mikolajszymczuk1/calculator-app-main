export default {
    data() {
        return {
            theme: 1  // Theme mode (1, 2, 3)
        }
    },
    methods: {
        // Return class name based on 'theme' value
        getThemeClass(value) {
            if (value === 1) return "";
            else if (value === 2) return "theme-2";
            else return "theme-3";
        }
    }
}
