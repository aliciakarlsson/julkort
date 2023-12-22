const tomte = document.getElementById("tomten_img");
const kol = document.getElementById("kol")

tomte.addEventListener("click", () => {

    prompt(`🎅: HO HO HO

VAD ÖNSKAR EN SÅN HÄR LITEN POJKE/FLICKA/HEN SIG I JULKLAPP MÅNTRO? ❄️ `);

    alert(" 🎅: Jag har gört att du varit en stygg liten individ på senaste. därför har jag en speciell present till just dig. ✨");

    kol.style.display = "block";

    setTimeout(() => { kol.style.display = "none" }, 2000);
    setTimeout(() => { alert(" 🎅: god jul! 🙃 ") }, 2000);


});


