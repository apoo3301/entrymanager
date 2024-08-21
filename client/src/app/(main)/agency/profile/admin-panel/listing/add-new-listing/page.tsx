"use client"

import React from 'react'
import GoogleSearchAddress from '../../_components/googleSearchAddress';
import { Button } from '@/components/ui/button';
import { Card, CardFooter } from '@/components/ui/card';
import db from '@/drizzle';
import { listing } from '@/drizzle/schema';
import { useSession } from 'next-auth/react';


function AddNewListing() {
    // const [selectedAddress, setSelectedAddress] = React.useState<any>(null);
    // const [coordinates, setCoordinates] = React.useState<any>(null);
    // const { data: session } = useSession(); 

    // const clickHandler = async () => {
    //     if (!selectedAddress || !coordinates || !session?.user) return;

    //     try {
    //         await db.insert(listing).values({
    //             address: selectedAddress,
    //             coordinates: coordinates,
    //             createdBy: session.user.email
    //         });
    //         console.log('Listing added successfully');
    //     } catch (error) {
    //         console.error('Error adding listing:', error);
    //     }
    // };
  return (
    <div className='mt-10 md:mx-56 lg:mx-80'>
        {/* <div className='p-10 flex flex-col gap-5 items-cente justify-center'>
        <h2 className='font-bold text-2xl'>Add new listing</h2>
        <GoogleSearchAddress 
            selectedAddress={(value) => setSelectedAddress(value)}
            setCoordinates={(value) => setCoordinates(value)}
         />
        <Button 
        disabled={!selectedAddress || !coordinates}
        onClick={clickHandler}
        >next</Button>
        </div> */}
    </div>
  )
}

export default AddNewListing