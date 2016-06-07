from gluon.serializers import loads_json

def index():
	return dict()

def getMarkers():
	"""	-nombre
		-tipo_Estable', ('kiosco', 'restaurante', 'otro')
		-descripcion
		-telefono
		-direccion
		-lat
		-lon
		-pdf
	"""
	places = []
	rows = db(db.place.id !=None).select()
	for row in rows:
		place = {
			'lat': row.lat,
			'lng': row.lon,
			'title': row.name,
			'infowindow': { 'content': "<h1>" + row.nombre +"</h1><p> Tel: "+ row.telefono +"</p><p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>" }
		}
			'pdf':row.pdf,
			'tipo':row.tipo_Estable,
			'nombre':row.nombre,
		places.append(place)
	return response.json(places)