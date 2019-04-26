/* global $ */

// console.log('hi');

// $('h1').click(function(){
//     $('h1').css('color', 'green');
//     $('h1').text('Ready to Code');
// });

$('#searchButton').click(function(){
    
    var searchTerm = $('#searchInput').val();
    var request_URL = "https://www.googleapis.com/books/v1/volumes?q={" + searchTerm + "}";
    
    $.ajax({
       url: request_URL,
       method: "GET",
       type: String, 
       success: function(response){
        
        for(var i = 0; i < response.items.length; i++)
        {
            var bookTitle = "<p>" + response.items[i].volumeInfo.title + "</p>";
            var bookAuthor = "<p>" + response.items[i].volumeInfo.authors + "</p>";
            var bookImage = '<img src = "' + response.items[i].volumeInfo.imageLinks.thumbnail + '"/>';
            
            $("#mainScreen").append("<div>" + bookImage + bookTitle + bookAuthor + "</div>");
        }   
       
       },
        fail: function(error){
            console.log(error);
        }
    });
    
});
