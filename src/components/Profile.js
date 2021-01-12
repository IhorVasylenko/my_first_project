import React from "react";

const Profile = () => {
    return <div className='content'>
        <div>
            <img className='main_image'
                src="https://cherdak.io/wp-content/uploads/2020/03/Group-4.jpg"
                alt=""/>
        </div>
        <div>
            <img className='ava_image'
                src="https://i.pinimg.com/originals/fd/15/de/fd15dece5b9f8171dfef785afb4977d9.jpg"
                alt=""/>
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                Post1
            </div>
            <div>
                Post2
            </div>
        </div>
    </div>
}

export default Profile;