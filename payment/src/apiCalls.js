export const getOrder = () => {
    return fetch('http://localhost:5000/api/donate', {
        method: "GET"
    }).then(response => response.json())
    .catch((err) => console.log(err))

}

export const grabStatus = (paymentId) => {
    return fetch(`${process.env.REACT_APP_BACKEND}/payments/${paymentId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };