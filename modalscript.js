$(function(){
    $('.custom-modal').click(function(e){
      e.preventDefault();
      var mymodal = $('#myModal');
      mymodal.find('.modal-body').text('hello');
      mymodal.modal('show');
      
    });
  })