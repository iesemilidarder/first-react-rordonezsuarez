import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ArticleComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const article = this.props.article;
        return (
            <div>
                {article}
            </div>
        );
    }
}

ArticleComponent.propTypes = {

    article: PropTypes.array


};

export default ArticleComponent;
