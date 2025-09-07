

const response = await fetch("http://localhost:4000/user");

const response1 = await fetch("http://localhost:4000/about", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "mohit"
    })
});