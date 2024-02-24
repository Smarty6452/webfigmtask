
function changeActiveLink(link) {
   
    document.querySelectorAll('.nav-link').forEach(function (el) {
      el.classList.remove('active');
    });
  
   
    link.classList.add('active');
  }
 
  function showSection(section) {
    
    document.querySelectorAll('.section').forEach(function (el) {
      el.style.display = 'none';
    });
  
    document.getElementById(section).style.display = 'block';
  }
  
 
  document.addEventListener('DOMContentLoaded', function() {
    showSection('allPosts');
  });
  

  //modal

  $('#joinGroupButton').click(function() {
    $('#joinGroupModal').modal('toggle');
    $(this).text(function(i, text){
      return text === "Join Group" ? "Leave Group" : "Join Group";
    })
  });

  // Handle form submission
  $('#joinGroupForm').submit(function (e) {
    e.preventDefault();
    
  });
  $('#accbtn').click(function() {
    $('#accountModal').modal('toggle');
    $(this).text(function(i, text){
      return text === "account" ? "Leave Group" : "Join Group";
    })
  });

  // Handle form submission
  $('#accform').submit(function (e) {
    e.preventDefault();
    
  });

 
