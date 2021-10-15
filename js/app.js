document.addEventListener('DOMContentLoaded', () => {
    console.log('JS loaded');

    // setting up listener: what action it is listening for and what element this
    // is attached to and what happens when the event occurs.


    // Activated once 'submit' event attached to new--item-form occurs:
    // grabs data from the form 
    const handleNewItemData = function(event) {
        event.preventDefault();

        const manufacturer = event.target.manufacturer.value;
        const model = event.target.model.value;
        const battery_range = event.target.battery_range.value;
        const battery_size = event.target.battery_size.value;

    // create element to attach the data to:
        const newListItem = document.createElement('li');

    // create the child element for each piece of data from the form and attach it to the newListItem element 
        const manufacturerElement = document.createElement('h2');
        manufacturerElement.textContent = manufacturer;
        newListItem.appendChild(manufacturerElement);

        const modelElement = document.createElement('h2');
        modelElement.textContent = model;
        newListItem.appendChild(modelElement);

        const battery_rangeElement = document.createElement('h2');
        battery_rangeElement.textContent = 'Range '; battery_range;
        newListItem.appendChild(battery_rangeElement);
        
        const battery_sizeElement = document.createElement('h2');
        battery_sizeElement.textContent = battery_size;
        newListItem.appendChild(battery_sizeElement);

    // attach this new element to the DOM
        const carListItem = document.querySelector('#car_list');
        carListItem.appendChild(newListItem);

        event.target.reset();
    }


    const handleDeleteAllButton = function (event) {
        const carList = document.querySelector('#car_list');
        carList.innerHTML = '';
    }    

// these have to come after defining the handleNewItemData function and handleDeleteAllButton, otherwise we get an initialization error (i.e these have tried to load before the function is declared)
    const newItemListener = document.querySelector('#new-item-form')
    newItemListener.addEventListener('submit', handleNewItemData)

    const deleteAll = document.querySelector('#delete_all');
    deleteAll.addEventListener('click', handleDeleteAllButton)
})

 
