const calculateButton = document.querySelector('#calculate');
const weightInput = document.querySelector('#weight');
const repsInput = document.querySelector('#reps');

calculateButton.addEventListener('click', function() {
    const weight = parseFloat(weightInput.value);
    const reps = parseInt(repsInput.value);

    if (!isNaN(weight) && !isNaN(reps) && reps > 0) {
        const oneRepMax = calculateOneRepMax(weight, reps);
        alert(`Your one-rep max is ${oneRepMax.toFixed(2)} lbs.`);
    } else {
        alert('Please enter valid weight and reps.');
    }
});

function calculateOneRepMax(weight, reps) {
    return weight * (36 / (37 - reps));
}