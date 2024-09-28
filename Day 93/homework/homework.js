let counter = 0;

function addition() {
    let Variable = document.getElementById('paragrafi');

    counter++;
    Variable.textContent = counter;

    alert('successfuly addition!')
}

function deduction() {
    let Variable2 = document.getElementById('paragrafi'); 

    if (counter > 0) {
        counter--;
        Variable2.textContent = counter;

        alert('successufuly deduction!');
        return;
    } else {
        alert('counter deduction - 0 !')
    }
}