function getGeoLocation(onSuccess, onFailed) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) =>  {
            onSuccess(position.coords.latitude, position.coords.longitude);
        }, (error) => {
            onFailed(error.code);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
        onFailed(-1);
    }
}