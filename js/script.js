$(document).ready(function(){
  
  var type = 1;
  
  var Drawer = {
    
    init: function() {
      $(document).on('click', '.sys-draw', Drawer.draw);
      $(document).on('click', '.sys-clear', Drawer.clear);
      $(document).on('click', '.sys-print', Drawer.print);
      $(document).on('click', '.sys-types a', Drawer.changeType);
    },
    
    draw: function() {
      var code = '<circle fill="red" cx="50%" r="5" cy="50%"></circle>';
      switch(type) { // example for later "type" use
        case 1:
          code += '<circle cx="140" cy="140" r="50" fill="blue" />';
          break;
        case 2:
          code += '<circle cx="340" cy="140" r="60" fill="blue" />';
          break;
        case 3:
          code += '<circle cx="170" cy="140" r="70" fill="blue" />';
          break;
        case 4:
          code += '<circle cx="240" cy="140" r="80" fill="blue" />';
          break;
      }
      // here are some js code to make it work
      $('.sys-svg').html(code);
      return false;
    },
    
    clear: function() {
      $('.sys-svg').html('');
      return false;
    },
    
    print: function() {
      window.print();
      return false;
    },
    
    changeType: function() {
      type = parseInt($(this).attr('data-type'));
      console.log(type);
      Drawer.draw();
    },
    
  };
  
  Drawer.init();
  
});
