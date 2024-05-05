import React from 'react'

import "./NavigationButton.css";

export const NavigationButton = () => {

    const [navigationMenuOpen, toggleNavigationMenuOpen] = React.useState(false);

    const [page, setPage] = React.useState("");

    const [mouseDown, toggleMouseDown] = React.useState(false);

    React.useEffect(() => {

        if (window.location.pathname.includes('post')) {
            setPage("Shared post");
        } else {
            setPage("App Download");
        }

    }, [window.location.pathname]);

    const goHome = () => {
        window.location.pathname = "/";
    }

    return (
        <>
            <div style={{
                width: 3,
                height: 35,
                margin: "0px 10px 0px 5px",
                backgroundColor: 'white'
            }} />
            <div 
            onClick={() => {toggleNavigationMenuOpen(!navigationMenuOpen)}}
            style={{
                transform: mouseDown ? 'scale(0.95)' : 'scale(1)'
            }}
            onMouseDown={() => {toggleMouseDown(true)}}

            onMouseUp={() => {toggleMouseDown(false)}}

            onMouseLeave={() => {toggleMouseDown(false)}}

            className='navigation-button-container'>
                <p>{page}</p>
                <svg 
                style={{
                    transform: navigationMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
                width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.5043 9.66937L15.72 18.315C15.5283 18.5046 15.2696 18.611 15 18.611C14.7304 18.611 14.4716 18.5046 14.28 18.315L5.49559 9.67124C5.30273 9.48173 5.04316 9.37553 4.77277 9.37553C4.50239 9.37553 4.24282 9.48173 4.04996 9.67124C3.955 9.76383 3.87952 9.87448 3.82799 9.99669C3.77646 10.1189 3.74991 10.2502 3.74991 10.3828C3.74991 10.5154 3.77646 10.6467 3.82799 10.7689C3.87952 10.8911 3.955 11.0018 4.04996 11.0944L12.8325 19.7381C13.4109 20.3061 14.1893 20.6243 15 20.6243C15.8107 20.6243 16.589 20.3061 17.1675 19.7381L25.95 11.0944C26.0452 11.0018 26.1209 10.891 26.1726 10.7686C26.2243 10.6462 26.251 10.5147 26.251 10.3819C26.251 10.249 26.2243 10.1175 26.1726 9.99513C26.1209 9.87275 26.0452 9.76198 25.95 9.66937C25.7571 9.47985 25.4975 9.37366 25.2271 9.37366C24.9568 9.37366 24.6972 9.47985 24.5043 9.66937Z" fill="#F8F8F8"/>
                </svg>
            </div>
            {navigationMenuOpen ?
            <div onClick={() => {toggleNavigationMenuOpen(false)}} className='navigation-menu-wrapper'>
                <div onClick={(e) => {e.stopPropagation()}} className='navigation-menu'>
                    <p onClick={goHome}>Home</p>
                </div>
            </div>
            : null}
        </>
    )
}
