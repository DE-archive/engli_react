import React, {Component} from 'react'
import NavLink from '../../components/NavLink'
import Header from '../Header'
import Footer from '../Footer'
import Title from '../Title'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Title/>
                <div className='container'>

                    <ul className='nav nav-pills'>
                        {/* добавили ссылку на главную страницу */}
                        <li><NavLink onlyActiveOnIndex={true} to='/'>Главная</NavLink></li>
                        <li><NavLink to='/admin'>Админка</NavLink></li>
                        <li><NavLink to='/list'>Список жанров</NavLink></li>
                    </ul>
                    {this.props.children}

                </div>
                <Footer/>
            </div>

        )
    }
}