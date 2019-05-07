var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            <div className={"contactItem"}>
                <img className={"contactImage"} src={"images/contact.png"} alt={"contactImage"}></img>
                <p className={"contactLabel"}>Name: {this.props.contact.firstName}</p>
                <p className={"contactLabel"}>Surname: {this.props.contact.lastName}</p>
                <a href={'mailto:' + this.props.item.email}>{this.props.item.email}</a>
            </div>
            // React.createElement('div', {className: 'contactItem'},
            //     React.createElement('img', {
            //         className: 'contactImage',
            //         src: 'images/contact.png',
            //         alt: 'contactImage'
            //     }),

            //     React.createElement('p', {className: 'contactLabel'}, 'Name: ' + this.props.item.firstName),
            //     React.createElement('p', {className: 'contactLabel'}, 'Surname: ' + this.props.item.lastName),
            //     React.createElement('a', {className: 'contactEmail',  href: 'mailto:' + this.props.item.email},
            //         this.props.item.email
            //     )
            // )
        )
    },
});
