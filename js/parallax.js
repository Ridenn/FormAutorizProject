$(function() {
    $('.parallax').each(function() {
        var $obj = $(this);

        $(window).scroll(function() {
            var offset = $obj.offset();
            var yPos = 43-($(window).scrollTop() - offset.top) / $obj.data('speed');
            var bgpos = '50% ' + yPos + 'px';
            $obj.css('background-position', bgpos);
        });
    });
});

function limparCampos() {
  $("#autorizForm")[0].reset();
  $(".shipImg").attr("src", "images/default.jpg");
}
