document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownSelected = document.querySelector(".dropdown-selected");
    const dropdownOptions = document.querySelector(".dropdown-options");
    const selectInput = document.getElementById("select");
    const searchBox = document.querySelector(".search-box");
    const dropdownIcon = document.getElementById("dropdown-icon");

    dropdownSelected.addEventListener("click", function () {
        const isVisible = dropdownOptions.style.display == "block";
        dropdownOptions.style.display = isVisible ? "none" : "block";
        dropdownIcon.classList.toggle("ri-arrow-down-s-line", isVisible);
        dropdownIcon.classList.toggle("ri-arrow-up-s-line", !isVisible);
    });
    dropdownOptions.addEventListener("click", function (e) {
        if (e.target && e.target.nodeName === "LI") {
            const selectValue = e.target.getAttribute("data-value");
            const selectTex = e.target.textContent;
            dropdownSelected.textContent = selectTex + " ";
            dropdownSelected.appendChild(dropdownIcon);
            selectInput.value = selectValue;

            dropdownOptions.querySelectorAll("li").forEach(function (li) {
                li.classList.remove("active");
            });
            e.target.classList.add("active");
            dropdownOptions.style.display="none";
            dropdownIcon.classList.remove("ri-arrow-up-s-line");
            dropdownIcon.classList.add("ri-arrow-down-s-line");
            searchBox.focus();
        }
    });
});
