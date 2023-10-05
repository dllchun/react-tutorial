import './topbar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo">Vincentsocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search/>
            <input placeholder='Search for friend, post or video' className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcon">
            <div className="topBarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div>            <div className="topBarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src='/assets/person/1.jpeg' className='topbarImg'></img>
        </div>
    </div>
  )
}
