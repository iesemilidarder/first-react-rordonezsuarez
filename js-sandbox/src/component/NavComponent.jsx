import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
class NavComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const navbar = this.props.navbar;
        return ( <header className="row">
            <h1 className="col-md-12">

            </h1>
            <div className="col-md-12">
                {navbar.map((o) => {
                        return <Button color="light" key={o.label}  href={o.link}
                                  onClick={()=>this.props.onclick(o.id)}>{' '}{o.label}</Button>
                    }
                )}
            </div>
        </header>
        );

    }
}

NavComponent.propTypes = {

    navbar:PropTypes.array


};

export default NavComponent;

