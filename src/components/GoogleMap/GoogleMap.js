import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';


function MyComponent() {

    const containerStyle = {
        width: '90vh',
        height: '80vh'
    };

    const center = {
        lat: 21.433920,
        lng: 91.987030
    };
    const position = {
        lat: 21.433920,
        lng: 91.987030
    };
    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBtas6bcV96upfP0HuwGtpyWAwlg6KPFnI"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <>
                    <Marker
                        onLoad={onLoad}
                        position={position}
                        visible
                    />
                </>

            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyComponent)