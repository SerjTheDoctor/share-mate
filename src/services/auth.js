const API = 'CHANGE THIS';

export const AuthLogin = (email, password) => {
    const data = {
        'mail': email,
        'password': password
    };

    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}

export const AuthRegister = (firstname, lastname, email, phone, password) => {
    const user = {
        'first_name': firstname,
        'last_name': lastname,
        'mail': email,
        'phone': phone,
        'password': password
    }

    return fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
}