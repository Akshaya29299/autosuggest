//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("search-bar");
var searchSuggestions = document.getElementById("search-suggestions");

searchBar.addEventListener("input", function(){
    //the function will be called everytime when a user enters a search element or a phrase 
    //Get user typed data
    //Use user typed data in the query in the API call
    //API Call
    //Append to all the search suggestions to div tag in UI
    var query = searchBar.value.trim();
    console.log(query);
    fetchSuggestions(query);

})

function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";

    fetch(fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        // console.log(data);
        showSuggestion(data);
    })
    .catch(function(err){
        console.log("Error : " + err);
    })
}

function showSuggestion(data){
    var values = data.results;
    if(data.count === 0){
        searchSuggestions.innerHTML = "<div>No Matching Results Found</div>";
    }else{
        var HTMLString = "";
        for(var i = 0 ; i < values.length ; i++){
            HTMLString += "<div> <span class = 'suggestion-item'>" + values[i].text + "</span><span class = 'suggestion-item'>" + " " + values[i].weight + "</span></div>";
        }

        searchSuggestions.innerHTML = HTMLString;

    }
}