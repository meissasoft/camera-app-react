import { CameraButton } from '@/assets/svg/pic-button copy';
import { VideoButton } from '@/assets/svg/video-button';

import { Div, DivButton, DivContent, DivSvg, DivTime } from './CameraBottomWithButton.styles';
import { CameraBottomWithButtonProps } from './CameraBottomWithButton.types';

function CameraBottomWithButton({
  isVideo = false,
  onCancel,
  onReTake,
  onClick,
  cancel,
  retake,
  counter,
}: CameraBottomWithButtonProps) {
  return (
    <Div>
      {isVideo && <DivTime>{counter}</DivTime>}
      <DivButton onClick={onClick}>
        <DivSvg>{isVideo ? <VideoButton /> : <CameraButton />}</DivSvg>
      </DivButton>
      <DivContent>
        <p onClick={onCancel}>{cancel}</p>
        <p onClick={onReTake}>{retake}</p>
      </DivContent>
    </Div>
  );
}

export default CameraBottomWithButton;
