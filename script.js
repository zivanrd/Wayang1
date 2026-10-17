let progress = 0;

const progressBar =
    document.getElementById("progress");

const percentText =
    document.getElementById("percent");

const opening =
    document.getElementById("opening");


/* =========================================
   LOADING 0% → 100%
========================================= */

const loading = setInterval(() => {

    progress++;

    progressBar.style.width =
        progress + "%";

    percentText.textContent =
        progress + "%";


    /* Jika sudah 100% */

    if (progress >= 100) {

        clearInterval(loading);

        percentText.textContent =
            "100%";


        /* Tunggu 0,7 detik */

        setTimeout(() => {

            opening.classList.add("hide");

            document.body.style.overflow =
                "auto";

        }, 700);
    }

}, 20);