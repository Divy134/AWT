const firstAPI = () => {
    return new Promise((resolve, reject) => {
      const success = true;
  
      setTimeout(() => {
        if (success) {
          const data = { message: "Data fetched from first API" };
          resolve(data);
        } else {
          reject(new Error("Failed to fetch data from first API"));
        }
      }, 2000);
    });
  };
  
  const secondAPI = () => {
    return new Promise((resolve, reject) => {
      const success = true;
  
      setTimeout(() => {
        if (success) {
          const data = { message: "Data fetched from second API" };
          resolve(data);
        } else {
          reject(new Error("Failed to fetch data from second API"));
        }
      }, 1500);
    });
  };
  
  const fetchDataSequentially = async () => {
    try {
      const apiData = await firstAPI();
      console.log("API 1 data:", apiData);
  
      const secondApi = await secondAPI();
      console.log("API 2 data:", secondApi);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  fetchDataSequentially();
  