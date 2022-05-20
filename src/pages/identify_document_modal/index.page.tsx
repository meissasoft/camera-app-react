import React from 'react';

import { Button, Modal } from 'react-bootstrap';

import { BodyModalStyled, IineModel, ParagraphModel, ParagraphTextModel } from './index.style';

/**
 *
 * @returns Verification document page
 */

interface Props {
  show?: boolean;
  onHide: any;
  onOk?: any;
  heading?: any;
  paragraph?: any;
  dontAllow?: any;
  ok?: any;
}

function MyVerticallyCenteredModal({ show, onHide, onOk, heading, paragraph, dontAllow, ok }: Props) {
  return (
    <Modal className="modal-cont" show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <BodyModalStyled>
        <Modal.Body>
          <ParagraphModel>{heading}</ParagraphModel>
          <ParagraphTextModel>{paragraph}</ParagraphTextModel>
        </Modal.Body>
        <IineModel />
        <Modal.Footer>
          <div className="col-5">
            <Button onClick={onHide}>{dontAllow}</Button>
          </div>
          <div className="col-5 border-left">
            <Button onClick={onOk}>{ok}</Button>
          </div>
        </Modal.Footer>
      </BodyModalStyled>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
