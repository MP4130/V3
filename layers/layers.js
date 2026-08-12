ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2177").setExtent([6566521.520360, 5563463.294537, 6582237.770360, 5572432.669537]);
// Custom styling for the Google basemap only
(function () {
    var style = document.createElement('style');
    style.textContent = '.google-gray { filter: grayscale(100%) brightness(115%) contrast(80%); }';
    document.head.appendChild(style);
})();

var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_orto_google_1 = new ol.layer.Tile({
            className: 'google-gray',
            'title': 'orto_google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_entitiesF_2 = new ol.format.GeoJSON();
var features_entitiesF_2 = format_entitiesF_2.readFeatures(json_entitiesF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesF_2.addFeatures(features_entitiesF_2);
var lyr_entitiesF_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesF_2, 
                style: style_entitiesF_2,
                popuplayertitle: 'entitiesF',
                interactive: false,
    title: 'entitiesF<br />\
    <img src="styles/legend/entitiesF_2_0.png" /> Koleje - wykolejnica l_<br />\
    <img src="styles/legend/entitiesF_2_1.png" /> 260721-0655<br />\
    <img src="styles/legend/entitiesF_2_2.png" /> Koleje - t_ ostrzeg_ W11-3<br />\
    <img src="styles/legend/entitiesF_2_3.png" /> WYK_4101<br />' });
var format_entitiesL_3 = new ol.format.GeoJSON();
var features_entitiesL_3 = format_entitiesL_3.readFeatures(json_entitiesL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesL_3.addFeatures(features_entitiesL_3);
var lyr_entitiesL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesL_3,
maxResolution:7.00111653806549,
 
                style: style_entitiesL_3,
                popuplayertitle: 'entitiesL',
                interactive: false,
                title: '<img src="styles/legend/entitiesL_3.png" /> entitiesL'
            });
