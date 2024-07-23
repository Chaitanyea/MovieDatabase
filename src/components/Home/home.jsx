import React, { useEffect } from 'react';
import Listing from '../Listing/listing'
import movieApi from '../../common/apis/movieApi'
import { apiKey } from '../../common/apis/apiKey';

const home = () => {

    useEffect(() => {
        const key = "Summer"
        const getMovie = async () => {
            const response = movieApi.get(`?apiKey=${apiKey}&s=${key}&type=movie`)
            .catch((err) => {
                console.log(err)
            })
        }
        
        getMovie();
    }, []);

    return (
        <div>
            <div className='main-image'></div>
            <Listing></Listing>
        </div>
    );
};

export default home;