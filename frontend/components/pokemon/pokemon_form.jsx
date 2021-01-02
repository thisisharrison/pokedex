import React from 'react';

class PokemonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            attack: "",
            defense: "",
            poke_type: 'fire',
            image_url: "",
            move_1: "",
            move_2: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPokemon(this.state).then(newPoke => {
            this.props.history.push(`pokemon/${newPoke.id}`);
        });
    }

    update(property) {
        return e => this.setState({[property] : e.target.value})
    }

    errors() {
        const { errors } = this.props;
        return errors.map((e) => <li className="error" key={e}>{e}</li>);
    }

    render() {
        const { name, attack, defense, poke_type, image_url, move_1, move_2 } = this.state;
        const POKEMON_TYPES = [
            'fire',
            'electric',
            'normal',
            'ghost',
            'psychic',
            'water',
            'bug',
            'dragon',
            'grass',
            'fighting',
            'ice',
            'flying',
            'poison',
            'ground',
            'rock',
            'steel'
        ]
        const typeOptions = POKEMON_TYPES.map((type, idx) => <option value={type} key={idx}>{type}</option>);
        
        return (
            <section className="pokemon-detail">
                <ul>{this.errors()}</ul>
                <form className="pokemon-form" onSubmit={this.handleSubmit}>
                    <input type="text"
                        value={name} 
                        placeholder="Name"
                        onChange={this.update('name')}/>

                    <input type="text"
                        value={image_url}
                        placeholder="Image Url"
                        onChange={this.update('image_url')} />
                    
                    <select
                        value={poke_type}
                        defaultValue="Select Pokemon Type"
                        onChange={this.update('poke_type')}>
                        {typeOptions}
                    </select>

                    <input type="number"
                        value={attack}
                        placeholder="Attack"
                        onChange={this.update('attack')} />

                    <input type="number"
                        value={defense}
                        placeholder="Defense"
                        onChange={this.update('defense')} />

                    <input type="text"
                        value={move_1}
                        placeholder="Move 1"
                        onChange={this.update('move_1')} />
                    
                    <input type="text"
                        value={move_2}
                        placeholder="Move 2"
                        onChange={this.update('move_2')} />
                    
                    <button>Create Pokemon</button>
                </form>
            </section>
        )
    }

}

export default PokemonForm;