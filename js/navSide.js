function openNav() {
    document.getElementById("navSide").style.width = "min(100%, 23rem)";
}

function closeNav() {
    document.getElementById("navSide").style.width = "0";
}

let dropdown = document.getElementsByClassName("navSide__dropdown");
let i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });

    function openNav() {
        document.getElementById("navSide").style.width = "min(100%, 23rem)";
    }

    function closeNav() {
        document.getElementById("navSide").style.width = "0";
    }

    let dropdown = document.getElementsByClassName("navSide__dropdown");
    let i;
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    };
};