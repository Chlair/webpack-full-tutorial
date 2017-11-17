import $ from 'jquery';
import cheetah from '../assets/cheetah.jpg';
import sloth from '../assets/sloth.jpg';

console.log(cheetah);
console.log(sloth);

const body = $('body');

const displayCheetah = () => {
  const cheetahImage = $('<img></img>', { src: cheetah });
  cheetahImage.appendTo(body);
};

const displaySloth = () => {
  const slothImage = $('<img></img>', { src: sloth });
  slothImage.appendTo(body);
};

export {
  displaySloth,
  displayCheetah
};
