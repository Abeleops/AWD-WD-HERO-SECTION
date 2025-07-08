 const btn2 = document.querySelector(".btn2");
    const sanji = document.querySelector(".sanji");
    const sanjiKick = document.querySelector("#first");

    btn2.addEventListener("mouseenter", () => {
      sanji.style.display = "none";
      sanjiKick.style.display = "block";
    });

    btn2.addEventListener("mouseleave", () => {
      sanji.style.display = "block";
      sanjiKick.style.display = "none";
    });