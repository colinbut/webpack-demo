import _ from 'lodash';

function component() {

  var element = document.createElement('div');

  /* lodash need this line to work */
  element.innerHTML = _.map(['Hello','webpack'], function(item) {
    return item + ' ';
  });

  return element;

}

document.body.appendChild(component());
