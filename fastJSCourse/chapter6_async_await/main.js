const sleep = ms => new Promise(r => setTimeout(r, ms));

async function asyncFunction() {
    try {
        const res = await fetch('https://dummyjson.com/products/1')
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

asyncFunction();