var format_entitiesP_4 = new ol.format.GeoJSON();
var features_entitiesP_4 = format_entitiesP_4.readFeatures(json_entitiesP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_entitiesP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_entitiesP_4.addFeatures(features_entitiesP_4);
var lyr_entitiesP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_entitiesP_4,
maxResolution:0.28004466152261964,
 
                style: style_entitiesP_4,
                popuplayertitle: 'entitiesP',
                interactive: false,
    title: 'entitiesP<br />\
    <img src="styles/legend/entitiesP_4_0.png" /> D19_Tory_geometria<br />\
    <img src="styles/legend/entitiesP_4_1.png" /> SUUS22_01_Z<br />\
    <img src="styles/legend/entitiesP_4_2.png" /> SUUS15_07_T<br />\
    <img src="styles/legend/entitiesP_4_3.png" /> SUUS25_I<br />\
    <img src="styles/legend/entitiesP_4_4.png" /> SUUS25_G<br />\
    <img src="styles/legend/entitiesP_4_5.png" /> EGBC03<br />\
    <img src="styles/legend/entitiesP_4_6.png" /> D19_GEOM<br />\
    <img src="styles/legend/entitiesP_4_7.png" /> GK1_OSNOWA<br />\
    <img src="styles/legend/entitiesP_4_8.png" /> RTPW02<br />\
    <img src="styles/legend/entitiesP_4_9.png" /> RZR_4275<br />\
    <img src="styles/legend/entitiesP_4_10.png" /> ESR<br />\
    <img src="styles/legend/entitiesP_4_11.png" /> SMS_4091<br />\
    <img src="styles/legend/entitiesP_4_12.png" /> SKT_4274<br />\
    <img src="styles/legend/entitiesP_4_13.png" /> PPUZO<br />\
    <img src="styles/legend/entitiesP_4_14.png" /> TNG_4270<br />\
    <img src="styles/legend/entitiesP_4_15.png" /> ENERG_TEKSTY<br />\
    <img src="styles/legend/entitiesP_4_16.png" /> BUIB12_03<br />\
    <img src="styles/legend/entitiesP_4_17.png" /> PPUZP<br />\
    <img src="styles/legend/entitiesP_4_18.png" /> SUPC_01<br />\
    <img src="styles/legend/entitiesP_4_19.png" /> HMS_4020<br />\
    <img src="styles/legend/entitiesP_4_20.png" /> SOK_1131<br />\
    <img src="styles/legend/entitiesP_4_21.png" /> SUUS17_01_E<br />\
    <img src="styles/legend/entitiesP_4_22.png" /> BUIB07_01<br />\
    <img src="styles/legend/entitiesP_4_23.png" /> Koleje - urzadzenie srk - opis<br />\
    <img src="styles/legend/entitiesP_4_24.png" /> BUIB11<br />\
    <img src="styles/legend/entitiesP_4_25.png" /> RTPW KOLEJ<br />\
    <img src="styles/legend/entitiesP_4_26.png" /> SUPK_02<br />\
    <img src="styles/legend/entitiesP_4_27.png" /> OSSW04<br />\
    <img src="styles/legend/entitiesP_4_28.png" /> SUUS22_02_K<br />\
    <img src="styles/legend/entitiesP_4_29.png" /> SUUS12<br />\
    <img src="styles/legend/entitiesP_4_30.png" /> PP$$O<br />\
    <img src="styles/legend/entitiesP_4_31.png" /> shp<br />\
    <img src="styles/legend/entitiesP_4_32.png" /> SUPS01_07<br />\
    <img src="styles/legend/entitiesP_4_33.png" /> SUPS_E - Punkt o określonej wysokości urządzenia - rzędna góry<br />\
    <img src="styles/legend/entitiesP_4_34.png" /> ENR<br />\
    <img src="styles/legend/entitiesP_4_35.png" /> SUW_O<br />\
    <img src="styles/legend/entitiesP_4_36.png" /> KHN_4011<br />\
    <img src="styles/legend/entitiesP_4_37.png" /> SHP_4025<br />\
    <img src="styles/legend/entitiesP_4_38.png" /> UEEPA_505<br />\
    <img src="styles/legend/entitiesP_4_39.png" /> D19_Kilom<br />\
    <img src="styles/legend/entitiesP_4_40.png" /> PPINO<br />\
    <img src="styles/legend/entitiesP_4_41.png" /> KTJZ01<br />\
    <img src="styles/legend/entitiesP_4_42.png" /> PPINP<br />\
    <img src="styles/legend/entitiesP_4_43.png" /> TW2_4095<br />\
    <img src="styles/legend/entitiesP_4_44.png" /> SUUS22_01_K<br />\
    <img src="styles/legend/entitiesP_4_45.png" /> SKOOTD19<br />\
    <img src="styles/legend/entitiesP_4_46.png" /> SUUS22_1b_T<br />\
    <img src="styles/legend/entitiesP_4_47.png" /> BUIB07_02<br />\
    <img src="styles/legend/entitiesP_4_48.png" /> PPZAP<br />\
    <img src="styles/legend/entitiesP_4_49.png" /> OSSP03<br />\
    <img src="styles/legend/entitiesP_4_50.png" /> SUPE_01<br />\
    <img src="styles/legend/entitiesP_4_51.png" /> EOR<br />\
    <img src="styles/legend/entitiesP_4_52.png" /> SKTNRD19<br />\
    <img src="styles/legend/entitiesP_4_53.png" /> SUUS25_C<br />\
    <img src="styles/legend/entitiesP_4_54.png" /> WODA_TEKSTY<br />\
    <img src="styles/legend/entitiesP_4_55.png" /> SUN_O<br />\
    <img src="styles/legend/entitiesP_4_56.png" /> SUPW_01<br />\
    <img src="styles/legend/entitiesP_4_57.png" /> BUIB07_03<br />\
    <img src="styles/legend/entitiesP_4_58.png" /> SUE_O<br />\
    <img src="styles/legend/entitiesP_4_59.png" /> TM2_4095<br />\
    <img src="styles/legend/entitiesP_4_60.png" /> SUUS15_03<br />\
    <img src="styles/legend/entitiesP_4_61.png" /> D19_Tory<br />\
    <img src="styles/legend/entitiesP_4_62.png" /> RZE_4276<br />\
    <img src="styles/legend/entitiesP_4_63.png" /> SUUS22_1b_E<br />\
    <img src="styles/legend/entitiesP_4_64.png" /> SUUS22_01_W<br />\
    <img src="styles/legend/entitiesP_4_65.png" /> SIZ_4024<br />\
    <img src="styles/legend/entitiesP_4_66.png" /> POH_4022<br />\
    <img src="styles/legend/entitiesP_4_67.png" /> KTPL01<br />\
    <img src="styles/legend/entitiesP_4_68.png" /> GEM_4021<br />\
    <img src="styles/legend/entitiesP_4_69.png" /> TOD_4094<br />\
    <img src="styles/legend/entitiesP_4_70.png" /> SUPT_01<br />\
    <img src="styles/legend/entitiesP_4_71.png" /> 260327-0984<br />\
    <img src="styles/legend/entitiesP_4_72.png" /> BUBZ01<br />\
    <img src="styles/legend/entitiesP_4_73.png" /> SZOPO_902<br />\
    <img src="styles/legend/entitiesP_4_74.png" /> PRR_4730<br />\
    <img src="styles/legend/entitiesP_4_75.png" /> SUUS15_E - Studzienka - przewód elektroenergetyczny<br />\
    <img src="styles/legend/entitiesP_4_76.png" /> SUPG_01<br />\
    <img src="styles/legend/entitiesP_4_77.png" /> ! Linie i KM<br />\
    <img src="styles/legend/entitiesP_4_78.png" /> KOR<br />\
    <img src="styles/legend/entitiesP_4_79.png" /> TND_4271<br />\
    <img src="styles/legend/entitiesP_4_80.png" /> SUK_O<br />\
    <img src="styles/legend/entitiesP_4_81.png" /> UEEPA_506<br />\
    <img src="styles/legend/entitiesP_4_82.png" /> SUUS22_02_W<br />\
    <img src="styles/legend/entitiesP_4_83.png" /> RKE_4278<br />\
    <img src="styles/legend/entitiesP_4_84.png" /> ZMIANY<br />\
    <img src="styles/legend/entitiesP_4_85.png" /> RKE<br />\
    <img src="styles/legend/entitiesP_4_86.png" /> BUIB05_02<br />\
    <img src="styles/legend/entitiesP_4_87.png" /> WYSOKOSCI<br />\
    <img src="styles/legend/entitiesP_4_88.png" /> POD_4023<br />\
    <img src="styles/legend/entitiesP_4_89.png" /> SUPK_01<br />\
    <img src="styles/legend/entitiesP_4_90.png" /> KTCR02<br />\
    <img src="styles/legend/entitiesP_4_91.png" /> EGBB01<br />\
    <img src="styles/legend/entitiesP_4_92.png" /> PIT_4530<br />\
    <img src="styles/legend/entitiesP_4_93.png" /> SUK<br />\
    <img src="styles/legend/entitiesP_4_94.png" /> SUUS22_1a_E<br />\
    <img src="styles/legend/entitiesP_4_95.png" /> RTPW01<br />\
    <img src="styles/legend/entitiesP_4_96.png" /> D19_Urzadz<br />\
    <img src="styles/legend/entitiesP_4_97.png" /> SUUS25_W<br />\
    <img src="styles/legend/entitiesP_4_98.png" /> TOS_4093<br />\
    <img src="styles/legend/entitiesP_4_99.png" /> ZWR<br />\
    <img src="styles/legend/entitiesP_4_100.png" /> RKR_4277<br />\
    <img src="styles/legend/entitiesP_4_101.png" /> PPZAO<br />\
    <img src="styles/legend/entitiesP_4_102.png" /> WYK_4101<br />' });
