import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

setFilter = (name) =>{
  this.setState({
    filters:{
      type : name
    }
  })
}

fetchFilteredPets = () =>{
  let name= this.state.filters.type
  let url = "/api/pets"
  if(name !== "all"){
    url += `?type=${name}`
  }
  fetch(url)
    .then(res=>res.json())
    .then(pets => this.setState({
      pets:pets
    }))
}

adopted =(id) =>{
  const newPets= this.state.pets.map(pet => ((pet.id===id)? {...pet, isAdopted:true} : pet))

  this.setState({
    pets:newPets
  })
}


  render() {
    console.log(this.state);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.setFilter} onFindPetsClick={this.fetchFilteredPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser  pets={this.state.pets} onAdoptPet={this.adopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
