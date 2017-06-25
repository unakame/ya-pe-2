'use strict';

const ScreenOne = (update) => {

  const section        = $('<section style=" height:100vh">');
  const divImgCarousel = $('<div>',{class:'owl-carousel owl-theme carousel-box'})
  const divImg1        = $('<div>',{class:'row'});
  const divImg2        = $('<div>',{class:'row'});
  const divImg3        = $('<div>',{class:'row'});
  const img1           = $('<img>',{src:'img/icons/icon-people.png',class:'col s6 offset-s3'});
  const h3_1           = $('<h2>',{text:'Paga a tus amigos',class:'col s8 offset-s2'});
  const p_1            = $('<p>',{text:'Paga a quien quieras desde donde quieras, sin usar efectivo',class:'col s10 offset-s1'});
  const img2           = $('<img>',{src:'img/icons/happy-person.png',class:'col s6 offset-s3'});
  const h3_2           = $('<h2>',{text:'Sin número de cuenta',class:'col s10 offset-s1'});
  const p_2            = $('<p>',{text:'Elige a quien pagar desde tu lista de contactos',class:'col s8 offset-s2'});
  const img3           = $('<img>',{src:'img/icons/group-people.png',class:'col s6 offset-s3'});
  const h3_3           = $('<h2>',{text:'Gratis y seguro',class:'col s10 offset-s1'});
  const p_3            = $('<p>',{text:'La transferencia es inmediata y gratuita de una cuenta a otra',class:'col s8 offset-s2'});
  const divTextButton  = $('<div>', {class:'row div-text-button'});
  const divTextButton2 = $('<div>', {class:'col s10'})
  const button         = $('<button>',{text: 'REGISTRARME', id: 'boton',class:'col 10 offset-s1'});



  divImg1.append(img1);
  divImg2.append(img2);
  divImg3.append(img3);
  divImg1.append(h3_1);
  divImg2.append(h3_2);
  divImg3.append(h3_3);
  divImg1.append(p_1);
  divImg2.append(p_2);
  divImg3.append(p_3);
  divImgCarousel.append(divImg1);
  divImgCarousel.append(divImg2);
  divImgCarousel.append(divImg3);
  divTextButton2.append(button);
  divTextButton.append(divTextButton2);
  section.append(divImgCarousel);
  section.append(divTextButton);

  return section;


 }