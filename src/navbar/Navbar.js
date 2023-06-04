import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'

const Navbar = ({user, loggedIn, logout}) => {
    let isAdmin = false;
    if(user.roles.includes("admin") ){
        isAdmin = true;
    }
    return (
        <>
            <PrimaryNav>
                <Hamburger/>
                <Menu>
                    <MenuLink to="/trips" ativestyle="true">
                      all trips
                    </MenuLink>
                   
                    <MenuLink to="/createtrip" ativestyle="true">
                      create trip
                    </MenuLink>
                    <MenuLink to="/tripsadmin" ativestyle="true">
                      all trips admin
                    </MenuLink>
                    
                    {loggedIn && 
                        <MenuLink to="/" ativestyle="true">
                            1
                        </MenuLink>
                    }
                    
                   
                    {loggedIn &&
                        <MenuLink to= "/" ativestyle="true">
                            2
                        </MenuLink>
                    }
                   
                    {loggedIn && isAdmin &&
                        <MenuLink to="/" ativestyle="true">
                            3
                        </MenuLink>
                    }
                 
                    {loggedIn && isAdmin &&
                        <MenuLink to="/" ativestyle="true">
                            4 
                        </MenuLink>
                    }
                    
                    {loggedIn &&
                        <MenuLink to="/" ativestyle="true">
                            5
                        </MenuLink>
                    }
                    
                    {loggedIn &&
                        <MenuLink to="/" ativestyle="true">
                            6
                        </MenuLink>
                    }
                  
                    {loggedIn &&
                        <MenuLink to="/" ativestyle="true">
                            7
                        </MenuLink>
                    }

                    {loggedIn && isAdmin &&
                        <MenuLink to="/Settings" ativestyle="true">
                            Settings
                        </MenuLink>
                    }
                   

                    
                    {loggedIn ? (<MenuLink to="/" ativestyle="true" onClick={logout}> Logout </MenuLink> ) : (<MenuLink to="/login" ativestyle="true"> Login </MenuLink>)}

                   
                </Menu>
            </PrimaryNav>
        </>
  )
}
export default Navbar