const cardContainer = document.querySelector(".card-container");
//const btn = document.querySelector(".completed");
cardContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('completed')) {
        const cardToHide = event.target.closest(".card"); // Find closest ancestor with class "card"
        if (cardToHide) {
            const id = cardToHide.firstChild.nextElementSibling.innerHTML.trim()
            cardToHide.classList.add('hidden');
            deleteItem(id)
        }
        cardToHide.addEventListener('transitionend', function () {
            cardToHide.parentNode.removeChild(cardToHide); // Remove from DOM 
            //cardToHide.style.display = "none"
        });
    }
});

function deleteItem(id) {
    window.location.href = `/delete?id=${id}`
}




console.log("Hello")
const calendar = document.getElementById('calendar');
const today = new Date();

function generateCalendar(month = today.getMonth(), year = today.getFullYear()) {
    const firstDay = (new Date(year, month)).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let content = `<table>`;
    content += `<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`;

    let days = 1;
    let isEmpty = firstDay === 0; // Check if first row needs to be empty

    for (let i = 0; i < 6; i++) {
        content += `<tr>`;
        for (let j = 0; j < 7; j++) {
            if (isEmpty && j < firstDay) {
                content += `<td></td>`;
            } else if (days > daysInMonth) {
                break;
            } else {
                const isSelected = days === today.getDate() && month === today.getMonth() && year === today.getFullYear();
                content += `<td class="${isSelected ? 'selected' : ''}" onclick="selectDate(${days}, ${month}, ${year})">${days}</td>`;
                days++;
            }
            isEmpty = false;
        }
        content += `</tr>`;
    }
    content += `</table>`;
    calendar.innerHTML = content;
}

function selectDate(day, month, year) {
    // Simulate selection (can be replaced with actual reservation logic)
    alert(`You selected appointment for: ${year}-${month + 1}-${day}`);
}

generateCalendar();