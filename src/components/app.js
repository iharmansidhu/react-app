fecth("data")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);
  });
