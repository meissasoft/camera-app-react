import router from 'next/router';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';

import { DivBottom, DivMain, VideoCardStyled, VideoCardText } from './index.style';

/**
 *
 * @returns VideoScreen page
 */

const VideoScreen = () => {
  const { recordedVideo } = useAppSelector(getAppDataSelector);

  const onClickHeaderIcon = () => {
    router.push('/camera_video');
  };
  const handleContinue = () => {
    router.push('/verified');
  };
  const handleRetake = () => {
    router.push('/camera_video');
  };

  return (
    <DivMain>
      <div>
        <Header text="Record video" onClick={onClickHeaderIcon} />
        <VideoCardStyled>
          <video width="100%" height="388" controls>
            <source src={recordedVideo} type="video/mp4" />
          </video>
        </VideoCardStyled>
        <VideoCardText>If you are not satified with your selfie video, we suggest you to re-take it.</VideoCardText>
      </div>
      <DivBottom>
        <Button className="mx-auto" onClick={handleContinue}>
          Submit Video
        </Button>
        <Button className="mx-auto btn" onClick={handleRetake} isTransparent>
          <span className="text">Re-take Video</span>
        </Button>
      </DivBottom>
    </DivMain>
  );
};

export default VideoScreen;
