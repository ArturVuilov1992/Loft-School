const workers = [
    {name:"John", salary:500},
    {name:"Mike", salary:1300},
    {name:"Linda", salary:1500}];

  const getWorthyWorkers = workersArr => {
      const worthyWorkers = [];

      workers.forEach ( currentWorkert => {
          if (currentWorkert.salary > 1000) {worthyWorkers.push (currentWorkert.name)}
      });
      
   //   for (i = 0; i < workersArr.length; i++){
    //      const currentWorker = workersArr[i];

   //       if ( currentWorker.salary > 1000) {
    //          worthyWorkers.push(currentWorker.name);
   //       }
    //  }

      return worthyWorkers;
  }
  
    console.log(getWorthyWorkers(workers))