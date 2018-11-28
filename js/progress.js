$(function() {
    let $progress = $('#progress'),
    $progressElements = $('.progress'),
    TOTAL = $progressElements.length;
    $progressElements.on('blur, change', function() {
      let valid = $progressElements.filter(function() {
        return ($(this).val() || $(this).prop('checked')) && !$(this).is(':invalid');
      }).length;
      let percent = (valid * 100) / TOTAL,
          current = $progress.val();
      
      let increase = percent > current;
          
      let transition = setInterval(function(){
        if((increase && current >= percent) ||
          (!increase && current <= percent))
            clearInterval(transition);
        
        let value = $progress.val();
        value = increase ? value+1 : value-1;
        current = value;
        
        $progress.val(current);
      }, 10);    
    });
  });