# Gallery of Horns

## Names: Trevor Stubbs and Christopher Hamersly

## Open in browser

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

## Day 2 - Lab 03
### Feature 1: Pagination
- Why
    - As a user, I want to have the ability to view additional images so that my view does not become cluttered.
- What
    - Given that a user opens the application in the browser When the user clicks on a button or link to another page Then the other set of images should be dynamically displayed
- How
    - Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
    -Reset the filters, then repopulate them using only keywords from the images currently being displayed.
Estimate of time needed to complete: 1 hour

Start time: 14:10

Finish time: 14:35

Actual time needed to complete: 25 minutes

### Feature 2: Templating
- Why 
    - As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.
- What 
    - Given that a user opens the application in the browser When the images are displayed on the screen Then each image should be rendered according to a template
- How
    - Create the appropriate Mustache template in your HTML with the same `<h2>`, `<img>`, and `<p>` elements as the jQuery template from the prior lab.
    - Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.
Estimate of time needed to complete: 1 hour

Start time: 14:40

Finish time: 15:25

Actual time needed to complete: 45 minutes
### Feature 3: Styling with Flexbox
- Why
    - As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.
- What
    - Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in columns, as screen width allows
- How
    - Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.
Estimate of time needed to complete: 1 hour

Start time: 15:35

Finish time: 15:45

Actual time needed to complete: 10 minutes
### Feature 4: Sort the images
- Why
    - As a user, I want to be able to sort the images so that there is an order to their rendering.
- What 
    - Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly
- How
    - Add the ability for the user to sort the images by either title or by number of horns.
    - Sort the images by one of the properties on page load. This should also apply to the second page of images.
Estimate of time needed to complete: 1 hour

Start time: 15:45

Finish time: 16:45

Actual time needed to complete: 30 minutes
### Day 2: Stretch Goal 1- Detail view
- Why
    - As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.
- What
    - Given that a user wants to view the details of the image When the user clicks on an individual image Then the image should render larger on the screen with the description displayed
- How
    - Add a detail view which will display the image in a larger size in the center of the screen with a colored background.
    - The description should be shown now, as well.
    - When the user clicks off of the image, return to the grid view.
    - Use a transition or animation to show and hide the detail view of an image.
### Day 2: Stretch Goal 2 - Fuzzy search
- Why
    - As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.
- What
    - Given that a user enters wants to view specific images When the user enters a character into the search field Then only the images matching the current set of characters should be displayed on the screen
- How
    - Create an input element to allow users to search for an image. It is up to you and your partner to decide if the user should be able to search by title, keyword, or both.
    - Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.