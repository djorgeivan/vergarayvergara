


$('head').append('<script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs" data-app-key="jyptv6ocep62w5u">');

var Dropbox,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Dropbox = (function() {
  function Dropbox() {
    this.success = bind(this.success, this);
    this.options = {
      success: this.success,
      cancel: function() {},
      linkType: 'direct',
      multiselect: true,
      extensions: ['.jpg', '.png', '.gif']
    };
    this.bind();
  }

  Dropbox.prototype.bind = function() {
    return $(document).on('click', '#dropbox', (function(_this) {
      return function() {
        return window.Dropbox.choose(_this.options);
      };
    })(this));
  };

  Dropbox.prototype.success = function(files) {
    var file, i, len, results;
    results = [];
    for (i = 0, len = files.length; i < len; i++) {
      file = files[i];
      results.push(file.link);
    }
    let text = document.getElementById("dropbox");
    text.value = results;
    
    return results;
  };

  Dropbox.prototype.upload = function(file_path) {
    return $.post("/pictures", {
      remote_image_url: file_path
    }).done(function(picture) {
      return console.log(picture);
    });
  };

  return Dropbox;

})();

new Dropbox();
