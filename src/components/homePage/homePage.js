import React from 'react'
import './homePage.css'
import collection from '../../img/collection.png'
import Sidenav from '../Sidenav/Sidenav'


const HomePage = () => {
  return (
    <div className='homePage-group verticle'>
        <div className='homePage-container'>
            <div className='homePage' style={{height:"1198px" , width:"1128px"}}>
                <div className='homepage-content'>
                    <div className='sideNav-group horizontal'>
                        <Sidenav/>
                        <div className='homePage-container'>
                            <div className='homePage'>
                                <div className='homePage-builder'>
                                    <div className='homePage-header'>
                                        <div className='homePage-tabs-wrapper'>
                                            <div className='homePage-tabs'>
                                                <div className='homePage-tabs is-active'>
                                                    <div className='homePage-tabs-title__wrapper'>
                                                        <div className='homePage-text__wrapper'>
                                                            <div className='homePage-text-icon'>
                                                                <div className='homePage-icon-wrapper'>
                                                                    <div className='home-icon-get'>
                                                                        GET
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='homePage-tab-name'>
                                                            Untitled Request
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className='homePage-tabs-actions'>
                                                    <div className='btn create'>
                                                        <img src={collection} style={{display:'inline-flex', width:"16px" , height:"16px"}}/>
                                                    </div>
                                                    <div className='homePage-tabs-options-wrapper'>
                                                        <div className='dropdown tab-actions-dropdown'>
                                                            <div className='dropdown-button'>
                                                                <div className='btn btn-tertiary homePage-tab-options'>
                                                                    <img src={collection} style={{display:'inline-flex', width:"16px" , height:"16px"}}/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                        </div>
                                        <div className='environment-wrapper'>
                                            <div className='enviroment-handler'>

                                            </div>
                                        </div>
                                        <div className='environment-container'>
                                            <div className='environment-selector-container'>
                                                <div className='environment-selector-wrapper'>
                                                    <div className='input-select-wrapper'>
                                                        <div className='input-search-group'>
                                                            <div className='input-search-group__input-wrapper'>
                                                                <input type="search" className='input input-search' value="no Environment" title="no Environment"/>
                                                            </div>
                                                        </div>
                                                        <div className='btn dropdown-button'>
                                                            <img src={collection} style={{display:'inline-flex', width:"16px" , height:"16px"}} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='environment-view'>
                                                <div className='dropdown'>
                                                    <div className='dropdown-button'>
                                                        <div className='btn btn-icon'>
                                                        <img src={collection} style={{display:'inline-flex', width:"16px" , height:"16px"}} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='homePage-content'>

                                    </div>

                                </div>

                            </div>

                        </div> 

                    </div>
                    
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomePage