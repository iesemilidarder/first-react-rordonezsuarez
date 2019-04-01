import React, {Component} from 'react';
import PropTypes from 'prop-types';





class SideBar extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const sidebar = this.props.sidebar;
        return ( <header className="row">
                <h1 className="col-md-12">

                </h1>
                <div className="col-md-12">
                    {sidebar.map((o) => {
                            return <a key={o.label} href={o.link}
                                      onClick={()=>this.props.onclick(o.id)}>{o.label}</a>
                        }
                    )}
                </div>
            </header>
        );

    }
}

SideBar.propTypes = {

    sidebar:PropTypes.array


};

export default SideBar;

