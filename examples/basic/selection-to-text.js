
AFRAME.registerComponent('selection-to-text', {

    schema: {
		type: "selector"
    },

    init: function() {
        this.el.addEventListener("feature-selected", this.setText.bind(this))

    },
    setText: function(event) {

    	const feature = event.detail
    	this.data.setAttribute("value", feature.name)
    }
});