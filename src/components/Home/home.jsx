import React, { useEffect } from 'react';
import Listing from '../Listing/listing'
import movieApi from '../../common/apis/movieApi'
import { apiKey } from '../../common/apis/apiKey';
import { addMovie } from '../../redux/movieSlice';
import {useDispatch} from 'react-redux'

const home = () => {
    const key = "Lord"
    const dispatch = useDispatch();

    useEffect(() => {
        const getMovie = async () => {
            const response = await movieApi.get(`?apiKey=${apiKey}&s=${key}&type=movie`)
            .catch((err) => {
                console.log(err)
            });
            dispatch(addMovie(response.data))
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