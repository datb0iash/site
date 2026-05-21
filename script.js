document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // Fade-in animation
    // -----------------------------
    var fadeItems = document.querySelectorAll(".fade-in");

    if (fadeItems.length) {
        fadeItems.forEach(function (el, i) {
            el.style.animationDelay = (i * 0.06) + "s";
        });
    }

    // -----------------------------
    // Cursor sparkle effect
    // -----------------------------
    if (
        window.matchMedia &&
        window.matchMedia("(pointer: fine)").matches
    ) {

        var sparkleChars = ["+", "*", "\u00B7"];

        document.addEventListener("mousemove", function (e) {

            if (Math.random() > 0.93) {

                var sparkle = document.createElement("span");

                sparkle.textContent =
                    sparkleChars[
                        Math.floor(
                            Math.random() * sparkleChars.length
                        )
                    ];

                sparkle.className = "cursor-sparkle";

                sparkle.style.left = e.pageX + "px";
                sparkle.style.top = e.pageY + "px";

                document.body.appendChild(sparkle);

                setTimeout(function () {
                    sparkle.remove();
                }, 900);

            }

        });

    }

    // -----------------------------
    // Save reading info
    // -----------------------------
    const currentBook =
        document.getElementById("current-book");

    const currentAuthor =
        document.getElementById("current-author");

    if (currentBook) {
        localStorage.setItem(
            "currentBook",
            currentBook.innerText
        );
    }

    if (currentAuthor) {
        localStorage.setItem(
            "currentAuthor",
            currentAuthor.innerText
        );
    }

    // -----------------------------
    // Load reading info
    // -----------------------------
    const readingRef =
        document.getElementById("reading-reference");

    const authorRef =
        document.getElementById("author-reference");

    const savedBook =
        localStorage.getItem("currentBook");

    const savedAuthor =
        localStorage.getItem("currentAuthor");

    if (readingRef && savedBook) {
        readingRef.innerText = savedBook;
    }

    if (authorRef && savedAuthor) {
        authorRef.innerText = savedAuthor;
    }

});