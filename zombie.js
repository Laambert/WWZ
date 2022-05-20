let image = document.getElementsByClassName("image")[0];

const BackgroundAnimation = image.animate([
    {
        transform: "scale(2.0)"
    },
    {
        transform: "scale(1.8)"
    },
    {
        transform: "scale(1.6)"
    },
    {
        transform: "scale(1.7)"
    },
    {
        transform: "scale(1.5)"
    },
    {
        transform: "scale(1.6)"
    },
    {
        transform: "scale(1.35)"
    },
    {
        transform: "scale(1.7)"
    },
    {
        transform: "scale(2.0)",
    }
], {
    duration: 60000, 
    easing: "ease",
    iterations: Infinity,
});