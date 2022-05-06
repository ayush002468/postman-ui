import React from "react";
import collection from "../../img/collection.png";
import History from "../../img/history.png";
import "../Sidenav/Sidenav.css";

const Sidenav = (
  history,
  // setHeaders,
  // setMethod,
  // setUrl,
  // setBody
) => {

  // const clickHistoryItemHandler = (e) => {
  //   const itemId = e.currentTarget.Math.random();
  //   console.log(itemId);
  //   const requestItemConfig = history.find((item) => item.id === itemId);
  //   console.log(requestItemConfig);

  //   // set the data that exist in request item configuartion
  //   setMethod(requestItemConfig.method);
  //   setHeaders(requestItemConfig.headers);
  //   setUrl(requestItemConfig.url);
  //   setBody(requestItemConfig.body);
  // };
  return (
    <div className="sideNav-container">
      <div className="sideNav">
        <div className="sideNav-content">
          <div className="left-sidebar-wrapper">
            <div className="left-sidebar-header">
              <div className="left-sidebar-header__left">
                <div className="left-sidebar__left-workspace-name">
                  Scratch Pad
                </div>
              </div>
              <div className="left-sidebar-header__right">
                <div className="left-sidebar-header__right-buttons">
                  <div className="btn btn-secondry btn-small new-button">
                    New
                  </div>
                  <div className="btn btn-secondry btn-small import-button">
                    Import
                  </div>
                </div>
              </div>
            </div>
            <div className="left-sidebar-container">
              <div className="left-sidebar__container-uncollapsed">
                <div className="sidebar-list-container">
                  <div className="left-sidebar__container-uncollapsed-tab">
                    <span>
                      <img
                        src={collection}
                        alt="collection-img"
                        style={{
                          display: "inline-flex",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </span>
                    <div className="left-sidebar__container-uncollapsed-tab-title">
                      Collection
                    </div>
                  </div>
                  <div className="left-sidebar__container-uncollapsed-tab">
                    <span>
                      <img
                        src={collection}
                        alt="collection-img"
                        style={{
                          display: "inline-flex",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </span>
                    <div className="left-sidebar__container-uncollapsed-tab-title">
                      Monitors
                    </div>
                  </div>
                  <div className="left-sidebar__container-uncollapsed-tab">
                    <span>
                      <img
                        src={collection}
                        alt="collection-img"
                        style={{
                          display: "inline-flex",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </span>
                    <div className="left-sidebar__container-uncollapsed-tab-title">
                      APIs
                    </div>
                  </div>
                  <div className="left-sidebar__container-uncollapsed-tab">
                    <span>
                      <img
                        src={collection}
                        alt="collection-img"
                        style={{
                          display: "inline-flex",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </span>
                    <div className="left-sidebar__container-uncollapsed-tab-title">
                      Environments
                    </div>
                  </div>
                  <div className="left-sidebar__container-uncollapsed-tab">
                    <span>
                      <img
                        src={collection}
                        alt="collection-img"
                        style={{
                          display: "inline-flex",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </span>
                    <div className="left-sidebar__container-uncollapsed-tab-title">
                      Mock Servers
                    </div>
                  </div>
                  <div className="left-sidebar__container-uncollapsed-tab">
                    <span>
                      <img
                        src={collection}
                        alt="collection-img"
                        style={{
                          display: "inline-flex",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </span>
                    <div className="left-sidebar__container-uncollapsed-tab-title">
                      Flows
                    </div>
                  </div>
                  <div className="left-sidebar__container-uncollapsed-tab active">
                    <span>
                      <img
                        src={History}
                        alt="history_img"
                        style={{
                          display: "inline-flex",
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </span>
                    <div className="left-sidebar__container-uncollapsed-tab-title">
                      History
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-sidebar-cotainer__right">
                <div className="left-sidebar-container-tab-content-wrapper">
                  <div className="history-sidebar">
                    <div className="history-sidebar-wrapper">
                      <div className="history-sidebar-menu">
                        <div className="history-sidebar__action-container">
                          <div className="input-search-group">
                            <div className="input-search-group__wrapper"></div>
                            <div className="input-search-group__input-wrapper">
                              <input
                                type="search"
                                className="input input-search history-sidebar__filter"
                                spellCheck="false"
                                title="search"
                              />
                            </div>
                            
                          </div>
                        </div>
                        
                      </div>
                      <div>
                      <ul className="list-group">
                              {/* <li className="list-group-item d-flex justify-content-center align-items-center pe-2 border-1 border-warning">
                                <h3 className="text-warning">History Table</h3>
                              </li> */}
                              {!history.history.length ? (
                                <div className="text-center">
                                  No history items available
                                </div>
                              ) : (
                                history.history.map((requestItem) => (
                                  <li
                                    key={requestItem.id}
                                    id={requestItem.id}
                                    className="list-group-item d-flex btn justify-content-between align-items-center pe-2 border-1 border-top-0"
                                    // onClick={clickHistoryItemHandler}
                                  >
                                    {requestItem.url}
                                    <span className="badge bg-primary rounded-pill">
                                      {requestItem.method}
                                    </span>
                                  </li>
                                ))
                              )}
                            </ul>
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
  );
};

export default Sidenav;
