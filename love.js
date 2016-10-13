$$('input').addEvents({

  focus: function () {
    this.getPrevious('label').addClass('shift');
},
  blur:function(){
    if(this.value == '')
  this.getPrevious('label').removeClass('shift');
  }

})