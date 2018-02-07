function newElement() {
  var v = $('#myUL').find('li');
  if (v.length >= 10) {
    $('.addBtn').attr('disabled', true)
  }else if(v.length <= 7){
    alert('Many value')
  }
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);
  li.style.border = "2px solid white";
  li.style.borderRadius = "8px";

  if(inputValue === ''){
    alert("Not value");
  }else{
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var colorLI;
  $('li').each(function() {
    $(this).css('background', randomColor());
    $(this).css('color', randomColor())
  });

  function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $( function() {
    $( "#myUL" ).sortable({});
    // $( "#myUL" ).disableSelection();
  } );
}
