let carPostButton = document.querySelector('.carPost')
let deleteButtons = document.querySelectorAll('.deleteButton')
// let udpateButtons = document.querySelectorAll('.udpateButton')

// console.log(req.user)

const carPostFormHandler = async (event) => {
    event.preventDefault();

    const make = document.querySelector('#make').value.trim();
    const model = document.querySelector('#model').value.trim();
    const horsepower = document.querySelector('#horsepower').value.trim();
    const topSpeed = document.querySelector('#topSpeed').value.trim();
    const acceleration = document.querySelector('#acceleration').value.trim();
    // const user_id = req.body.user.id

    if (make && model && horsepower && topSpeed && acceleration) {
      const response = await fetch(`/api/cars/`, {
        method: 'POST',
        body: JSON.stringify({ make, model, horsepower, topSpeed, acceleration}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };

// const carUpdateFormHandler = async (event) => {
//   event.preventDefault();
//   const id = event.target.getAttribute('data-id')

//   const title = document.querySelector(`#postTitle${id}`).value.trim();
//   const content = document.querySelector(`#postContent${id}`).value.trim();

//   if (title && content && id) {
//     const response = await fetch(`/api/blogPost/`, {
//       method: 'PUT',
//       body: JSON.stringify({ title, content, id }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

const carDeleteHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id')
  
    const response = await fetch(`/api/cars/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  
};
  
document
  .querySelector('.carPost')
  .addEventListener('click', carPostFormHandler);

// for(each of updateButtons) {
//   each.addEventListener('click', carUpdateFormHandler);
// }

for(each of deleteButtons) {
  each.addEventListener('click', carDeleteHandler);
}

