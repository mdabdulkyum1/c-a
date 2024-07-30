 document.addEventListener("DOMContentLoaded", function () {
            // Create the cursor element
            var cursorwork = document.createElement('div');
            cursorwork.id = "cursor";
            cursorwork.classList.add('cursor');
            document.body.appendChild(cursorwork);

            var linkBtn = document.querySelectorAll("a");
            var btn = document.querySelectorAll("button");

            // Function to update cursor position
            function updateCursorPosition(e) {
                cursorwork.style.left = e.clientX + "px";
                cursorwork.style.top = e.clientY + "px";
            }

            // Add mousemove event listener to document
            document.addEventListener("mousemove", updateCursorPosition);

            // Add class 'cursor' to cursor element on mouseover
            document.addEventListener("mouseover", function () {
                cursorwork.classList.add("cursor");
            });

            // Add event listeners to buttons
            btn.forEach(function (mainBtn) {
                mainBtn.addEventListener("mouseover", function () {
                    cursorwork.classList.add("cursorHover");
                });
                mainBtn.addEventListener("mouseout", function () {
                    cursorwork.classList.remove("cursorHover");
                });
            });

            // Add event listeners to links
            linkBtn.forEach(function (link) {
                link.addEventListener("mouseover", function () {
                    cursorwork.classList.add("cursorHover");
                });
                link.addEventListener("mouseout", function () {
                    cursorwork.classList.remove("cursorHover");
                });
            });
        });
