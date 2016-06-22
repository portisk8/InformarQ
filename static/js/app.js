$(document).ready(function(){
      $('.carousel').carousel();
});

function btn1Click(){
	$("#cardImage").attr("src", "../static/images/urunday.jpg");
	$("#cardTitle").text('Fundación Urunday');
	$("#cardWLink").attr("href", "http://www.fundacionurunday.org/");
	$("#cardLink").text("+Info Fundación");
	$("#cardHtml").html('<h4>Fundación Urunday</h4><p>La Fundación Urunday, establecida en Noviembre de 1989 es la encargada de unir a los escultores del mundo, cobijarlos en nuestras tierras desafiándolos a crear en cada nuevo concurso. Ademas de esto, la fundacion, es la responsable de mantener en optimas condiciones cada una de las esculturas que hacen de Resistencia El Gran Museo a Cielo Abierto. En su trayectoria podemos resaltar, 12 Concursos de Escultura al aire libre entre Nacionales e Internacionales, 8 bienales internacionales con la participación de 50 países y mas de 100 escultores. En Resistencia mas de 400 esculturas emplazadas en espacios públicos, incrementando el patrimonio de la ciudad a mas de 600 obras, posicionando a Resistencia en uno de los museos al aire libre mas importante del mundo.</p>');
	$("#cardContent").text("Haciendo del ARTE un bien de TODOS");
}

function btn2Click(){
	$("#cardImage").attr("src", "../static/images/card.png");
	$("#cardTitle").text("Bienal 2016");
	$("#cardWLink").attr("href", "http://www.bienaldelchaco.org/");
	$("#cardLink").text("+Info Bienal");
	$("#cardHtml").html('<h4>Bienal 2016</h4><p>Los primeros monumentos urbanos(1920) fueron erigidos por la colectividad italiana, los cuales tuvieron el caracter recordatorio de las gestas inmigrantes. A partir de 1961, la historia local comenzo a concretarse con monumentos dedicados a proceres argentinos. En 1961, El Fogon de los Arrieros lanzo un "Plan de Embellecimiento", donde primaba,en cierta forma crear una "Ciudad-Museo". Desde el Primer Concurso de Escultura en Madera en la Plaza Central, en 1988, hasta las Bienales internacionales en la actualidad, El Gobierno de la Provincia del Chaco y la Fundación Urunday trabajan incansablemente para hacer de cada Bienal una verdadera celebración de la identidad de los chaqueños. La Bienal 2016 convoca a once artistas consagrados internacionalmente, representando a distintos paises del mundo, quienes realizaran a cielo abierto, una escultura inspirandoseen el equilibrio. El material a trabajar es el marmol,con el concepto de "Equilibrium" reconocido como  el cobijo de la armonia, el balance.</p><center><video class="responsive-video" controls><source src="../static/video/Bienal2016.mp4" type="video/mp4"></video></center>');
	$("#cardContent").text("El equilibrio es la tensión en reposo, es el resultado sereno, equidistante; es el cobijo de la armonía, es el balance, el dorado punto medio, lo ecuánime, la proporción, el orden; es un estado plácido de la belleza, una regla de la perfección.");
}

function btn3Click(){
	$("#cardImage").attr("src", "../static/images/escultores.png");
	$("#cardTitle").text("Actividades Paralelas Escultoricas");
	$("#cardWLink").attr("href", "http://www.bienaldelchaco.org/escultoricas/");
	$("#cardLink").text("+Info Escultores Paralelos");
	$("#cardHtml").html('El arte, permite expresar una vision sensible acerca del mundo, sea imaginario o real; nunca quieto, siempre cambiante, recomenzando de una forma dinamica con distintas tecnicas y materiales; catartico de su tiempo. En paralelo al Certamen Internacional, corre el Encuentro de Escultores Paralelos que, convoca a 9 artistas de Argentina y Latinoamerica quienes a diferencia de sus pares, poseen una amplia libertad de tecnicas y materiales. Los artistas paralelos se destacan a la hora de trabajar en tres categorias: Arte Reciclado, Arte y Naturaleza y Arte con Ceramica.');
	$("#cardContent").text("Escultores Argentinos y Latinoamericanos se destacan en distintas areas con amplia libertad de tecnicas y materiales");
}
