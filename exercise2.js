fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.filter(todo => todo.completed === true);
    completed.forEach((todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`);
    });

    // Create a new array containing just the titles of all todos
    const todoTitles = json.map(todo => todo.title);

    // Display the array of todo titles
    console.log("Todo Titles:", todoTitles);
  })
  .catch(function(err) { 
    console.log(err);
  });
