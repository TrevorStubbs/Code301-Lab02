# Gallery of Horns
- use floats
## Day 1 - Lab 02
### Feature #1: Display Images
- Why are we implementing this feature?
    - As a user, I want to view the images on the page so that I can browse the photo collection
- What are we going to implement?
    - When the user navigates to the home page the photo gallery should display all of the images in the gallery.
- How are we implementing it?
    - Use AJAX to read the provided JSON file.
    - Each object should become a new instance of a constructor function.
    - Use jQuery to make a copy of the HTML template of the photo component. 
Estimate of time needed to complete: 1 hour

Start time: 14:30

Finish time: 15:30

Actual time needed to complete: 1 hour
### Feature #2: Filter Images
- Why
    - As a user, I want to be able to filter the images so that iI can view only images that match a keyword.
- What
    - When the user clicks on the dropdown menu and selects and option only the images whose keyword match the option should be displayed
- How
    - Create a `<select>` element which contains unique `<option>` elements extracted dynamically from the JSON file, one for each keyword.
    - Use an event handler to respond when the user chooses an option from the drop down menu.
    - Hide all of the images, then show those whose keyword matches the option chosen.
Estimate of time needed to complete: 2 hours

Start time: 15:30

Finish time: 17:15

Actual time needed to complete: 2.2 hours
### Feature # 4: Style the App
- Why
    - As a user I want a simple clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.
- What  
    - The images should be displayed in rows across the screen
- HOw
    - Use floats
    - use 1 google font.
Estimate of time needed to complete: 1 hour

Start time: 17:30

Finish time: 18:15

Actual time needed to complete: 45 minutes
### Day 1 Stretch
- Sort the images