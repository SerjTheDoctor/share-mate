const API = 'CHANGE THIS';

export const GetMessage = (sender, receiver) => {
    const data = {
        'sender': sender,
        'receiver': receiver
    }

    return fetch('/getMessage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}