const container = document.querySelector("#container");

function createDivs(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let x = 0; x < num; x++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');

            cell.addEventListener('mouseover', function() {
                cell.style.backgroundColor = "purple";
            })

            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

function getGrid () {
    number = prompt("Please enter the size of grid you want to draw with:")
}

getGrid();
createDivs(number);
