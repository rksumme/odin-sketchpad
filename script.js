const container = document.querySelector("#container");

function createDivs(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let x = 0; x < num; x++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');

            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}

createDivs(16);

// function createDivs(col) {
//     let e = document.container;
//     for (let i = 0; i < col; i++) {
//         let row = document.createElement("div");
//         row.className = "row";
//         for (let x = 1; x <= col; x++) {
//             let cell = document.createElement("div");
//             cell.className = "square";
//             cell.innerText = (i * col) + x;
//             row.appendChild(cell);
//         }
//         e.appendChild(row);
//     }
// }

// createDivs(16);