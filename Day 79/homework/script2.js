// 2. HOMEWORK 

const form = document.getElementById('myForm');
const clearBtn = document.getElementById('clearBtn');


function clearForm(form) {
    
    const inputs = form.querySelectorAll('input, textarea');
    
    
    inputs.forEach(input => {
        input.value = '';
    });
}

clearBtn.addEventListener('click', () => clearForm(form));