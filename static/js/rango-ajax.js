/**
 * Created by Administrator on 2017/8/23.
 */
$(document).ready(function () {
   $('#likes').click(function () {
       var catid;
       catid = $(this).attr("data-catid");
       $.get('/rango/like/', {category_id: catid}, function (data) {
           $('#like_count').html(data);
           $('#likes').hide();
       });
       //  alert("hahahahah")
   });

    $('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest/', {suggestion: query}, function(data){
        $('#cats').html(data);
        });
    });


});
