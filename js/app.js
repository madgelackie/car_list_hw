document.addEventListener('DOMContentLoaded', () => {
    console.log('JS loaded');

    // If entire script is placed within the initial <document.addEventListener> function then the following 2 blocks, where 2 seperate event listeners are set up, have to come after defining the handleNewItemData function and handleDeleteAllButton, otherwise we get an initialization error (i.e these have tried to load before the function is declared). In this situation the addEventListener functions are not hoisted, causing the initialisation error. 

    // Setting up listener: what action it is listening for, what element this is attached to and what happens when the event occurs.
    const newItemListener = document.querySelector('#new-item-form')
    newItemListener.addEventListener('submit', handleNewItemData)

    const deleteAll = document.querySelector('#delete_all');
    deleteAll.addEventListener('click', handleDeleteAllButton)

});

    // Activated once 'submit' event attached to #new-item-form occurs. 
    // 1. Grabs data from the form 
    const handleNewItemData = function(event) {
        event.preventDefault();

        const manufacturer = event.target.manufacturer.value;
        const model = event.target.model.value;
        const battery_range = event.target.battery_range.value;
        const battery_size = event.target.battery_size.value;

    // 2. create element to attach the data to:
        const newListItem = document.createElement('li');
        

    // 3. create the (child) element for each piece of data from the form and attach it to the newListItem element 
        const manufacturerElement = document.createElement('h3');
        manufacturerElement.textContent = `Manufacturer: ${manufacturer}`;
        newListItem.appendChild(manufacturerElement);

        const modelElement = document.createElement('h3');
        modelElement.textContent = `Model: ${model}`;
        newListItem.appendChild(modelElement);

        const battery_rangeElement = document.createElement('h3');
        battery_rangeElement.textContent = `Battery range: ${battery_range} miles`;
        newListItem.appendChild(battery_rangeElement);
        
        const battery_sizeElement = document.createElement('h3');
        battery_sizeElement.textContent = `Battery size: ${battery_size} kWh`;
        newListItem.appendChild(battery_sizeElement);

    // 4. attach this new element to the DOM
        const carListItem = document.querySelector('#car_list');
        carListItem.appendChild(newListItem);
        carListItem.classList.add('car-list-item');

        event.target.reset();
    }


    const handleDeleteAllButton = function (event) {
        const carList = document.querySelector('#car_list');
        carList.innerHTML = '';
    }    




