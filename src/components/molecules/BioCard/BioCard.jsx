import React, { Component } from "react"
import "./BioCard.scss"
import ReactModal from "react-modal"
import Biography from "../Biography"

// export default function BioCard({ headshot, name, position, biography }) {
//     return(
//         <React.Fragment>
//             <div className="Member">
//                 <img src={headshot} alt={name} className="Headshot" />
//                 <div className="MemberInfo">
//                     <h3 className="MemberName">{name}</h3>
//                     <h5 className="MemberPosition">{position}</h5>
//                 </div>
//                 <div className="Biography">
//                     <p>{biography}</p>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }
class BioCard extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }
  render() {
    return (
      <React.Fragment>
        <div className="Member">
          <img
            src={this.props.headshot}
            alt={this.props.name}
            className="Headshot"
          />
          <div className="MemberInfo">
            <h3 className="MemberName">{this.props.name}</h3>
            <h5 className="MemberPosition">{this.props.position}</h5>
            <button class="ModalButton" onClick={this.handleOpenModal}>
              Click for more
            </button>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Biography"
              className="Modal"
              overlayClassName="Overlay"
            >
              <button
                class="ModalButton CloseButton"
                onClick={this.handleCloseModal}
              >
                Close
              </button>
              <Biography
                headshot={this.props.headshot}
                name={this.props.name}
                position={this.props.position}
                bio={this.props.bio}
              />
            </ReactModal>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BioCard
