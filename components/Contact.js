var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            <div className='contactItem'>
                <img className={'contactImage'} src={'images/contact.png'} alt={'contactImage'}></img>
                <p className={'contactLabel'}>Name: {this.props.contact.firstName}</p>
                <p className={'contactLabel'}>Surname: {this.props.contact.lastName}</p>
                <a href={'mailto:' + this.props.item.email}>{this.props.item.email}</a>
            </div>
        )
    },
});
