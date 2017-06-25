'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  const update = function(){
    render(root)
  }

 wrapper.append(ScreenOne(update));
  root.append(wrapper);
}


const state = {
    pantalla1: null,
    phone: null
}


$( _ => {

    const root = $('#root');
    render(root);

});