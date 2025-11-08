fetch("./idea.json")
    .then(function(data){
        return data.json()
    })
    .then(function(data){
        const db = data
        console.log(db)
        console.log(db[1].content)
        onClick(db)
    })


    /*
    Action onClick that'll search for a randomised number in the database, and return it with the elements of said item. 
    */

const onClick = (db) => {
    document.getElementById("generate").addEventListener("click", function(e){
        e.preventDefault()
        const random = Math.floor(Math.random() * db.length)
        const type = document.getElementById("type")
        const content = document.getElementById("content")
        const author = document.getElementById("author")
        const number = document.getElementById("number")
        
        type.textContent = `${db[random].type}`
        content.textContent = `${db[random].content}`
        author.textContent = `${db[random].author}`
        number.textContent = `N° ${random + 1} / ${db.length}`
    })
}