const apiURL = 'http://localhost:3001';

function getMessages() {
    fetch(`${apiURL}/message.json`)
        .then((response) => response.json())
        .then((messages) => {
            const tbody = document.getElementById('all-messages');
            tbody.innerHTML = '';
            messages.forEach((message) => {
                const tr = document.createElement('tr');
                const tdDatetime = document.createElement('td');
                const tdSender = document.createElement('td');
                const tdMessage = document.createElement('td');

                const datetime = new Date(message.datetime);

                tdDatetime.textContent = `${datetime.getFullYear()}.${datetime.getMonth()}.${datetime.getDate()}. ${datetime.getHours()}.${datetime.getMinutes()}`;
                tdSender.textContent = message.sender;
                tdMessage.textContent = message.message;

                tr.appendChild(tdDatetime);
                tr.appendChild(tdSender);
                tr.appendChild(tdMessage);

                tbody.prepend(tr);
            });
        })
        .catch((error) => {
            console.log(error.message);
        });
}
getMessages();

function sendMessage() {
    const data = {
        sender: document.getElementById('name').value,
        message: document.getElementById('message').value
    };
    fetch(`${apiURL}/message`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((result) => {
            getMessages();
        })
        .catch((error) => {
            console.log(error.message);
        });
}

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('update-btn').addEventListener('click', getMessages);