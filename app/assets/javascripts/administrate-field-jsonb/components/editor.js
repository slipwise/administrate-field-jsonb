window.administrate_field_jsonb_editors = {};

(function () {
  eventName = 'ready'
  if (typeof TurboLinks !== 'undefined') eventName = 'turbolinks:load'
  if (typeof Turbo !== 'undefined') eventName = 'turbo:load'

  $(document).on(eventName, function () {
    $('.administrate-jsoneditor').each(function (index) {
      let $current = $(this).find("textarea");
      const id = $current.attr("id")

      if (administrate_field_jsonb_editors[id]) {
        administrate_field_jsonb_editors[id].destroy();
      }

      let options = {
        onChange: function () {
          let updatedJson;

          const editor = administrate_field_jsonb_editors[id]

          try {
            updatedJson = editor.get();
          } catch (err) {
            console.log(err);
          }

          $current.val(JSON.stringify(updatedJson));
        },
        onError: function (err) {
          alert(err.toString());
        },
        navigationBar: false,
        search: false,
        enableSort: false,
        enableTransform: false,
        mode: 'tree',
        modes: ['text', 'tree'],
      };

      const editor = new JSONEditor(this, options);
      administrate_field_jsonb_editors[id] = editor

      editor.set(JSON.parse($current.val()));
    });
  });
})();
