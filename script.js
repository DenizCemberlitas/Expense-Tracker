const transactions = [
    {
        id: 1,
        name: "salary",
        amount: 5000,
        date: new Date(),
        type: "income",
    },
    {
        id: 2,
        name: "haircut",
        amount: 20,
        date: new Date(),
        type: "expense",
    },
    {
        id: 3,
        name: "concert ticket",
        amount: 350,
        date: new Date(),
        type: "expense",
    },
];

const list = document.getElementById("transactionList");
const status = document.getElementById("status");

function renderList(){
    list.innerHTML = "";

    if(transactions.length === 0){
        status.textContent = "No transactions.";
        return;
    }

    transactions.forEach((name)=>{
        const li = document.createElement('li');

        li.innerHTML = `
        <div class="name">
            <h4>${name}</h4>
            <p>${new Date(date).toLocaleDateString()}</p>
        </div>
        `;

        list.appendChild(li);
    })
}

renderList();