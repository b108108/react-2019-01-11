import React from 'react'
import {NavLink} from 'react-router-dom'
import localization from '../../decorators/localization'

function MenuItem({to, children, ...rest}) {
    const localeStr = rest.getLocalizeString(children.toLowerCase())
    return (
        <div>
            <NavLink {...rest} to={to} activeStyle={{color: 'red'}}>{localeStr}</NavLink>
        </div>
    )
}

export default localization(MenuItem)
