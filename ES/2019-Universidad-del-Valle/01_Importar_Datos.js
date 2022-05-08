// ********************************************************************************
// LINK A ESTE SCRIPT:
// https://code.earthengine.google.com/fa39b4c56c9c0ad687c32f5c8bb010a3
// ********************************************************************************

// ********************************************************************************
// IMPORTAR SHAPEFILES
// ********************************************************************************
// Click en Assets
// Click en NEW
// Click en Table Upload
// Click en SELECT
// Seleccionar todos los archivos que representan el shapefile
// Extensiones soportadas (.shx, .dbf, .cpg, .fix, .prj, .qix, .sbn, .shp, .shp.xml)
// Asignar un nombre
// En la pestaña Tasks aparecerá el estado del archivo shapefile subido
// ********************************************************************************

// Guardar shapefile en una variable "shape"
var shape = ee.FeatureCollection('path/SHP');

// Imprimir (mostrar) en la consola la información de la variable "shape"
print(shape);

// ********************************************************************************
// IMPORTAR RASTERS
// ********************************************************************************
// Click en Assets
// Click en NEW
// Click en Image Upload
// Click en SELECT
// Asignar un nombre
// Click en Properties
// Asignar fecha en el atributo system:time_start en el formato yyyy-mm-dd (fecha de la captura de la imagen)
// Click en OK
// En la pestaña Tasks aparecerá el estado del archivo de imagen subido
// ********************************************************************************

// Guardar imagen en una variable "raster"
var raster = ee.Image('path/Raster');

// Imprimir (mostrar) en la consola la información de la variable "raster"
print(raster);
