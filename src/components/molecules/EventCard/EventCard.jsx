import React, { Component } from "react"
import "./EventCard.scss"
import ReactModal from "react-modal"

function Event({ photo, name, eventType, description }) {
  return (
    <React.Fragment>
      <div className="EventCard">
        <div className="Header">
          <img src={photo} alt={name} className="Photo" />
          <div className="EventInfo">
            <h3 className="EventName">{name}</h3>
            <h5 className="EventType">{eventType}</h5>
          </div>
          <div className="EventDescription">{description}</div>
        </div>
      </div>
    </React.Fragment>
  )
}


class EventContainer extends Component {
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
        <div className="Event">
          <img
            src={this.props.photo}
            alt={this.props.name}
            className="Photo"
          />
          <div className="EventInfo">
            <h3 className="EventName">{this.props.name}</h3>
            <h5 className="EventType Truncate">{this.props.subtitle}</h5>
            <button class="ModalButton" onClick={this.handleOpenModal}>
              Click for more
            </button>
            <ReactModal
              isOpen={this.state.showModal}
              contentLabel="Event Description"
              className="Modal"
              overlayClassName="Overlay"
            >
              <button
                class="ModalButton CloseButton"
                onClick={this.handleCloseModal}
              >
                Close
              </button>
              <Event {...this.props} />
            </ReactModal>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export {Event,EventContainer}
