import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className='row no-padding'>
                <div className='col-sm-12 text-center no-padding'>
                    <div className=' bg'>

                        <div className='mail-text'>
                            <h2 className='welcome'>Welcome to ENGLI</h2>
                            <h3 className='welcome-title' >The main idea of the application is to create a web-based platform to help
                                to the group of people (just like Dunice Edge team) keeping common phrases
                                in English that could be frequently used in chats with customers. Users
                                suggest their phrases / words, others vote for it or unvote - this way,
                                the group generate a slang that is helpful in conversations. </h3>
                            <button className='btn btn-default btn-lg btn-welcome'>Let's get started!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
