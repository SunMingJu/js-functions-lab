fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    // Filter for uncompleted todos and create an array of objects with userId and title
    const uncompleted = json
      .filter(todo => !todo.completed) // Filter for uncompleted todos
      .map(todo => ({ userId: todo.userId, title: todo.title }));

    // Display the array of uncompleted todo objects
    console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });
