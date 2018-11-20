import React from 'react';
import { Button } from 'react-native';

const fetchLocation = props => {
    return(
        <Button title="Take me to my place" onPress={props.onGetLocation} />
    );
}

export default fetchLocation;