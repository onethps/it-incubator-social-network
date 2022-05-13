import React, {ChangeEvent} from 'react';

type PostStatusType = {
    status:string
    updateStatusThunk: (status:string) => void
}

class PostUserStatus extends React.Component<PostStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateMode = () => {
        this.setState({
            ...this.state,
            editMode: true
        })

    }
    deActivateMode = () => {
        this.setState({
            ...this.state,
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)

    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            status: e.currentTarget.value
        })
    }


    componentDidUpdate(prevProps: Readonly<PostStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                ...this.state,
                status: this.props.status
            })
        }

    }


    render()  {

        let styleStatusBlock = {display:'inline-block'}
        return   <>
            <div>
            </div>
            <span >STATUS: </span>
            { this.state.editMode &&
                <div style={styleStatusBlock}>
                    <input onChange={this.onStatusChange}
                           autoFocus onBlur={this.deActivateMode} value={this.state.status}/>
                </div>
            }

            { !this.state.editMode &&
                <div style={styleStatusBlock}>
                    <span onDoubleClick={this.activateMode}>{this.props.status || '----'}</span>
                </div>
            }

        </>

    }
}

export default PostUserStatus;