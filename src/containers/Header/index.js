import React, {Component} from 'react'
import NavLink from '../../components/NavLink'
export default class Header extends Component {
    render() {
        return (
            <header className='navbar navbar-default navbar-fixed-top' role='banner'>
                {/*<!--<div> HEADEEER {{hehe}} </div>-->*/}
                <div className='container'>
                    <div className='navbar-header'>
                        {/*<button className='navbar-toggle' type='button' data-toggle='collapse' data-target='.navbar-collapse'>*/}
                        {/*<span className='sr-only'>Toggle navigation</span>*/}
                        {/*<span className='icon-bar'></span>*/}
                        {/*<span className='icon-bar'></span>*/}
                        {/*<span className='icon-bar'></span>*/}
                        {/*</button>*/}

                        <NavLink onlyActiveOnIndex={true} to='/' className='navbar-brand'>Main page</NavLink>
                        {/*<!--<%= link_to 'Main page', phrases_path ,{:className=>'navbar-brand'}%>-->*/}
                    </div>
                    <nav className='collapse navbar-collapse' role='navigation'>
                        <ul className='nav navbar-nav'>
                            <li>
                                <a href='newphrase'>New phrase</a>
                                {/*<a href='newphrase' ng-click='authorizationCheck()'>New phrase</a>*/}
                                {/*<!--<%= link_to 'New phrase', new_phrase_path %>-->*/}
                            </li>
                            <li className='dropdown'>
                                <a href='#' className='dropdown-toggle'>Categories </a>
                                {/*<a href='#' className='dropdown-toggle' data-toggle='dropdown'>Categories <b className='caret'></b></a>*/}
                                <ul className='dropdown-menu'>
                                    {/*<li ng-repeat='category in categories'><a ui-sref='category({id: category.id})' >{{category.name}}</a></li>*/}
                                    {/*<li className='divider'></li>*/}
                                    {/*<!--<li><%= link_to 'Newest', category_path('Newest') %></li>-->*/}
                                    {/*<!--<li className='divider'></li>-->*/}
                                    {/*<!--<li><%= link_to 'All categories', category_path('All') %></li>-->*/}
                                </ul>
                            </li>

                        </ul>


                        {/*<div className='collapse navbar-collapse pull-right' >*/}
                        {/*<ul className='nav navbar-nav'>*/}
                        {/*<li ng-if='!user.signedIn'><a href='/login'>Log In</a></li>*/}
                        {/*<li ng-if='!user.signedIn'><a href='/register'>Register</a></li>*/}
                        {/*<li ng-if='user.signedIn'><a ui-sref='user({username: user.username})'>{{user.username}}</a></li>*/}
                        {/*<li ng-if='user.signedIn'><a href='#' ng-click='signOut()'>Log Out</a></li>*/}

                        {/*</ul>*/}
                        {/*</div>*/}
                        <div className='collapse navbar-collapse pull-right'>
                            <ul className='nav navbar-nav'>
                                <li><a href='/login'>Log In</a></li>
                                <li><a href='/register'>Register</a></li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}