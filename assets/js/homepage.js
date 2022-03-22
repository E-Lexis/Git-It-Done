var getUserRepos = function (user) {
    var apiURL = "https://api.github.com/users/" + user + "/repos";
    fetch(apiURL)
        .then(function (reponse) {
            reponse.json().then(function (data) {
                console.log(data)});
        });
};

getUserRepos("e-lexis");