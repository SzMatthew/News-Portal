import React, {Component} from 'react';
import './Article.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Muli_font.css';

class Article extends Component
{
    OpenArticle = (url) =>
    { 
        window.open(url);
    };

    render() {
        return (
            <div className="article-panel" onClick={ this.OpenArticle.bind(this, this.props.article.url)}>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <span className="title">{this.props.article.title}</span><br/>
                        <span className="date">{ this.props.article.published_date}</span><br/>
                        <span className="description">{this.props.article.abstract}</span>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Article;
