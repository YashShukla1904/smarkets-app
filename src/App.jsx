import React from 'react'
import { Routes, Route } from "react-router-dom";
import PopularEventsList from './modules/popularEventsList/PopularEventsList'
import PopularEventDetail from './modules/populatEventDetail/popularEventDetail'
import { Provider } from 'react-redux';

import './App.css'
import Layout from './Layout';
import store from './redux/store';

function App() {

    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="category/:categoryName" element={<PopularEventsList />} />
                    <Route path="event/:eventId/category/:categoryName" element={<PopularEventDetail />} />
                </Route>
            </Routes>
        </Provider>
    )
}

export default App