// let registerButtons = document.querySelectorAll('.registerButton')





// registerButtons.on('click', function() {

//  console.log("register button worked")
   
// });


















let registerButtons = document.querySelectorAll('.registerButton')
console.log(registerButtons);
const registerRace = (event) => {
    event.preventDefault();

    carInfo = document.querySelector("#car9");  // created this to see if I could pull the data from the html option tag.  Its then fed down to car_id on line 40
                        // Later was thinking some way to feed a variable in place of the 9 to make it dynamic. 
    var option = document.getElementsByTagName("option")[0];  // Here is where I can try to access the option selections but so far no go.
    const race_id = event.target.getAttribute('data-id')

    const car_id = carInfo.getAttribute('data-id')  // Now that I got the id from carInfo I can use this to get the actual data and it works

    console.log("this is the car id " + car_id);  // here is where I see the id of that data in the browers console.  

    console.log("this is the data id" + race_id);

    console.log("this is the selected option" + option.dataset.rc); // trying different things I found on google to see if they work this is one of them.
   
    
    // const entryData = await Entry.create(req.body);
    
    //   const response = await fetch(`/api/cars/${id}`, {
    //     method: 'POST',
    //     body: JSON.stringify({ id }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  

    //   if (response.ok) {
    //     document.location.reload();
    //   } else {
    //     alert(response.statusText);
    //   }
    
  };





for(each of registerButtons) {
    each.addEventListener('button', registerRace);
  }