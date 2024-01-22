window.administrate_field_jsonb_viewers = {};

(function () {
  eventName = 'ready'
  if (typeof TurboLinks !== 'undefined') eventName = 'turbolinks:load'
  if (typeof Turbo !== 'undefined') eventName = 'turbo:load'

  $(document).on(eventName, function () {
    $('.administrate-jsoneditor-viewer').each(function (index) {

      let $current = $(this).find("textarea");
      const id = $current.attr("id")

      if (administrate_field_jsonb_viewers[id]) {
        administrate_field_jsonb_viewers[id].destroy();
      }

      let options = {
        navigationBar: false,
        search: false,
        enableSort: false,
        enableTransform: false,
        mode: 'view',
        modes: [],
      };


      const viewer = new JSONEditor(this, options);
      administrate_field_jsonb_viewers[id] = viewer

      viewer.set(JSON.parse($current.val()));
    });
  });
})();
