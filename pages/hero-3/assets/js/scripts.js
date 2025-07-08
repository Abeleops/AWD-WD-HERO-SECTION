const btn1 = document.querySelector(".btn1");
    const btn2 = document.querySelector(".btn2");
    const sanji = document.querySelector(".sanji");
    const sanjiKick = document.querySelector("#first");
    const sanjiLeft = document.querySelector("#sanji-left");

    btn1.addEventListener("mouseenter", () => {
      sanji.style.display = "none";
      sanjiLeft.style.display = "block";
      sanjiKick.style.display = "none";
    });
    btn1.addEventListener("mouseleave", () => {
      sanji.style.display = "block";
      sanjiLeft.style.display = "none";
    });

    btn2.addEventListener("mouseenter", () => {
      sanji.style.display = "none";
      sanjiKick.style.display = "block";
      sanjiLeft.style.display = "none";
    });
    btn2.addEventListener("mouseleave", () => {
      sanji.style.display = "block";
      sanjiKick.style.display = "none";
    });