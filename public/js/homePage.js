

let registerButtons = document.querySelectorAll('.registerButton')
console.log(registerButtons);

const registerRace = async (event) => {
    event.preventDefault();
    carInfo = document.querySelector("#car9");
    const race_id = event.target.getAttribute('data-id')
    const selectMenu = document.getElementById(`selectMenu${race_id}`);
    const car_id = selectMenu.options[selectMenu.selectedIndex].getAttribute('data-id');
    
    console.log(car_id);
    // console.log("this is the car id " + car_id);

    console.log("this is the race id" + race_id);

// -----------------------------------------------------------------------------------------------------------
    const response = await fetch(`/api/entries/`, {
        method: 'POST',
        body: JSON.stringify({ race_id, car_id }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    
//  --------------------------------------------------------------------------------------------------------- 
 
  };





for(each of registerButtons) {
    each.addEventListener('click', registerRace);
  }