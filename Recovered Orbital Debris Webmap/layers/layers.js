var lyr_NASA_Population_Density_2020 = new ol.layer.Image({
                            opacity: 1,
                            title: "NASA_Population_Density_2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NASA_Population_Density_2020.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [4096, 2048],
                                imageExtent: [-180.000000, -90.000000, 180.000000, 90.000000]
                            })
                        });var format_RecoveredDebris = new ol.format.GeoJSON();
var features_RecoveredDebris = format_RecoveredDebris.readFeatures(geojson_RecoveredDebris, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecoveredDebris = new ol.source.Vector();
jsonSource_RecoveredDebris.addFeatures(features_RecoveredDebris);var lyr_RecoveredDebris = new ol.layer.Vector({
                source:jsonSource_RecoveredDebris, 
                style: style_RecoveredDebris,
                title: "Recovered Debris"
            });

lyr_NASA_Population_Density_2020.setVisible(true);lyr_RecoveredDebris.setVisible(true);
var layersList = [lyr_NASA_Population_Density_2020,lyr_RecoveredDebris];
lyr_RecoveredDebris.set('fieldAliases', {'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Cospar ID': 'Cospar ID', 'Name': 'Name', 'Re-entry D': 'Re-entry D', 'Mass [kg]': 'Mass [kg]', 'Shape': 'Shape', 'Size [mm]': 'Size [mm]', 'Material': 'Material', 'Type of De': 'Type of De', });
lyr_RecoveredDebris.set('fieldImages', {'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Cospar ID': 'TextEdit', 'Name': 'TextEdit', 'Re-entry D': 'TextEdit', 'Mass [kg]': 'TextEdit', 'Shape': 'TextEdit', 'Size [mm]': 'TextEdit', 'Material': 'TextEdit', 'Type of De': 'TextEdit', });
lyr_RecoveredDebris.set('fieldLabels', {'Latitude': 'inline label', 'Longitude': 'inline label', 'Cospar ID': 'inline label', 'Name': 'inline label', 'Re-entry D': 'inline label', 'Mass [kg]': 'inline label', 'Shape': 'inline label', 'Size [mm]': 'inline label', 'Material': 'inline label', 'Type of De': 'inline label', });
lyr_RecoveredDebris.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});