$.fn.donutChart = function (options, callback) {

        var defaults = $.extend({}, {
                // These are the defaults.
                startdegree: 0,
                color: "#21242a",
                bgcolor: "#eee",
                fill: false,
                width: 30,
                dimension: 250,
                value: 50,
                animationstep: 1.0,
                border: 'default',
                complete: null,
                bordersize: 30
        }, options);

        return this.each(function () {

            var customSettings = ["color", "bgcolor", "fill", "width", "dimension", "animationstep", "endPercent", "border", "startdegree", "bordersize"];

            var settings = {};
            var icon = '';
            var percent;
            var endPercent = 0;
            var el = $(this);
            var fill = false;
            var label, title;
            var type = "";

            el.html("");

            checkDataAttributes(el);

            type = el.data("type");


            if (el.data('icon') != undefined) {
                label = "<i class=\"" + el.data("icon") + "\"></i>";
            } else {
                label = el.data("label");
            }

            if (label) {
                addLabel(el);
            }

            if (el.data("total") != undefined && el.data("part") != undefined) {
                var total = el.data("total") / 100;

                percent = ((el.data("part") / total) / 100).toFixed(3);
                endPercent = (el.data("part") / total).toFixed(3);
            } else {
                if (el.data("value") != undefined) {
                    percent = el.data("value") / 100;
                    endPercent = el.data("value");
                } else {
                    percent = defaults.value / 100;
                }
            }

            if (el.data("title") != undefined) {
                title = el.data("title");
                addTitleText(el);
            }


            el.width(settings.dimension + "px");

            if (type == "half") {
                el.height(settings.dimension / 2);
            }

            var size = settings.dimension,
                canvas = $("<canvas></canvas>").attr({
                    width: size,
                    height: size
                }).appendTo(el).get(0);

            var context = canvas.getContext("2d");

            var dpr = window.devicePixelRatio;
            if (dpr) {
                var $canvas = $(canvas);
                $canvas.css("width", size);
                $canvas.css("height", size);
                $canvas.attr("width", size * dpr);
                $canvas.attr("height", size * dpr);

                context.scale(dpr, dpr);
            }

            var container = $(canvas).parent();
            var x = size / 2;
            var y = size / 2;
            var radius = size / 2.5;
            var degrees = settings.value * 360.0;
            var radians = degrees * (Math.PI / 180);
            var startAngle = 2.3 * Math.PI;
            var endAngle = 0;
            var counterClockwise = false;
            var curPerc = settings.animationstep === 0.0 ? endPercent : 0.0;
            var curStep = Math.max(settings.animationstep, 0.0);
            var circ = Math.PI * 2;
            var quart = Math.PI / 2;
            var fireCallback = true;
            var additionalAngelPI = (settings.startdegree / 180) * Math.PI;



            if (type == "half") {
                startAngle = 2.0 * Math.PI;
                endAngle = 3.13;
                circ = Math.PI;
                quart = Math.PI / 0.996;
            } else if (type == "angle") {
                startAngle = 2.25 * Math.PI;
                endAngle = 2.4;
                circ = 1.53 + Math.PI;
                quart = 0.73 + Math.PI / 0.996;
            }

            /**
                * adds label to circle
                *
                * @param el
                * @param cssClass
                * @param lineHeight
                */
            function addLabel(el) {
                $("<span></span>").appendTo(el).html(label);
            }

            /**
                * adds title text to circle
                *
                * @param el
                * @param factor
                */
            function addTitleText(el) {
                $("<h4></h4>").appendTo(el).html(title);
            }

            /**
                * checks which data attributes are defined
                * @param el
                */
            function checkDataAttributes(el) {
                $.each(customSettings, function (index, attribute) {
                    if (el.data(attribute) != undefined) {
                        settings[attribute] = el.data(attribute);
                    } else {
                        settings[attribute] = $(defaults).attr(attribute);
                    }

                    if (attribute == "fill" && el.data("fill") != undefined) {
                        fill = true;
                    }
                });
            }

            /**
                * animate foreground circle
                * @param current
                */
            function animate(current) {

                context.clearRect(0, 0, canvas.width, canvas.height);

                context.beginPath();
                context.arc(x, y, radius, endAngle, startAngle, false);

                context.lineWidth = settings.width + 1;

                context.strokeStyle = settings.bgcolor;
                context.stroke();

                if (fill) {
                    context.fillStyle = settings.fill;
                    context.fill();
                }

                context.beginPath();
                context.arc(x, y, radius, -(quart) + additionalAngelPI, ((circ) * current) - quart + additionalAngelPI, false);

                if (settings.border == "outline") {
                    context.lineWidth = settings.width + 13;
                } else if (settings.border == "inline") {
                    context.lineWidth = settings.width - 13;
                }

                context.strokeStyle = settings.color;
                context.stroke();

                if (curPerc < endPercent) {
                    curPerc += curStep;
                    requestAnimationFrame(function () {
                        animate(Math.min(curPerc, endPercent) / 100);
                    }, el);
                }

                if (curPerc == endPercent && fireCallback && typeof (options) != "undefined") {
                    if ($.isFunction(options.complete)) {
                        options.complete();

                        fireCallback = false;
                    }
                }
            }

            el.waypoint(function () {
                animate(curPerc / 100);
            }, {
                offset: "100%",
                triggerOnce: true
            });





        });
    };
