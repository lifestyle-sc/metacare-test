import { useState } from 'react';
import { ChatIcon } from '@heroicons/react/outline';
import {
  AccessTimeOutlined,
  CalendarTodayOutlined,
  CheckBoxOutlined,
  ChevronRight,
  Close,
  ExpandMore,
  PeopleOutline,
} from '@mui/icons-material';

const Navbar = () => {
  const [NavbarData, setNavbarData] = useState({
    admin: false,
    knowledgeBase: false,
    trainSam: false,
    agentInbox: false,
    helpCenter: false,
    analytics: false,
  });

  const { admin, knowledgeBase, trainSam, agentInbox, helpCenter, analytics } =
    NavbarData;

    const onMouseLeave = (e) => {
      let id
      if(e.target.id === ''){
        id = e.target.parentElement.id
  
        if(id === ''){
          id = id.parentElement.id
        }
      }else{
        id = e.target.id
      }
      setNavbarData((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    };

  const onMouseHover = (e) => {
    let id
    if(e.target.id === ''){
      id = e.target.parentElement.id

      if(id === ''){
        id = e.target.parentElement.parentElement.id
      }
    }else{
      id = e.target.id
    }

    //console.log(e.target)


   // console.log(id)
    setNavbarData((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };
  return (
    <div className="navbar">
      <header className="navbar--header--container">
      <div className="navbar--header">
        <h2 className="navbar--header--title">Meta Care</h2>
        <p className="navbar--header--desc">adeyinka@metacare.app</p>
      </div>
      <Close className='navbar--close' />
      </header>

      <main className="navbar--body">
        <div id="admin" className='navbar--body--container' onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
        <a className={`navbar--body--link ${admin && 'active'}`}>
          <PeopleOutline fontSize="small" />
          <p className="navbar--body--link--text">Admin</p>
          {!admin ? (
            <ChevronRight fontSize="medium" className="icon-muted" />
          ) : (
            <ExpandMore className="icon-muted" fontSize="medium" />
          )}
        </a>
        </div>
        
        <div id="knowledgeBase" className='navbar--body--container' onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
        <a className={`navbar--body--link ${knowledgeBase && 'active'}`}>
          <CheckBoxOutlined fontSize="small" />
          <p className="navbar--body--link--text">Knowledge Base</p>
          {!knowledgeBase ? (
            <ChevronRight fontSize="medium" className="icon-muted" />
          ) : (
            <ExpandMore className="icon-muted" fontSize="medium" />
          )}
        </a>
        </div>

        <div id="trainSam" className='navbar--body--container' onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
        <a className={`navbar--body--link ${trainSam && 'active'}`}>
          <CheckBoxOutlined fontSize="small" />
          <p className="navbar--body--link--text">Train SAM</p>
          {!trainSam ? (
            <ChevronRight fontSize="medium" className="icon-muted" />
          ) : (
            <ExpandMore className="icon-muted" fontSize="medium" />
          )}
        </a>
        </div>
        
        <div id="agentInbox" className='navbar--body--container' onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
        <a className={`navbar--body--link ${agentInbox && 'active'}`}>
          <CalendarTodayOutlined fontSize="small" />
          <p className="navbar--body--link--text">Agent Inbox</p>
          {!agentInbox ? (
            <ChevronRight fontSize="medium" className="icon-muted" />
          ) : (
            <ExpandMore className="icon-muted" fontSize="medium" />
          )}
        </a>
        </div>
        
        <div id="helpCenter" className='navbar--body--container' onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
        <a className={`navbar--body--link ${helpCenter && 'active'}`}>
          <AccessTimeOutlined fontSize="small" />
          <p className="navbar--body--link--text">Help Center</p>
          {!helpCenter ? (
            <ChevronRight fontSize="medium" className="icon-muted" />
          ) : (
            <ExpandMore className="icon-muted" fontSize="medium" />
          )}
        </a>
        </div>

        <div id="analytics" className='navbar--body--container' onMouseEnter={onMouseHover} onMouseLeave={onMouseLeave}>
        <a className={`navbar--body--link ${analytics && 'active'}`}>
          <ChatIcon
            style={{ transform: 'rotateY(3.142rad)' }}
            className="icon"
          />
          <p className="navbar--body--link--text">Analytics</p>
          {!analytics ? (
            <ChevronRight fontSize="medium" className="icon-muted" />
          ) : (
            <ExpandMore className="icon-muted" fontSize="medium" />
          )}
        </a>
        {analytics && <ul className='navbar--sub--list'>
          <li><button className='navbar--sub--list--item active--sub--list--item'>Teams</button></li>
          <li><button className='navbar--sub--list--item'>Knowledge Base</button></li>
          <li><button className='navbar--sub--list--item'>Training SAM</button></li>
          <li><button className='navbar--sub--list--item'>Help Center</button></li>
          </ul>}
        </div>

      </main>
    </div>
  );
};

export default Navbar;
