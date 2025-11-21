const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
	let sum = 0;
	prices.forEach(priceEl => {
        sum += Number(priceEl.textContent);
    });
	const totalRow = document.createElement("tr");

    const totalCell = document.createElement("td");
	totalCell.id = "ans";
    totalCell.colSpan = 2;
    totalCell.textContent = sum;

    totalRow.appendChild(totalCell);

    const table = document.querySelector("table");
    table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

