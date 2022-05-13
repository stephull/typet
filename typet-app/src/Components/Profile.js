import React, {useState, useEffect} from 'react';

function RenderProfile() {
    const [profileData, setData] = useState(null);

    useEffect(() => {
        fetch('/profile').then((response) => response.json())
        .then((data) => {
            setData({
                profile_name: data.name,
                profile_id: data.id,
                profile_summary: data.summary,
                profile_type: data.type
            })
        })
        .catch((error) => {
            console.log((error.response) ?
            `${error.response}\n${error.response.status}\n${error.response.headers}` : 
            "UNKNOWN ERROR DETECTED")
        })
    })

    return (
        <React.Component>
            {profileData && 
                (<div>
                    <h3>{profileData.profile_name}</h3>
                    <h5>{profileData.profile_id}</h5>
                    <p>{profileData.profile_summary}</p>
                    <small>{profileData.profile_type}</small>
                </div>)
            }
        </React.Component>
    );
}

const newProfile = RenderProfile();
class Profile extends React.Component {
    render() {
        return(
            {newProfile}
        )
    }
}

export default Profile;