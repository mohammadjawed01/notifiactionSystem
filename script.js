function createToaster(config) {
    return function (str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} px-6 py-3 rounded shadow-lg pointer-events-none`;
    };
}


let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: 3,
})

toaster("Download Completed!");



