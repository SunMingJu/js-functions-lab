fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    // Filter for completed todos
    const completed = json.filter(todo => todo.completed === true);

    // Compute the number of completed todos per user using reduce
    const completedTodosPerUser = completed.reduce((countByUser, todo) => {
      const userId = todo.userId;

      // Initialize count for the user if it doesn't exist
      if (!countByUser[userId]) {
        countByUser[userId] = 0;
      }

      // Increment the count for the user
      countByUser[userId]++;

      return countByUser;
    }, {});

    // Display the counts per user with completed todos
    for (const userId in completedTodosPerUser) {
      console.log(`User ${userId}: ${completedTodosPerUser[userId]} completed todos`);
    }
  })
  .catch(function(err) { 
    console.log(err);
  });
