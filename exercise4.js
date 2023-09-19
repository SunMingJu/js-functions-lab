fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.filter(todo => todo.completed === true);
    completed.forEach((todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`);
    });

    // Compute and display the number of completed todos using reduce
    const numberOfCompletedTodos = json.reduce((count, todo) => {
      if (todo.completed === true) {
        return count + 1;
      }
      return count;
    }, 0);

    console.log(`Number of Completed Todos: ${numberOfCompletedTodos}`);
  })
  .catch(function(err) { 
    console.log(err);
  });
