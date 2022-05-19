import { CameraButton } from '@/assets/svg/pic-button copy';
import { VideoButton } from '@/assets/svg/video-button';

import { Div, DivButton, DivContent, DivSvg, DivTime } from './CameraBottomWithButton.styles';
import { CameraBottomWithButtonProps } from './CameraBottomWithButton.types';

function CameraBottomWithButton({ isVideo = false, onCancel, onReTake, onClick }: CameraBottomWithButtonProps) {
  return (
    <Div>
      <DivTime>00:00:50</DivTime>
      <DivButton onClick={onClick}>
        <DivSvg>{isVideo ? <VideoButton /> : <CameraButton />}</DivSvg>
      </DivButton>
      <DivContent>
        <p onClick={onCancel}>cancel</p>
        <p onClick={onReTake}>Re-take</p>
      </DivContent>
    </Div>
  );
}

export default CameraBottomWithButton;
