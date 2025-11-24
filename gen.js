fetch("./idea.json")
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        const db = data
        console.log(db)
        console.log(db[1].content)
        Theme(db)
    })
fetch("./contraint.json")
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        const db = data
        console.log(db)
        console.log(db[1].content)
        Contrainte(db)
    })


    /*
    Action onClick that'll search for a randomised number in the database, and return it with the elements of said item. 
    */

const Theme = (db) => {
    document.getElementById("theme").addEventListener("click", function(e){
        e.preventDefault()
        const random = Math.floor(Math.random() * db.length)
        const content = document.getElementById("theme-content")
        const author = document.getElementById("theme-author")
        const number = document.getElementById("theme-number")
        
        content.textContent = `${db[random].content}`
        author.textContent = `${db[random].author}`
        number.textContent = `N° ${random + 1} / ${db.length}`
    })
}

const Contrainte = (db) => {
    document.getElementById("contrainte").addEventListener("click", function(e){
        e.preventDefault()
        const random = Math.floor(Math.random() * db.length)
        const content = document.getElementById("contrainte-content")
        const author = document.getElementById("contrainte-author")
        const number = document.getElementById("contrainte-number")
        
        content.textContent = `${db[random].content}`
        author.textContent = `${db[random].author}`
        number.textContent = `N° ${random + 1} / ${db.length}`
    })
}