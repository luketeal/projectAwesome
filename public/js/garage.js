let carPostButton = document.querySelector('.carPost')
let deleteButtons = document.querySelectorAll('.deleteButton')
let updateButtons = document.querySelectorAll('.updateButton')

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

const carUpdateFormHandler = async (event) => {
  event.preventDefault();
  const id = event.target.getAttribute('data-id')

  const make = document.querySelector(`#carMake${id}`).value.trim();
  const model = document.querySelector(`#carModel${id}`).value.trim();
  const horsepower = document.querySelector(`#carhorsepower${id}`).value.trim();
  const topSpeed = document.querySelector(`#cartopSpeed${id}`).value.trim();
  const acceleration = document.querySelector(`#caracceleration${id}`).value.trim();

  if (make && model && horsepower && topSpeed && acceleration && id) {
    const response = await fetch(`/api/cars/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ make, model, horsepower, topSpeed, acceleration }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

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

for(each of updateButtons) {
  each.addEventListener('click', carUpdateFormHandler);
}

for(each of deleteButtons) {
  each.addEventListener('click', carDeleteHandler);
}

