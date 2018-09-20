import React from 'react'

class Filters extends React.Component {


  state={
    filter:"all"
  }

  setFilter = (event) =>{
    this.props.onChangeType(event.target.value)
    this.setState({
      filter:event.target.value
    })
  }

  updatePets= () =>{
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.setFilter}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
        <button onClick= {this.updatePets}className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
