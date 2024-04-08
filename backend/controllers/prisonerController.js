const prisoners = [
    {
        'name' : 'Given',
    'age': 25,
    'crime' : 'Frustated murder',
    'sentence' : '25 years',
    },
    {
        'name' : 'Nico Faith',
    'age': 23,
    'crime' : 'Illegal possesion of Drugs and firearms',
    'sentence' : '50 years',
    },
    {
        'name' : 'Irish Lince',
    'age': 22,
    'crime' : 'adultery',
    'sentence' : '10 years',
    }
    
]

module.exports.prisoners= (req, res) => {

    res.json({'PRISONERS' : prisoners});
};

//search prisoner by id using /prisoner/id

module.exports.prisoner =  (req, res) => {
    const { id } = req.params

    console.log(id)

    const matchingPrisoner = prisoners.filter(
    (prisoner) => prisoner.id === parseInt(id)

    )

    if (matchingPrisoner.length === 0) {
        res.status(404).json({'error': `Prisoner with ${id} not found`})
    }

    else 
    {
        res.status(200).json({'Prisoner': matchingPrisoner[0]}) 
    }
}


// req.query 
// route:  prisoner/greet/person?name=value


module.exports.greet = (req, res) => {

    const { name } = req.query

    console.log(name)

    res.status(200).json({'HELLO': name})
 
}

// route:  prisoner/search/prisoner?id=1&name=Given
     
module.exports.searchPrisoner = (req, res) => {
    const {id, name} = req.query
    console.log(id, name)

    const matchingPrisoner = prisoners.filter(

    (prisoner) => prisoner.id === parseInt(id) && prisoner.name === name 
    
    )

    if(matchingPrisoner.length === 0)
     {
        res.status(404).json({'error': `Prisoner with ${id} and ${name}  not found`})
    }
    
    else
    {
        res.status(200).json({'found': matchingPrisoner[0]})
    }
}
