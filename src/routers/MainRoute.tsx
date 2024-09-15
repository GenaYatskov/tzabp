import { FullOpenVariable } from ".components/FullOpenVariable";
import { Variable } from ".components/Variable";
import { Decode } from ".pages/Decode";
import { MainScreen } from ".pages/MainScreen";
import { Variables } from ".pages/Variables";
import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const MainRoute: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<MainScreen />}>
                    <Route index path='decode' element={<Decode />} />
                    <Route path='variables' element={<Variables/>}/>
                    <Route path="variables/:id" element={<FullOpenVariable />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
