'use strict'

// array to hold all objects
let allHorns = [];
let keywordArray = [];
const myTemplate = $('#photo-template').html();
let pageSelect = 1;

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
  const $newSection = $(`<section class=${this.keyword}>${myTemplate}</section`);

  //fill the copy with object data
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('img').attr('title', this.title);
  $newSection.find('img').attr('alt', this.title);

  // Append the copy to the DOM
  $('main').append($newSection);
}

const ajaxCaller = (page) =>{
  // the ajax to pull the JSON data
  $.ajax(`data/page-${page}.json`, {method: 'Get', dataType: 'JSON'})
    .then(data => {
      data.forEach(value => {
        new Horns(value);
      });
      initializePage();
    });
}

// Fill the keywordArray with unique keywords
const keywordFiller = (obj) => {
  obj.forEach(value => {
    if(!keywordArray.includes(value.keyword)){
      keywordArray.push(value.keyword);
    }
  });
  // sort the keyword array
  keywordArray.sort((a, b) => {
    if(a > b){
      return 1;
    } else {
      return -1;
    }
  });
};

// the drop down box with the keywords.
const boxFiller = () => {
  // clear the keyword box
  $('select').empty();
  // fill the first position with the default selection
  let $newOption = $(`<option></option`);
  $newOption.text('Filter By Keyword');
  $newOption.attr(`value`, `default`);
  $('select').append($newOption);
  // Fill the rest with the new keywords.
  keywordArray.forEach(value => {
    $newOption = $(`<option>${value}</option>`);
    $newOption.attr(`value`, `${value}`);
    $('select').first().append($newOption);
  });
}

// initialize page
const initializePage = () => {
  $('main').empty();

  // sort the object array by title
  allHorns.sort((a,b) => {
    if(a.title > b.title){
      return 1;
    } else {
      return -1;
    }
  });

  keywordFiller(allHorns);
  boxFiller();
  // render the objects
  allHorns.forEach(value => value.render());
}

// Event listener to show only selected keywords
$('select').on('change', function(event){
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

// event listener to change the page to json data based of which page.
$('button').on('click', function(event){
  event.preventDefault();
  allHorns = [];
  keywordArray = [];
  if(pageSelect === 1){
    pageSelect = 2;
    $('button').text('Go to page 1')
  } else {
    pageSelect = 1;
    $('button').text('Go to page 2')
  }
  ajaxCaller(pageSelect);
})

// Once the page loads do these things.
$(document).ready( () => {
  ajaxCaller(pageSelect);
});

