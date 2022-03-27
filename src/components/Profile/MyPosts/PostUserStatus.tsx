import React from 'react';

type PostStatusType = {
    status:string
}

class PostUserStatus extends React.Component<PostStatusType> {

    state = {
        editMode: false
    }

    activateMode = () => {
        console.log(this.state.editMode)
        this.setState({
            ...this.state,
            editMode: true
        })

        console.log(this.state.editMode)
    }
    DeActivateMode = () => {
        this.setState({
            ...this.state,
            editMode: false
        })
    }






    render()  {
        return   <div>

            { this.state.editMode &&<div>
                <input value={this.props.status}/>
            </div>}

            { !this.state.editMode &&<div>
                <span>{this.props.status}</span>
            </div>}

        </div>

    }
}

export default PostUserStatus;