var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <form className={'contactForm'}>
                <input type={'text'} placeholder={'Name'} id={'inputYourName'} required={''} value={this.props.contact.firstName}></input>
                <input type={'text'} placeholder={'Surname'} id={'inputYourSurname'} required={''} value={this.props.contact.lastName}></input>
                <input type={'email'} placeholder={'Email'} id={'inputYourEmail'} required={''} value={this.props.contact.email}></input>
                <button type={'submit'}>Add contact</button>
            </form>
        );
    },
});
