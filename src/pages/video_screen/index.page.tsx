import router from 'next/router';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';

import {
  DivBottom,
  DivBottomButton,
  DivMain,
  VerificationCardStyled,
  VerificationStyled,
  VerificationSuccessfulSmallTextStyled,
} from './index.style';

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
  console.log('recordedVideo', recordedVideo);
  return (
    <>
      <DivMain>
        <VerificationStyled>
          <Header text="Record video" onClick={onClickHeaderIcon} />

          <VerificationCardStyled>
            <video width="100%" height="420" controls>
              <source src={recordedVideo} type="video/mp4" />
            </video>
          </VerificationCardStyled>
          <VerificationSuccessfulSmallTextStyled>
            If you are not satified with your selfie video, we suggest you to re-take it.
          </VerificationSuccessfulSmallTextStyled>
        </VerificationStyled>
      </DivMain>
      <DivBottomButton>
        <Button isBottom className="m-auto" onClick={handleContinue}>
          Submit Video
        </Button>
      </DivBottomButton>
      <DivBottom>
        <Button isBottom className="m-auto" onClick={handleRetake}>
          Re-take Video
        </Button>
      </DivBottom>
    </>
  );
};

export default VideoScreen;
