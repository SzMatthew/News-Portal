import React, {Component} from 'react';
import Article from './Article/Article.js';
import SideNav from './Sidenav/Sidenav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './News.css';

class News extends Component
{
    constructor ()
    {
        super();
        this.state = {
            article_list: []
        }
     }

    componentDidMount()
    {
        fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=b5JuZaAhcBuJcQ20bGG0K8uCiAGTJrcg")
            .then(res => res.json())
            .then((result) =>
            { 
                console.log("result", result.results);
                this.setState({
                    article_list: result.results
                });
            })
     }

    render ()
    {
        return (         
            <div className="flexbox-container">
                <SideNav />
                <div className="news_panel col-xs-10 col-sm-9 col-md-10 col-lg-10">
                    {
                        this.state.article_list.map(article =>
                        { 
                            return (<Article key={article.id} article={article}/>);
                        })
                    }
                </div>
            </div>
        )
    }
}

export default News;
