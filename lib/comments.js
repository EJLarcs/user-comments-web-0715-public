'use-strict';

$(document).ready(function(){
  // functions are called inside the document ready
});

function hideErrors(){
    $('#com-name-error').hide();
    $('#com-email-error').hide();
    $('#comment-error').hide();
};

function hideForm(){
    $('#add-comment').hide();
};

function addCommentListener(){
    $('#show-comment-form').click(function(){
         $('#add-comment').show();
    });
}

function cancelListener(){
  $('#cancel').click();
  $('#add-comment').hide();
};

function submitCommentListener(){
  nameValidator();
  emailValidator();
  commentValidator();
  addComment();
  function nameValidator(){
    if ($('#comment-name').val().length < 3){ $('#com-name-error').show();}
  }
  function emailValidator(){
    if (!$('#com-email').val().match(/\S+@\S+\.\S+/)){ $('#com-email-error').show();}
  }
  function commentValidator(){
    if ($('#comment').val().length == 0){ $('#comment-error').show();}
  }

  function addComment(){
    $('#posts').append("<div class='newcomment'>"+$('#comment').val()+"<div>");
  }

};
// write your functions out here
