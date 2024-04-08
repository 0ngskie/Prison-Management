const guards =[
    {
        'id' : 1,
        'name' : "eisBlume",
        'rank' : "Captain",
        'yearsOfService' : 12,
        'active' : true
    },
    {
        'id' : 2,
        'name' : "0ngskie",
        'rank' : "2nd Lieutenant",
        'yearsOfService' : 10,
        'active' : true
    },
    {
        'id' : 3,
        'name' : "Senko",
        'rank' : "sergeant",
        'yearsOfService' : 10,
        'active' : true
    },
    {
        'id' : 4,
        'name' : "Guard01",
        'rank' : "Corporal",
        'yearsOfService' : 8,
        'active' : true
    },
    {
        'id' : 5,
        'name' : "Guard02",
        'rank' : "Cadet",
        'yearsOfService' : 4,
        'active' : false
    }
]



// route: /guard/all 

module.exports.all = (req, res) => {

    res.json({'Guards' : guards})

}
// route: /guard/search/:id

module.exports.search = (req, res) => {
    const{id} = req.params
    console.log(id)

    const matchingGuard = guards.filter(
        (g) => g.id === parseInt(id)
    )

    if (matchingGuard.length === 0) {
        res.status(404).json({'error' : `Guard with ${id} cannot be found`})
    }
    else{
        res.status(200).json({'Guard' : matchingGuard[0]})
    }
}

// route: /guard/:id/:rank/:yearOfService
module.exports.guard = (req, res) => {
    const{id, rank, yearsOfService} = req.query
    console.log(id, rank, yearsOfService)

    const matchingGuard = guards.filter(

        (g) => g.id === parseInt(id) && g.rank === rank && g.yearsOfService === parseInt(yearsOfService)

    )
    if(matchingGuard.length === 0){
        res.status(404).json({'error' : `Guard with ${id}, ${rank}, and ${yearsOfService} cannot be found`})
    }
    else{
        res.status(200).json({'Found' : matchingGuard[0]})
    }
}

// route: /guard/delete/:id
module.exports.delete = (req, res) => {
    const{id} = req.query

    const matchingGuard = guards.filter(
        (g) => g.id === parseInt(id)
    )
    if(matchingGuard.length === 0){
        res.status(404).json({'error' : `Guard with ${id} cannot be found`})
    }
    else{
        guards.delete(id)
        res.status(200).json({'Success' : `deleted the guard with id: ${id}`})
    }
}