var format_zakres_5 = new ol.format.GeoJSON();
var features_zakres_5 = format_zakres_5.readFeatures(json_zakres_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2177'});
var jsonSource_zakres_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zakres_5.addFeatures(features_zakres_5);
var lyr_zakres_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zakres_5,
maxResolution:280.0446615226196,
 minResolution:11.201786460904787,

                style: style_zakres_5,
                popuplayertitle: 'zakres',
                interactive: false,
                title: '<img src="styles/legend/zakres_5.png" /> zakres'
            });
var group_microdxf_GPKGbyKat = new ol.layer.Group({
                                layers: [lyr_entitiesF_2,lyr_entitiesL_3,lyr_entitiesP_4,],
                                fold: 'close',
                                title: 'micro.dxf_GPKG(byKat)'});

lyr_OpenStreetMap_0.setVisible(false);lyr_orto_google_1.setVisible(true);lyr_entitiesF_2.setVisible(true);lyr_entitiesL_3.setVisible(true);lyr_entitiesP_4.setVisible(true);lyr_zakres_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_orto_google_1,group_microdxf_GPKGbyKat,lyr_zakres_5];
lyr_entitiesF_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesL_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_entitiesP_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', 'ogr_style': 'ogr_style', 'font': 'font', 'angle': 'angle', 'size': 'size', 'size_u': 'size_u', 'anchor': 'anchor', 'color': 'color', 'underline': 'underline', 'plaintext': 'plaintext', 'fcolor': 'fcolor', 'flnum': 'flnum', 'bold': 'bold', 'italic': 'italic', 'dx': 'dx', 'dx_u': 'dx_u', 'dy': 'dy', 'dy_u': 'dy_u', });
lyr_zakres_5.set('fieldAliases', {'fid': 'fid', });
lyr_entitiesF_2.set('fieldImages', {'fid': '', 'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHandle': '', 'Text': '', 'ogr_style': '', 'font': '', 'angle': '', 'size': '', 'size_u': '', 'anchor': '', 'color': '', 'underline': '', 'plaintext': '', 'fcolor': '', 'flnum': '', 'bold': '', 'italic': '', 'dx': '', 'dx_u': '', 'dy': '', 'dy_u': '', });
lyr_entitiesL_3.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', });
lyr_entitiesP_4.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', 'ogr_style': 'TextEdit', 'font': 'TextEdit', 'angle': 'TextEdit', 'size': 'TextEdit', 'size_u': 'TextEdit', 'anchor': 'TextEdit', 'color': 'TextEdit', 'underline': 'Range', 'plaintext': 'TextEdit', 'fcolor': 'TextEdit', 'flnum': 'Range', 'bold': 'Range', 'italic': 'Range', 'dx': 'TextEdit', 'dx_u': 'TextEdit', 'dy': 'TextEdit', 'dy_u': 'TextEdit', });
lyr_zakres_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_entitiesF_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesL_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_entitiesP_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', 'ogr_style': 'no label', 'font': 'no label', 'angle': 'no label', 'size': 'no label', 'size_u': 'no label', 'anchor': 'no label', 'color': 'no label', 'underline': 'no label', 'plaintext': 'no label', 'fcolor': 'no label', 'flnum': 'no label', 'bold': 'no label', 'italic': 'no label', 'dx': 'no label', 'dx_u': 'no label', 'dy': 'no label', 'dy_u': 'no label', });
lyr_zakres_5.set('fieldLabels', {'fid': 'no label', });
lyr_zakres_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});