import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            active: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler() {
        this.setState({ active: this.state.active ? false : true });
    }
    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <img id="logo" className="pull-left" src="../../../src/static/img/logo2.png" alt="logo" />
                            <a className="navbar-brand" href="/">RED Grenade</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className={this.state.active ? "active touchable" : "touchable"}><a onClick={this.onClickHandler}>MENU</a></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/"><img src="../src/static/img/home.png" alt="home" /><span>HOME</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/category/global"><img src="../src/static/img/glo.png" alt="global" /><span>GLOBAL NEWS</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/category/trend"><img src="../src/static/img/trend.png" alt="trend" /><span>TREND</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/category/economy"><img src="../src/static/img/eco.png" alt="economy" /><span>ECONOMY</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/category/tech"><img src="../src/static/img/tech.png" alt="tech" /><span>TECHNOLOGY</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/category/sport"><img src="../src/static/img/sport.png" alt="sport" /><span>SPORT</span></Link></li>
                                <li className={this.state.active ? "active" : " "}><Link to="/category/search"><img src="../src/static/img/search.png" alt="search" /><span>SEARCH</span></Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}