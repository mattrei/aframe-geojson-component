//const world = require("./node_modules/world-atlas/world/110m.json")
require('pathseg') //polyfill
var d3 = require('d3');
var topojson = require('topojson-client')

AFRAME.registerComponent('geojson-projection', {
    schema: {
        src: {
            type: "asset"
        },
        codeAttribute: {
            default: "" // TODO
        },
        projection: {
            default: "equirectangular"
            // or orthographic
        },
        featureKey: {
            default: "id"
        }
    },

    init: function() {
        d3.json(this.data.src, this.initialize.bind(this));
    },
    initialize: function(err, json) {
        const data = this.data;
        const el = this.el;

        var width = 360,    // corresponds to lon
            height = 180    // and lat


        var geoFunc = data.projection === "equirectangular" ? 
            d3.geoEquirectangular :
            d3.geoOrthographic

        
        console.log(geoFunc)

        const projection = geoFunc()
            .scale(height / Math.PI) //http://bl.ocks.org/mbostock/3757119
            .translate([width / 2, height / 2]);
        const path = d3.geoPath(projection)
            .pointRadius(0.1)

        var svg = d3.select("body").append("svg")
            .attr("width", width)
            .attr("height", height)

        var isTopojson = json.features === null

        var features = json.features ||
            topojson.feature(json, json.objects.countries).features

        //console.log(map.features)

        var paths = svg.append("g")
            .attr("class", "features")
        paths.selectAll("path")
            .data(features)
            .enter()
            .append("path")
            .attr("id", d => isTopojson ? d.id : d.properties[data.featureKey])
            .attr("d", path)
            .attr("fill", "none") // important for lines!
            .style("stroke", "black")

        var mapData = this.generate(svg.selectAll("path"))

        svg.remove()

        el.emit('geojson-projection-generated', {
            map: mapData,
            features: features
        });
    },
    generate: function(paths) {

        var map = new Map();

        var pathNodes = paths.nodes()

        pathNodes.forEach(p => {
            var key = p.__data__.properties[this.data.featureKey] //p.id
            var type = p.__data__.geometry.type  // Point, String, Polygon

            var territory = {
                id: key,
                lines: [],
                points: []
            };
            var line = []
            //var vertices = line.vertices;
            var x, y;
            var ox, oy;
            var px, py;

            var segments = p.pathSegList;
            for (var i = 0; i < segments.numberOfItems; i++) {

                var segment = segments.getItem(i);

                var types = [SVGPathSegMovetoAbs, SVGPathSegLinetoRel, SVGPathSegLinetoVerticalRel, SVGPathSegLinetoHorizontalRel, SVGPathSegLinetoHorizontalAbs, SVGPathSegLinetoVerticalAbs, SVGPathSegClosePath, SVGPathSegLinetoAbs /*, SVGPathSegMovetoRel, SVGPathSegCurvetoCubicRel*/ ];
                /*
                var found = false;
                types.forEach(function(t) {
                    if (segment instanceof t) {
                        found = true;
                    }
                });
                if (!found) {
                    console.log(segment);
                }
                */
                
                //console.log(segment)
                // TODO add segements for points

                if (segment instanceof SVGPathSegMovetoAbs) {
                    x = segment.x;
                    y = segment.y;
                    ox = x;
                    oy = y;
                    

                    if (type.includes("Point")) {
                        territory.points.push(new THREE.Vector2(x, y));
                    } else {
                        // add line;
                        territory.lines.push(line);
                        line = []
                        line.push(new THREE.Vector2(x, y));    
                    }
                }
                if (segment instanceof SVGPathSegLinetoRel) {
                    x = px + segment.x;
                    y = py + segment.y;
                    line.push(new THREE.Vector2(x, y));
                }
                if (segment instanceof SVGPathSegLinetoAbs) {
                    x = segment.x;
                    y = segment.y;
                    line.push(new THREE.Vector2(x, y));
                }
                if (segment instanceof SVGPathSegLinetoVerticalRel) {
                    x = px;
                    y = py + segment.y;
                    line.push(new THREE.Vector2(x, y));
                }
                if (segment instanceof SVGPathSegLinetoHorizontalRel) {
                    x = px + segment.x;
                    y = py;
                    line.push(new THREE.Vector2(x, y));
                }
                if (segment instanceof SVGPathSegLinetoHorizontalAbs) {
                    x = segment.x;
                    y = py;
                    line.push(new THREE.Vector2(x, y));
                }
                if (segment instanceof SVGPathSegLinetoVerticalAbs) {
                    x = px;
                    y = segment.y;
                    line.push(new THREE.Vector2(x, y));
                }
                if (segment instanceof SVGPathSegClosePath ||
                    i+1 === segments.numberOfItems) {   // Lines are not closed
                    //x = ox;
                    //y = oy;
                    //line.push( new THREE.Vector2( x, y ) );
                    // add line
                    territory.lines.push(line);
                    line = []
                }

                px = x;
                py = y;

            }


            territory.lines = territory.lines.filter((l) => {
                return l.length > 0
            })
                //countries.push( territory );

            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(territory);

        })

        //console.log(map)

        return map;
    }

});