var wms_layers = [];


        var lyr_orto_google_0 = new ol.layer.Tile({
            'title': 'Google ortofoto (szare)',
            'opacity': 0.78,
            'className': 'ol-layer google-gray',
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_1_1 = new ol.layer.Tile({
            'title': '1',
            'opacity': 1.000000,
            
maxResolution:0.8401339845678589,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: './1/{z}/{x}/{y}.png'
            })
        });

        var lyr_2_2 = new ol.layer.Tile({
            'title': '2',
            'opacity': 1.000000,
            
maxResolution:0.8401339845678589,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: './2/{z}/{x}/{y}.png'
            })
        });

        var lyr_3_3 = new ol.layer.Tile({
            'title': '3',
            'opacity': 1.000000,
            
maxResolution:0.8401339845678589,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: './3/{z}/{x}/{y}.png'
            })
        });
var format_zakres_prawa_4 = new ol.format.GeoJSON();
var features_zakres_prawa_4 = format_zakres_prawa_4.readFeatures(json_zakres_prawa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zakres_prawa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zakres_prawa_4.addFeatures(features_zakres_prawa_4);
var lyr_zakres_prawa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zakres_prawa_4, 
                style: style_zakres_prawa_4,
                popuplayertitle: 'zakres_prawa',
                interactive: false,
                title: '<img src="styles/legend/zakres_prawa_4.png" /> zakres_prawa'
            });
var format_zakres_srodek_5 = new ol.format.GeoJSON();
var features_zakres_srodek_5 = format_zakres_srodek_5.readFeatures(json_zakres_srodek_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zakres_srodek_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zakres_srodek_5.addFeatures(features_zakres_srodek_5);
var lyr_zakres_srodek_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zakres_srodek_5, 
                style: style_zakres_srodek_5,
                popuplayertitle: 'zakres_srodek',
                interactive: false,
                title: '<img src="styles/legend/zakres_srodek_5.png" /> zakres_srodek'
            });
var format_zakres_dol_6 = new ol.format.GeoJSON();
var features_zakres_dol_6 = format_zakres_dol_6.readFeatures(json_zakres_dol_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zakres_dol_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zakres_dol_6.addFeatures(features_zakres_dol_6);
var lyr_zakres_dol_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zakres_dol_6, 
                style: style_zakres_dol_6,
                popuplayertitle: 'zakres_dol',
                interactive: false,
                title: '<img src="styles/legend/zakres_dol_6.png" /> zakres_dol'
            });
var group_zakresy = new ol.layer.Group({
                                layers: [lyr_zakres_prawa_4,lyr_zakres_srodek_5,lyr_zakres_dol_6,],
                                fold: 'close',
                                title: 'zakresy'});

lyr_orto_google_0.setVisible(true);lyr_1_1.setVisible(true);lyr_2_2.setVisible(true);lyr_3_3.setVisible(true);lyr_zakres_prawa_4.setVisible(true);lyr_zakres_srodek_5.setVisible(true);lyr_zakres_dol_6.setVisible(true);
var layersList = [lyr_orto_google_0,lyr_1_1,lyr_2_2,lyr_3_3,group_zakresy];
lyr_zakres_prawa_4.set('fieldAliases', {'fid': 'fid', });
lyr_zakres_srodek_5.set('fieldAliases', {'fid': 'fid', });
lyr_zakres_dol_6.set('fieldAliases', {'fid': 'fid', });
lyr_zakres_prawa_4.set('fieldImages', {'fid': '', });
lyr_zakres_srodek_5.set('fieldImages', {'fid': '', });
lyr_zakres_dol_6.set('fieldImages', {'fid': '', });
lyr_zakres_prawa_4.set('fieldLabels', {'fid': 'no label', });
lyr_zakres_srodek_5.set('fieldLabels', {'fid': 'no label', });
lyr_zakres_dol_6.set('fieldLabels', {'fid': 'no label', });
lyr_zakres_dol_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});