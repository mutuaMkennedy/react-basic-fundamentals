import React from "react";
import "./Modal.css";
// BEM

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal = () => {
    if (this.state.open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  };

  render() {
    const { open } = this.state;
    const toggleModal = this.toggleModal;
    return (
      <div className="modal">
        <button className="modal__trigger" onClick={toggleModal}>
          Open Modal
        </button>
        {open ? (
          <div
            className="modal__wrapper modal__wrapper--exit"
            onClick={toggleModal}
          >
            <div className="modal__content-box">
              <div className="modal__inner-items">
                <button type="button" onClick={toggleModal}>
                  Close Modal
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
