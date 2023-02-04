function Storage(){

}
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    /* Daha önceden array lere stringler atılıyordu. Ancak şimdi
    objeleri atmaya çalışıyoruz. Film objelerini atıyoruz.
    [

        {title:"sadasdas",director:"sadasdasd",url:"123123"}
        {title:"sadasdas",director:"sadasdasd",url:"123123"}

    ]
    */
   localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage = function(){
    let films;

    if (localStorage.getItem("films") === null) {
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films")); 
        // JSON.parse ile filmleri array haline çevirip array olarak aldık.

    }
    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    let films = this.getFilmsFromStorage();
    // splice, arraydan silme
    films.forEach(function(film,index){
        if(film.title === filmTitle) {
            films.splice(index,1); // films array inden splice yardımıyla 
            //objenin bulunduğu index ten 1 tane silinecek. Yani sadece o objeyi sileceğiz
        }
    });
    // Yukarı da array içinden objeyi sildik. Ve bunu tekrardan yazmamız gerekiyor.

    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function(){

    localStorage.removeItem("films"); // films key ini kaldırırsak tüm filmler silinir.
}