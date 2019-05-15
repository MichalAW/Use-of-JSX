var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <form className='contactForm'>
                <label htmlFor='inputYourName'>Name:</label>
                <input 
                    type='text' 
                    placeholder='Name' 
                    id='inputYourName'
                    required 
                    value={this.props.contact.firstName}
                />
                <label htmlFor='inputYourSurname'>Surname:</label>
                <input 
                    type='text' 
                    placeholder='Surname' 
                    id='inputYourSurname' 
                    required
                    value={this.props.contact.lastName}
                />
                <label htmlFor='inputYourEmail'>Email:</label>
                <input 
                    type='email' 
                    placeholder='Email' 
                    id='inputYourEmail' 
                    required
                    value={this.props.contact.email}
                />
                <button type='submit'>Add contact</button>
            </form>
        );
    },
});
