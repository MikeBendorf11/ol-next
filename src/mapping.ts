import * as olAll from "ol"
import * as control from "ol/control"
import * as olformat from "ol/format"
import * as filter from 'ol/format/filter'
import * as layer from 'ol/layer'
import * as loadingstrategy from 'ol/loadingstrategy'
import * as source from 'ol/source'
import * as style from 'ol/style'
import * as coordinate from 'ol/coordinate'
import * as Feature from 'ol/Feature'
import View from 'ol/View'
import Map from 'ol/Map'
import Collection from 'ol/Collection'
import * as proj from 'ol/proj'
import * as ImageTile from 'ol/ImageTile'
import * as extent from 'ol/extent'

var log = console.log
console.clear()

const ol = Object.assign({}, olAll,{
    Map,
    control,
    format: {
        ...olformat,
        filter
    },
    layer,
    loadingstrategy,
    source,
    style,
    coordinate,
    Feature,
    View,
    Collection,
    proj,
    ImageTile,
    extent
})

export {ol}