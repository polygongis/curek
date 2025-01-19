var wms_layers = [];
var format_DesaIndonesia_0 = new ol.format.GeoJSON();
var features_DesaIndonesia_0 = format_DesaIndonesia_0.readFeatures(json_DesaIndonesia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_0.addFeatures(features_DesaIndonesia_0);var lyr_DesaIndonesia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_0, 
                style: style_DesaIndonesia_0,
                title: '<img src="styles/legend/DesaIndonesia_0.png" /> DesaIndonesia'
            });var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jalan_1.addFeatures(features_jalan_1);var lyr_jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
    title: 'jalan<br />\
    <img src="styles/legend/jalan_1_0.png" /> jalan utama<br />\
    <img src="styles/legend/jalan_1_1.png" /> <br />'
        });var format_sungai_2 = new ol.format.GeoJSON();
var features_sungai_2 = format_sungai_2.readFeatures(json_sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_sungai_2.addFeatures(features_sungai_2);var lyr_sungai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_2, 
                style: style_sungai_2,
                title: '<img src="styles/legend/sungai_2.png" /> sungai'
            });var format_rumah_3 = new ol.format.GeoJSON();
var features_rumah_3 = format_rumah_3.readFeatures(json_rumah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_rumah_3.addFeatures(features_rumah_3);var lyr_rumah_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rumah_3, 
                style: style_rumah_3,
                title: '<img src="styles/legend/rumah_3.png" /> rumah'
            });

lyr_DesaIndonesia_0.setVisible(true);lyr_jalan_1.setVisible(true);lyr_sungai_2.setVisible(true);lyr_rumah_3.setVisible(true);
var layersList = [lyr_DesaIndonesia_0,lyr_jalan_1,lyr_sungai_2,lyr_rumah_3];
lyr_DesaIndonesia_0.set('fieldAliases', {'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROPINSI': 'PROPINSI', 'LUAS': 'LUAS', 'MI_PRINX': 'MI_PRINX', });
lyr_jalan_1.set('fieldAliases', {'id': 'id', 'jalan': 'jalan', });
lyr_sungai_2.set('fieldAliases', {'id': 'id', 'sungai': 'sungai', });
lyr_rumah_3.set('fieldAliases', {'id': 'id', 'rumah': 'rumah', 'foto': 'foto', });
lyr_DesaIndonesia_0.set('fieldImages', {'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROPINSI': 'TextEdit', 'LUAS': 'TextEdit', 'MI_PRINX': 'TextEdit', });
lyr_jalan_1.set('fieldImages', {'id': 'TextEdit', 'jalan': 'TextEdit', });
lyr_sungai_2.set('fieldImages', {'id': 'TextEdit', 'sungai': 'TextEdit', });
lyr_rumah_3.set('fieldImages', {'id': 'TextEdit', 'rumah': 'TextEdit', 'foto': 'Photo', });
lyr_DesaIndonesia_0.set('fieldLabels', {'DESA': 'inline label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROPINSI': 'no label', 'LUAS': 'no label', 'MI_PRINX': 'no label', });
lyr_jalan_1.set('fieldLabels', {'id': 'no label', 'jalan': 'no label', });
lyr_sungai_2.set('fieldLabels', {'id': 'no label', 'sungai': 'no label', });
lyr_rumah_3.set('fieldLabels', {'id': 'no label', 'rumah': 'no label', 'foto': 'no label', });
lyr_rumah_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});