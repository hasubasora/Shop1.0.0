 $('table').on('click', 'tbody td', function(e) {
     $(this).attr('contenteditable', 'true');
     $(this).focus();
     e.stopPropagation();
 })
 $(document).on('click', function() {
     $('tbody td').removeAttr('contenteditable');
 })
 $(document).on('click', 'tbody td', function() {
     $(this).removeAttr('contenteditable');
 })
 $('#btn').on('click', function() {
     var tr = $('<tr>');
     var str = [];
     $.each($('thead th'), function(k, v) {
         str.push('<td>&nbsp;</td>');
     })
     console.log(str)
     tr.append(str);
     $('tbody').append(tr);
 })

 for (var t = 0; t < len; t++) {
     tag[t].addEventListener('click', function(event) {
         this.setAttribute('contenteditable', 'true');
         this.focus();
         event.cancelBubble = true;
     });

 }
 //取消后的




 //创建
 var btn = document.getElementById('btn');