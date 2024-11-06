/// შექმენით ღილაკი, ღილაკზე დაჭერისას უნდა დაემატოს ახალი პარაგრაფი შემთხვევითი რიცხვით 0 - 1000მდე დიაპაზონში, body თეგში

const addParagraphButton = document.getElementById('addParagraphButton');

addParagraphButton.addEventListener('click', function() {
    const p = document.createElement('p');
    p.textContent = Math.floor(Math.random() * 1000) + 1;

    document.body.appendChild(p);
})


// const addParagraphButton = document.getElementById('addParagraphButton');

// function addRandomParagraph() {
//     const randomNumber = Math.floor(Math.random() * 1001); 

//     const newParagraph = document.createElement('p');
//     newParagraph.textContent = `მშვენიერი რიცხვი: ${randomNumber}`;

//     document.body.appendChild(newParagraph);
// }

// addParagraphButton.addEventListener('click', addRandomParagraph);
