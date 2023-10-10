function fetchData(callback) {
    setTimeout(() => {
      const data = { message: "Fatching data successfully!" };
      callback(data);
    }, 2000);
  }
  
  function handleData(data) {
    console.log(data.message);
  }
  
  console.log("Fetching data from API");
  fetchData(handleData);
  console.log("Asynchronous operation initiated. waiting for a response");
  
  