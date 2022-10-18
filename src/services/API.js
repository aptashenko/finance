const manageData = (url, data, method) => {
    if (method === 'DELETE') {
        fetch(url, {
            method: 'DELETE',
        })
    } else {
        const options = {
            method: method,
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        fetch(url, options);
    }
}

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export {manageData, fetchData}