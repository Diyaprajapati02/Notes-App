let notes= JSON.parse(localStorage.getItem("notes")) || [];
function showNotes() {
    let container= document.getElementById("notesContainer");
    container.innerHTML= "";
    notes.forEach((note, index) => {
        container.innerHTML += ` 
        <div class="note">
        <button class= "delete-btn" onclick="deleteNote(${index})">x</button>
        <p>${note}</p>
        </div>
         `;
    });
}
function addNote() {
    let input= document.getElementById("noteInput");
    if (input.value.trim() === "")
    {
        alert("Write Something ! ");
        return;
    }
    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value= "";
    showNotes();
    }
function deleteNote(index)
     {
        notes.splice(index, 1);
        localStorage.setItem("notes" , JSON.stringify(notes));
        showNotes();
    }
showNotes();



