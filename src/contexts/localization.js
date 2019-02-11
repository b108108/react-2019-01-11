import {createContext} from 'react';
import vocabulary from '../vocabulary'

const {Provider, Consumer} = createContext(
    vocabulary.en
)

export {Provider, Consumer}
