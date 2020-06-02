'use strict'

let allHorns = [];

function Horns(obj){
  this.title = obj.title;
  this.image_url = obj.image_url;
  this.keyword = obj.keyword;
  this.description = obj.description;
  this.horns = obj.horns;
  allHorns.push(this);
}

Horns.prototype.render = function(){
  const myTemplate = $('#photo-template').html();

  const $newSection = $(`<section>${myTemplate}</section`);

  $newSection.find('h2').text(this.title);

  $newSection.find('p').text(this.description);

  $newSection.find('img').attr('src', this.image_url);
  $newSection.find('img').attr('alt', this.title);

  $('main').append($newSection);
}

$.ajax('data/page-1.json', {method: 'Get', dataType: 'JSON'})
  .then(data => {
    data.forEach(value => {
      new Horns(value);
    });
    allHorns.forEach(value => value.render());
  });
