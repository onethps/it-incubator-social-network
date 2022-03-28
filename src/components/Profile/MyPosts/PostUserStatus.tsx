import React from 'react';

type PostStatusType = {
    status:string
}

class PostUserStatus extends React.Component<PostStatusType> {

    state = {
        editMode: false
    }

    activateMode = () => {
        this.setState({
            ...this.state,
            editMode: true
        })
        this.forceUpdate()

    }
    deActivateMode = () => {
        this.setState({
            ...this.state,
            editMode: false
        })
    }



    render()  {
        return   <div>

            { this.state.editMode &&<div>
                <input autoFocus onBlur={this.deActivateMode} value={this.props.status}/>
            </div>}

            { !this.state.editMode &&<div>
                <span onDoubleClick={this.activateMode}>{this.props.status}</span>

            </div>}

        </div>

    }
}

export default PostUserStatus;