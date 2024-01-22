async function getStuff() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1/posts"
  );
  const json = await response.json();
  console.log("json data", json);
}

getStuff();
