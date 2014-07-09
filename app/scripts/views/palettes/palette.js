/**
 * # views/palettes/palette
 *
 * Base constructor for UI palettes (i.e. dialogs).
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * @return {PaletteView}
 */
module.exports = Backbone.View.extend({

	/**
	 * @type {Object}
	 */
	events: {},

	/**
	 * Set up instance properties and call startup methods
	 */
	initialize: function () {
		console.info('views/palettes/palette : initialize()');

		this.source = null;
	},

	/**
	 * Show me
	 */
	open: function () {
		console.info('views/palettes/palette : open()');

		this.$el.find('.palette').addClass('active');
	},

	/**
	 * Hide me
	 */
	close: function () {
		console.info('views/palettes/palette : close()');

		this.$el.find('.palette').removeClass('active');
	},

	/**
	 * Set the values of the inputs
	 *
	 * @param {Object} hash Defines the data source and input values
	 */
	props: function (hash) {
		console.info('views/palettes/palette : props()');

		this.source = hash.source;

		_.each(hash.inputs, _.bind(this.prop, this));
	},

	/**
	 * Set the value of an input
	 *
	 * @param {String} name
	 * @param {String} value
	 */
	prop: function (name, value) {
		console.info('views/palettes/palette : prop()');

		var selector = '[name=' + name + ']';
		var input = this.$el.find(selector);
		var type = input.attr('type');

		switch (type) {
		case 'radio':
		case 'checkbox':
			input = input.prop('checked', false).filter('[value=' + value + ']');
			input.prop('checked', true);
			break;
		default:
			input.val(value);
			break;
		}
	}

});