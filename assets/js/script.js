const todo = document.getElementsByClassName("tâchesencours")[0];
const erreur = document.getElementsByClassName("erreur")[0];
const fini = document.getElementsByClassName("tâchesfini")[0];
let table =[]

document.getElementById("button").addEventListener("click", addtâche)

function addtâche() {

    const askuserinput = document.getElementById("userinput").value.trim().toLocaleLowerCase()
    erreur.textContent = ("")

    if (askuserinput === "") {
        erreur.textContent = "Insérez du texte ";
    }
    else if (table.includes(askuserinput.toLocaleLowerCase()) === true) {
        erreur.textContent = ("Ce mot est déjà présent dans la liste ;)")
    }else {
        const tacheinput = document.createElement("div")

        table.push(askuserinput.toLocaleLowerCase())

        todo.appendChild(tacheinput)
        tacheinput.textContent = askuserinput
        tacheinput.classList.add("tache")

        const btns = document.createElement("div")
        tacheinput.appendChild(btns)
        btns.classList.add("btns")

        const btn1 = document.createElement("button")
        btns.appendChild(btn1)
        btn1.classList.add("btn1")
        btn1.textContent = ("Terminer")
        
        const btn2 = document.createElement("button")
        btns.appendChild(btn2)
        btn2.classList.add("btn2")
        btn2.textContent = ("Supprimer")

        btn2.addEventListener('click', function()
        {
            todo.removeChild(tacheinput)
            table.pop(askuserinput.value)
        })

        btn1.addEventListener('click', function()
        {
            fini.appendChild(tacheinput)
            table.pop(askuserinput.value)
        })



    }
}