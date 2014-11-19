// The `DropdownItem` view constructor is used to populate each
// upper dropdown, and handle events on each. It can represent
// the `Course`, `Timeline`, and `Week` models, which all share
// a common API.

Demi.Views.DropdownItem = Backbone.View.extend({
  tagName: 'li',

  // We're using Bootstrap's dropdown components, so we have to
  // manually set the `.button-text` ourselves on click
  events: {
    'click' : 'setDropdowText'
  },

  initialize: function () {

    // Use the model's `type` property (not attribute) to assemble
    // the `$target`'s selector
    this.$target = $('#'+this.model.type+'-list-dropdown');

    // Then append `this.el` into the `$target` and render
    this.$target.append(this.el);
    this.render();

    // We're re-rendering here because the `AppRouter.assumeAndPrefect` method,
    // which is run before each routes method is called, only store a skeletal
    // model initially (it only knows it's model ID, but no other attributes).
    // Once `this.model`'s collection's fetch promise is resolved, there will
    // potentially be new information, in which case it will automatically 
    // re-render.
    this.listenTo(this.model, 'change', this.render);
    
    // If a dropdown changes and it has 'dependent' dropdowns, the dependents will
    // be `reset`. If an `reset` event firtes on `this.model.collection`, call
    // `this.remove()`
    this.listenTo(this.model.collection, 'reset', this.remove);
  },

  // Create the `<li>` for the dropdown item
  render: function () {
    this.$el.html('<li role="presentation"><a role="menuitem" tabindex="-1" href="'+ this.model.generateURI() +'">'
                  + this.model.get('name')
                  + '</a></li>')
  },

  // Set the `.button-text` on the dropdown. Triggered by a click event.
  setDropdowText: function () {
    this.$target.prev().children('.button-text').text(this.model.get('name'));
  }
})