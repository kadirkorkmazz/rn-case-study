import {createContext, useContext} from 'react';
import data from '../../data/data.json';

const DataContext = createContext(data.results);

export {DataContext, useContext};
