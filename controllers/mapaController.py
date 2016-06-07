from gluon.serializers import loads_json
	

def index():
	return dict()

def getMarkers():
	places = []
	rows = db(db.place.id !=None).select()
	for row in rows:
		place = {
			'lat': row.lat,
			'lng': row.lng,
			'title': row.nombre,
			'infowindow': { 'content': "<h1>" + row.nombre +"</h1><p> Tel: "+ row.tel +"</p><p>Direccion: "+row.direccion+"</p><p>"+row.descripcion+"</p>" },
		}
		places.append(place)
	return response.json(places)