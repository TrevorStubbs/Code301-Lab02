'use strict'

// array to hold all objects
let allHorns = [];
let keywordArray = [];
const myTemplate = $('#photo-template').html();

// Constructor function to build objects
function Horns(obj){
  this.title = obj.title;
  this.image_url = obj.image_url;
  this.keyword = obj.keyword;
  this.description = obj.description;
  this.horns = obj.horns;
  allHorns.push(this);
}

// render function to show image
Horns.prototype.render = function(){
  // Store the template


  //make a copy of the template
  const $newSection = $(`<section>${myTemplate}</section`);

  //fill the copy with object data
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('img').attr('title', this.title);
  $newSection.find('img').attr('alt', this.title);

  // Append the copy to the DOM
  $('main').append($newSection);
}

// the ajax to pull the JSON data
$.ajax('data/page-1.json', {method: 'Get', dataType: 'JSON'})
  .then(data => {
    data.forEach(value => {
      new Horns(value);
    });
    initializePage();
  });

// Fill the keywordArray with unique keywords
const keywordFiller = (obj) => {
  obj.forEach(value => {
    if(!keywordArray.includes(value.keyword)){
      keywordArray.push(value.keyword);
    }
  });
};

// the drop down box with the keywords.
const boxFiller = () => {
  keywordArray.forEach(value => {
    let $newOption = $(`<option>${value}</option>`)
    $newOption.attr(`value`, `${value}`);
    $('select').first().append($newOption);
  });
}

// initialize page
const initializePage = () => {
  $('main').empty();
  allHorns.forEach(value => value.render());
  keywordFiller(allHorns);
  boxFiller();
}

// Event listener to show only selected keywords
$('select').on('click', function(event){
  event.preventDefault();
  // If thing that was click is not default
  if($(this).val() !== 'default'){
    //clear all the images and tags
    $('main').empty();
    // loop through allHorns array and look for matching keywords
    allHorns.forEach(value => {
      // If found render that image to the page
      if($(this).val() === value.keyword){
        value.render();
      }
    });
  } else {
    // Clear the page
    $('main').empty();
    // Render all images again
    allHorns.forEach(value => value.render());
  }
});

