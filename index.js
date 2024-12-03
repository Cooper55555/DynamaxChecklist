document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        const isChecked = localStorage.getItem(checkbox.value) === 'true';
        checkbox.checked = isChecked;

        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.value, checkbox.checked);
        });
    });
});

const checkboxes = document.querySelectorAll('.pokemon-checkbox');
const numberChange = document.getElementById('numberchange');

const savedCount = localStorage.getItem('checkedCount');
if (savedCount) {
    numberChange.textContent = savedCount;
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = savedCount > index;
    });
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
        numberChange.textContent = checkedCount;
        localStorage.setItem('checkedCount', checkedCount);
    });
});