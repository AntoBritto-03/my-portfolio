document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".control");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const activeBtn = document.querySelector(".active-btn");
            const activePanel = document.querySelector(".active");

            if (activeBtn) activeBtn.classList.remove("active-btn");
            if (activePanel) activePanel.classList.remove("active");

            button.classList.add("active-btn");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
});
