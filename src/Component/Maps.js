import { GoogleMap, Marker, LoadScript} from "@react-google-maps/api"

const Maps = () => {

    const item = {
        name: "Location",
        Location: {
          lat:6.5244,
          lng:5.5497,
        }
    }

    const mapStyles = {
        height : "500px",
        width : "100%",
      }
    
      const defaultCenter = {
        lat: 6.5244,
        lng: 3.3792
      }

    return (
        <div>
            <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">

                <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>

                    <Marker key={item.name} position={item.Location}></Marker> 
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default Maps