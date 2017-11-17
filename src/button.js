import $ from 'jquery';

const displayButton = () => {
  const body = $('body');
  const button = $('<button></button>', { text: 'click me' });

  button.click(() => {
    System.import('./some-file.js');
  });

  button.appendTo(body);
}

export {
  displayButton
}
