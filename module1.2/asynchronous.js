const mockApiResponse = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.duration > 2000) {
        reject(new Error('Request failed!'));
      } else {
        resolve(data);
      }
    }, 2000);
  })
}

const getResponse = async () => {
  const data = { 
    title: 'Lover', 
    artists: [
      { name: 'Taylor Swift belajar JavaScript' }
    ], 
    duration: 200 
  };

  try {
    const response = await mockApiResponse(data);
    console.log(response);
  } catch(error) {
    console.log(error);
  }
}

getResponse();
