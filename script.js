$('#bntBuscar').click(function (e) { 
  PartN = $('#PartN').val();
  Desc = $('#Desc').val();
  if (PartN != null || Desc != null) {
    if (PartN != null ) {
      PartNo(PartN);
    }else{
      if (Desc != null ) {
        PartD(Desc);
      }
    }
  }
});
var pnP;
function btnN1(part) {

    var a = $('#id-'+part).attr('a');
    var pn = $('#id-'+part).attr('pn');
    pnP =pn;
    if (a == 0) {
      $('#id-'+part).attr('a',1);
      chengIcon(part,a)
      $('.remGP').remove();
      $.ajax({
      type: "POST",
      url: "./partials/PartN1.php",
      data:{pn},
      dataType: "html",
      success: function (response) {
          $('#R'+part).after(response);
          console.log('#R'+part);
          $('.removePh').addClass('rem-'+part);
          $('.rem-'+part).removeClass('removePh');
        }
      }); 
      }else{
        
        $('.rem-'+part).remove();
        chengIcon(part,a);
        $('#id-'+part).attr('a',0);
    }
}
var pnP2;
function btnN2(part) {
  var a = $('#id-'+part).attr('a');
  var pn = $('#id-'+part).attr('pn');
  pnP2 = pn;
  $('.remG').remove();

  if (a == 0) {
    $('#id-'+part).attr('a',1);
    chengIcon(pn,a)
    $.ajax({
    type: "POST",
    url: "./partials/PartN1.php",
    data:{pn},
    dataType: "html",
    success: function (response) {
        $('#Rph'+pn).after(response);

        $('.removePh').addClass('rem-'+pnP);
        $('.removePh').addClass('remH-'+pn);
        $('.remH-'+pn).removeClass('removePh');
      }
    }); 
    }else{
      $('.remH-'+pn).remove();
      chengIcon(pn,a);
      $('#id-'+part).attr('a',0);
  }

}
function btnN3(part) {
  var a = $('#id-'+part).attr('a');
  var pn = $('#id-'+part).attr('pn');
  $('.remGP3').remove();

  if (a == 0) {
    $('#id-'+part).attr('a',1);
    chengIcon(pn,a)
    $.ajax({
    type: "POST",
    url: "./partials/PartChil.php",
    data:{pn},
    dataType: "html",
    success: function (response) {
        $('#Rph-'+pn).after(response);

        $('.removeCh').addClass('rem-'+pnP);
        $('.removeCh').addClass('remH-'+pnP2);
        $('.removeCh').addClass('remH3-'+pn);
        $('.remH3-'+pn).removeClass('removeCh3');
      }
    }); 
    }else{
      $('.remH3-'+pn).remove();
      chengIcon(pn,a);
      $('#id-'+part).attr('a',0);
  }

}


function btnN1Up(part) {
  var a = $('#id-'+part).attr('up');
  var pn = $('#id-'+part).attr('pn');
  $('.remGP3').remove();

  if (a == 0) {
    $('#id-'+part).attr('up',1);
    chengIconUp(part,a)
    $.ajax({
    type: "POST",
    url: "./partials/PartChil.php",
    data:{pn},
    dataType: "html",
    success: function (response) {
        $('#R'+part).after(response);

        $('.removeCh').addClass('rem-'+pnP);
        $('.removeCh').addClass('remH-'+pnP2);
        $('.removeCh').addClass('remH3-'+pn);
        $('.remH3-'+pn).removeClass('removeCh3');
      }
    }); 
    }else{
      $('.remH3-'+pn).remove();
      chengIconUp(part,a);
      $('#id-'+part).attr('up',0);
  }

}

function btnN2Up(part) {
    var a = $('#id-'+part).attr('up');
    var pn = $('#id-'+part).attr('pn');
    $('.remGP3').remove();
  
    if (a == 0) {
      $('#id-'+part).attr('up',1);
      chengIconUp(pn,a)
      $.ajax({
      type: "POST",
      url: "./partials/PartChil.php",
      data:{pn},
      dataType: "html",
      success: function (response) {
          $('#Rph'+pn).after(response);
  
          $('.removeCh').addClass('rem-'+pnP);
          $('.removeCh').addClass('remH-'+pnP2);
          $('.removeCh').addClass('remH3-'+pn);
          $('.remH3-'+pn).removeClass('removeCh3');
        }
      }); 
      }else{
        $('.remH3-'+pn).remove();
        chengIconUp(pn,a);
        $('#id-'+part).attr('up',0);
    }
  
}


function chengIcon(pn,active) {
  if (active == 0) {
    $('#icon-'+pn).removeClass('fa-chevron-right');
    $('#icon-'+pn).addClass('fa-chevron-down');
  } else {
    $('#icon-'+pn).removeClass('fa-chevron-down');
    $('#icon-'+pn).addClass('fa-chevron-right');
  }
}
function chengIconUp(pn,active) {
  if (active == 0) {
    $('#iconUp-'+pn).removeClass('fa-chevron-up');
    $('#iconUp-'+pn).addClass('fa-chevron-down');
  } else {
    $('#iconUp-'+pn).removeClass('fa-chevron-down');
    $('#iconUp-'+pn).addClass('fa-chevron-up');
  }
}

function PartNo(PartN) {
  $.ajax({
    type: "POST",
    url: "./partials/PartNS.php",
    data:{PartN},
    dataType: "html",
    success: function (response) {
      $('.conTabl').html(response);
    }
  });
}
function PartD(Desc) {
  $.ajax({
    type: "POST",
    url: "./partials/table.php",
    data:{Desc},
    dataType: "html",
    success: function (response) {
      $('.conTabl').html(response);
    }
  });
}