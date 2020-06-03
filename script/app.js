'use strict'

// array to hold all objects
let allHorns = [];
let keywordArray = [];
let pageSelect = 1;
let sortBy = 'title';

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
  //make a copy of the template
  const template = $('#mus-template').html();
  const myTemplate = Mustache.render(template, this); //eslint-disable-line

  // Append the copy to the DOM
  $('main').append(myTemplate);
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
    return a > b ? 1: -1;
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
  imageSorter(sortBy);
  keywordFiller(allHorns);
  boxFiller();
  // render the objects
  allHorns.forEach(value => value.render());
}

// Sort the allHorns array by eithe
const imageSorter = (how) => {
  if(how === 'title'){
    allHorns.sort((a,b) => {
      return a.title > b.title ? 1: -1;
    });
  } else {
    allHorns.sort((a,b) => {
      return a.horns - b.horns;
    });
  }
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

const arrayClearer = () => {
  allHorns = [];
  keywordArray = [];
}

// event listener to change the page to json data based of which page.
$('#page').on('click', function(event){
  event.preventDefault();
  arrayClearer();
  if(pageSelect === 1){
    pageSelect = 2;
    $('#page').text('Go to page 1')
  } else {
    pageSelect = 1;
    $('#page').text('Go to page 2')
  }
  ajaxCaller(pageSelect);
});

// Event listener to change how the images are sorted.
$('#sort').on('click', function(event){
  event.preventDefault();
  arrayClearer();
  console.log('Am I alive?');
  if(sortBy === 'title') {
    sortBy = 'horns';
    $('#sort').text('Sort By Title');
  } else {
    sortBy = 'title';
    $('#sort').text('Sort By Horns');
  }
  ajaxCaller(pageSelect);
});

// Once the page loads start the initial ajax call.
$(document).ready( () => {
  ajaxCaller(pageSelect);
});

