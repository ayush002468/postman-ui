import React, { useState } from 'react'
import './homePage.css'
import collection from '../../img/collection.png'
import view from '../../img/view.png'
import dots from '../../img/dots.svg'
import plus from '../../img/plus.png'
import Sidenav from '../Sidenav/Sidenav'


const HomePage = () => {
    const[dropDown,setdropDown]=useState(['Get','Post','Put','Delete'])
    const[environment, setEnvironment] = useState(['No environment'])
    const[text , setText] = useState(['Text','JSON','XML','HTML'])
    const[response , setResponse] = useState(['Save Response', 'Save Response as File', 'Save Response as Example'])
    const[send , setSend] = useState(['Send', 'Send as File', 'Send as Example'])
    const[dropDownValue, setdropDownValue] = useState('')
    const[environmentValue,setEnvironmentValue]=useState('');
    const[textValue,setTextValue]=useState('');
    const[responseValue,setResponseValue]=useState('');
    const[sendValue,setSendValue]=useState('');
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
                                                <div className='homePage-tabs-actions actions-header'>
                                                    <div className='btn create'>
                                                        <img src={plus} alt="plus-button" style={{display:'inline-flex', width:"16px" , height:"16px"}}/>
                                                    </div>
                                                    <div className='homePage-tabs-options-wrapper'>
                                                        <div className='dropdown tab-actions-dropdown'>
                                                            <div className='dropdown-button'>
                                                                <div className='btn btn-tertiary homePage-tab-options'>
                                                                    <img src={dots} alt="dots" style={{display:'inline-flex', width:"16px" , height:"16px"}}/>
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
                                                            <select className='input input-search' value={environmentValue} onChange={(e)=>setEnvironmentValue(e.target.value)}>
                                                                                        {environment.map((item,index)=><option value={item} key={index}>{item}</option>)}
                                                                                    </select>
                                                            </div>
                                                        </div>
                                                        {/* <div className='btn dropdown-button'>
                                                            <img src={collection} style={{display:'inline-flex', width:"16px" , height:"16px"}} />
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='environment-view'>
                                                <div className='dropdown'>
                                                    <div className='dropdown-button'>
                                                        <div className='btn btn-icon'>
                                                        <img src={view} alt="view_img" style={{display:'inline-flex', width:"16px" , height:"16px"}} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='homePage-content'>
                                        <div className='sideNav-group horizontal'>
                                            <div className='homePage-container'>
                                                <div className='homePage'>
                                                    <div className='main-container'>
                                                        <div className='tab-header'>
                                                            <div className='tab-header-container'>
                                                                <div className='tabheader-name'>
                                                                    <div className='tabheader-name-wrapper' title='Untitled response'>
                                                                         <div className='tabheader-name-input'>
                                                                             Untitled request
                                                                        </div>           
                                                                    </div>
                                                                </div>
                                                                <div className='tabheader-actions'>
                                                                    <div className='save-button'>
                                                                    </div> 
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='url-container'>
                                                            <div className='url-container-main'>
                                                                <div className='url-container-main__group'>
                                                                     <div className='url-editor'>
                                                                         <div className='url-editor__list-wrapper'>
                                                                             <div className='input-search-group'>
                                                                                 <div className='input-search-group__input-wrapper'>
                                                                                 {/* <input type="search" className='input input-search' value="GET" title="GET"/> */}
                                                                                    <select className='input input-search' value={dropDownValue} onChange={(e)=>setdropDownValue(e.target.value)}>
                                                                                        {dropDown.map((item,index)=><option value={item} key={index}>{item}</option>)}
                                                                                    </select>
                                                                                 </div>

                                                                             </div>
                                                            
                                                                               
                                                                         </div>
                                                                     </div>   
                                                                     <div className='url-group'>
                                                                         <div className='url-main'>
                                                                            <div className='url-editor-root'>
                                                                                <div className='url-editor__placeholder'>
                                                                                    <div className='url-editor__placeholder-inner'>
                                                                                        Enter Request URL
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                         </div>
                                                                     </div>    
                                                                </div>
                                                                <div className='url-container-button__group'>
                                                                    <div className='url-container__send-button'>
                                                                        {/* <div className='dropdown'>
                                                                            <div className='btn-group btn-group-separator'>
                                                                                <div className='btn'>
                                                                                    <span>Send</span>
                                                                                </div>
                                                                                <div className='btn'>
                                                                                <img src={collection} style={{display:'inline-flex', width:"16px" , height:"16px"}} /> 
                                                                                </div>

                                                                            </div>

                                                                        </div> */}
                                                                        <select className='send_button' value={sendValue} onChange={(e)=>setSendValue(e.target.value)}>
                                                                                        {send.map((item,index)=><option value={item} key={index}>{item}</option>)}
                                                                                    </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='homePage-group verticle'>
                                                            <div className='homePage-container'>
                                                                <div className='homePage-request-editor'>
                                                                    <div className='homePage-header params-content'>
                                                                        <div className='homePage-tabs-wrapper'>
                                                                            <div className='homePage-tabs'>
                                                                                <div className='tabs tabs-primary'>
                                                                                    <div className='tab tab-primary is-active'>
                                                                                        <div className='tab-text-wrapper'>
                                                                                            <span>Params</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='tab tab-primary'>
                                                                                        <div className='tab-text-wrapper'>
                                                                                            <span>Authorization</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='tab tab-primary'>
                                                                                        <div className='tab-text-wrapper'>
                                                                                            <span>Headers</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='tab tab-primary'>
                                                                                        <div className='tab-text-wrapper'>
                                                                                            <span>Body</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='tab tab-primary'>
                                                                                        <div className='tab-text-wrapper'>
                                                                                            <span>Pre-request-Script</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='tab tab-primary'>
                                                                                        <div className='tab-text-wrapper'>
                                                                                            <span>Tests</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='tab tab-primary'>
                                                                                        <div className='tab-text-wrapper'>
                                                                                            <span>Settings</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='homePage-tabs-actions'>
                                                                                <div className='btn btn-text btn-action'>
                                                                                    Cookies
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='homepage-content'>
                                                                        <div className='url_editor-group'>
                                                                            <div className='editor-title'>
                                                                                <span>Query Params</span>
                                                                            </div>
                                                                            <div className='editor_params'>
                                                                                <div className='key_value-editor'>
                                                                                    <div className='key_value-form-editor'>
                                                                                        <div className='key_value-header'>
                                                                                            <div className='key_value-header-row'>
                                                                                                <div className='key_value-form-actions'>

                                                                                                </div>
                                                                                                <div className='suggestion_group'>
                                                                                                    <div className='key-value-header-item'>
                                                                                                        <div className='header-content'>
                                                                                                            KEY
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='key-value-header-item'>
                                                                                                        <div className='header-content'>
                                                                                                            VALUE
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='key-value-header-item'>
                                                                                                        <div className='header-content'>
                                                                                                            DESCRIPTION
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='bulk__editor-controls'>
                                                                                                        <div className='key_value-toggle'>
                                                                                                            <div className='dropdown'>
                                                                                                                <div className='btn btn-text'>

                                                                                                                <img src={dots} alt="dot_img" style={{display:'inline-flex', width:"16px" , height:"16px"}} />
                                                                                                                </div>

                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div className='btn btn-text bulk-editor'>
                                                                                                            Bulk Edit
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>

                                                                                            </div>
                                                                                        </div>
                                                                                        <div className='key-value__body'>
                                                                                        <div className='key_value-header-row'>
                                                                                                <div className='key_value-form-actions'>

                                                                                                </div>
                                                                                                <div className='suggestion_group'>
                                                                                                    <div className='key-value-header-item'>
                                                                                                        <div className='key-value-placeholder'>
                                                                                                            KEY
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='key-value-header-item'>
                                                                                                        <div className='key-value-placeholder'>
                                                                                                            VALUE
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='key-value-header-item'>
                                                                                                        <div className='key-value-placeholder'>
                                                                                                            DESCRIPTION
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>

                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className='body-resizehandler'>
                                                                            <div className='resize-body'>

                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className='homePage-content'>
                                                                        <div className='footer-response-container'>
                                                                            <div className='footer-response__header'>
                                                                                <div className='response-section-top'>
                                                                                    <div className='response-section-tabs'>
                                                                                        <div className='response-tab'>
                                                                                            <div className='tabs'>
                                                                                                <div className='tab tab-primary is-active'>
                                                                                                    <div className='tab-text-wrapper'>
                                                                                                        <span>Body</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='tab tab-primary'>
                                                                                                    <div className='tab-text-wrapper'>
                                                                                                        <span>Cookies</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='tab tab-primary'>
                                                                                                    <div className='tab-text-wrapper'>
                                                                                                        <span>Headers</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='tab tab-primary'>
                                                                                                    <div className='tab-text-wrapper'>
                                                                                                        <span>TestResult</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='response-section-meta'>
                                                                                        <div className='response-meta-viewer'>
                                                                                            <div className='response-meta-item'>
                                                                                                <span>Status:</span>
                                                                                            </div>
                                                                                            <div className='response-meta-time'>
                                                                                                <span>Time:</span>
                                                                                            </div>
                                                                                            <div className='response-action-container'>
                                                                                                <div className='response-action'>
                                                                                                    {/* <div className='dropdown'>
                                                                                                        <div className='dropdown-button'>
                                                                                                            <div className='btn btn-text response-save-button'>
                                                                                                                <span>Save response</span>
                                                                                                                <img src={collection} style={{display:'inline-flex', width:"16px" , height:"16px"}} /> 
                                                                                                            </div>

                                                                                                        </div>
                                                                                                    </div> */}
                                                                                                    <select className='save-response-button btn-text' value={responseValue} onChange={(e)=>setResponseValue(e.target.value)}>
                                                                                        {response.map((item,index)=><option value={item} key={index}>{item}</option>)}
                                                                                    </select>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>  
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className='footer-response__content'>
                                                                                <div className='response-body-viewer'>
                                                                                    <div className='text-editor'>
                                                                                        <div className='text-editor-div'>
                                                                                            <div className='text-editor-primary'>
                                                                                                <div className='tabs tab-secondry'>
                                                                                                    <div className='tab-text-wrapper'>
                                                                                                        Pretty
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='tabs tab-secondry'>
                                                                                                    <div className='tab-text-wrapper'>
                                                                                                        Raw
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='tabs tab-secondry'>
                                                                                                    <div className='tab-text-wrapper'>
                                                                                                        Preview
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className='tabs tab-secondry'>
                                                                                                    <div className='tab-text-wrapper'>
                                                                                                        Visualize
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <div className='dropdown text-editor'>
                                                                                                       <select className='btn btn-secondary btn-small' value={textValue} onChange={(e)=>setTextValue(e.target.value)}>
                                                                                        {text.map((item,index)=><option value={item} key={index}>{item}</option>)}
                                                                                    </select>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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