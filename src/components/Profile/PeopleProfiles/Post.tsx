import React, {FormEvent} from 'react';
import catAva from "../../../assets/cat_ava.jpeg";
import {IProfile} from "../../../api/profileTypes";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../store/ReduxStore";
import {UserAPI} from "../../../api/api";


type PostType = {
    profileInfo: IProfile
}


const Post = (props: PostType) => {
    const myID = useSelector<AppStateType, number | null>(state => state.loginData.id)


    const [selectedFile, setSelectedFile] = React.useState<null | any>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        try {

            const response = await UserAPI.uploadPhoto(formData)


        } catch(error) {
            console.log(error)
        }
    }

    const handleFileSelect = (event:any) => {
        setSelectedFile(event.target.files[0])
    }



    if (!props.profileInfo) {
        return <div>Loading....</div>
    }

    return (

        <div>
            {myID === props.profileInfo.userId &&
                <form onSubmit={handleSubmit}>
                    <input type="file" onChange={handleFileSelect}/>
                    <input type="submit" value="Upload File" />
                </form>

            }
            <div>{props.profileInfo.aboutMe}</div>
            <div>{props.profileInfo.fullName}</div>

            {props.profileInfo.photos.small ?
                <img alt={'parsedIMG'} src={props.profileInfo.photos.small}/> :
                <img alt={'catAVA'} style={{width: '100px', height: '100px'}} src={catAva}/>
            }

        </div>
    );
};


export {Post};