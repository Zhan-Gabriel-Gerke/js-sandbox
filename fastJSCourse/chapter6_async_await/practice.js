//1

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
    console.log('Start');
    await sleep(2000);
    console.log('End after 2 seconds');
}

//run()

//2

const url = 'https://api.example.com/nonexistent';

async function fetchData() {
    try {
        const response = await fetch(url);
        console.log('Response status:', response.status);
    } catch (error) {
        console.error('Fetch error data') ;
    }
}

//fetchData()

//3

const url3 = 'https://the-one-api.dev/v2/book';

async function fetchData3() {
    try {
        const response = await fetch(url3)
        const data = await response.json()
        console.log('Data:', data);
    } catch (error) {
        console.error('Fetch error data') ;
    }
}

//fetchData3()

//4

const url4 = 'https://api.example.com/users';

async function fetchData4() {

    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'james' })
        }

        const res = await fetch(url4, options)
    } catch (error) {
        console.error('Fetch error data') ;
    }
}

fetchData4()