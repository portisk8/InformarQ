$(document).ready(function() {
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

function clickCalendar() {
  $(".cronograma.contenido").html('<iframe class="goocalendario" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=ai0mvckkfkv1f074r24tcoalpc%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=America%2FArgentina%2FBuenos_Aires" frameborder="0" scrolling="no"></iframe></div>');
  $(".cronograma.titulo").text("Actividades Bienal");
  $(".cronograma.subtitulo").text("Calendario");
}

function clickDescription(){
  $(".cronograma.contenido").html('<ul class="collapsible popout" data-collapsible="accordion"><li><div class="collapsible-header"><i class="material-icons">accessibility</i>Escultoricas</div><div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div></li><li><div class="collapsible-header"><i class="material-icons">account_balance</i>Academicas</div><div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div></li><li><div class="collapsible-header"><i class="material-icons">new_releases</i>Muestras</div><div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div></li><li><div class="collapsible-header"><i class="material-icons">assignment_ind</i>Artes Escenicas</div><div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div></li><li><div class="collapsible-header"><i class="material-icons">record_voice_over</i>Artes Combinadas</div><div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div></li><li><div class="collapsible-header"><i class="material-icons">fitness_center</i>Artesanias</div><div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div></li></ul>');
  $(".cronograma.titulo").text("Description de Actividades Bienal 2016");
  $(".cronograma.subtitulo").text("Actividades");

  $(document).ready(function() {
  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});
}