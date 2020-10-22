import React from "react";
import { iconEdit } from "../asset";
import { useDispatch, useSelector } from "react-redux";
import ImageUploader from "react-images-upload";
import { UploadFile } from "../../../redux/action/User";

const HeaderProfile = () => {
    const form = new FormData();
    const {user} = useSelector((s) => s.User);
    const {data} = useSelector((s) => s.Auth);
    const dispatch = useDispatch();

    let fields = {
        photo: []
    }

    const onDrop = (picture) =>{
        fields = {...fields, photo: picture[0]}
        dispatch(UploadFile({photo: form.append("photo",fields)},data.accessToken));
    }

    return (
        <>
            <img className="profile__img" src={user.photo ? user.photo : ""} alt="profile"></img>
            <form encType='multipart/form-data'>
                <ImageUploader
                        name="photo"
                        withLabel={false}
                        fileContainerStyle={{boxShadow: "none"}}
                        withIcon={false}
                        singleImage={true}
                        onChange={onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    />
            </form>
            <div className="mt-2 d-flex justify-content-center">
                <img className="mr-2" src={iconEdit} alt="icon-edit"></img>
                <span className="text-grey">Edit</span>
            </div>
            <div className="mt-3">
                <h6 className="name__info">{`${data.user.firstName} ${data.user.lastName}`}</h6>
                <p className="phone__number">{`+62 ${user.phone}`}</p>
        </div>
        </>
    )
}

export default HeaderProfile;