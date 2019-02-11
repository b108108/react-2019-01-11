import React from 'react'
import localization from '../../decorators/localization'

function Loader(...rest) {
    return (
        <h3>{`${rest[0].getLocalizeString('Loading')}...`}</h3>
    )
}

export default localization(Loader)
