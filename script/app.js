'use strict'

// array to hold all objects
let allHorns = [];
let keywordArray = [];

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
  const myTemplate = $('#photo-template').html();

  //make a copy of the template
  const $newSection = $(`<section>${myTemplate}</section`);

  //fill the copy with object data
  $newSection.find('h2').text(this.title);
  $newSection.find('p').text(this.description);
  $newSection.find('img').attr('src', this.image_url);
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
    allHorns.forEach(value => value.render());
    populateBox();
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
    let $newOption = $('<option></option>')
    $newOption.text(value);
    $newOption.attr(`value=${value.title}`);
    $('select').first().append($newOption);
  });
}

// master box filler function
const populateBox = () => {
  keywordFiller(allHorns);
  boxFiller();
}

function eventHandler(event){
  console.log( $(this).text());
}

$('select').first().on('click', 'option', eventHandler);

$(document).ready(()=>{
  console.log('ready');
})
