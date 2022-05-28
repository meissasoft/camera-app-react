import router from 'next/router';

import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CameraBottomWithButton from '@/components/core/CameraBottomWithButton';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setCardBack, setCardFront } from '@/store/app/appSlice';

import { useUserMedia } from '@/hooks/useUserMedia';
import {
  Canvas,
  DivCameraBox,
  DivMain,
  VerificationSmallTextStyled,
  VerificationStyled,
  VerificationTextStyled,
  Video,
  DivFlex,
} from './index.styles';

/**
 *
 * @returns Camera page
 */

const CameraPic = () => {
  const CAPTURE_OPTIONS = {
    audio: false,
    video: { facingMode: 'environment' },
  };
  const dispatch = useAppDispatch();
  const { t } = useTranslation('camera_pic');
  const [isFront, setIsFront] = useState(true);
  const [cardFront, setcardFront] = useState('');
  const [cardBack, setcardBack] = useState('');
  const mediaStream = useUserMedia(CAPTURE_OPTIONS, !isFront);

  const videoRef = useRef(null) as any;
  const photoRef = useRef(null) as any;

  function handleCanPlay() {
    videoRef.current.play();
  }

  const handleCancel = () => {
    router.push('/verification');
  };

  const handleRetake = () => {
    setIsFront(true);
  };

  const takePhoto = () => {
    const width = 314;
    const height = width / (16 / 9);
    const video = videoRef.current;
    const photo = photoRef.current as any;
    photo.width = width;
    photo.height = height;
    const ctx = photo.getContext('2d');
    ctx.drawImage(video, 0, 0, width, height);
    const dataUrl = photo.toDataURL();
    if (cardFront.length < 5) {
      setcardFront(dataUrl);
      dispatch(setCardFront(dataUrl));
      handleClear();
      setIsFront(false);
    } else if (cardBack.length < 5) {
      setcardBack(dataUrl);
      dispatch(setCardBack(dataUrl));
      router.push('/aadhaar_card');
    }
  };

  useEffect(() => {
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.setAttribute('autoplay', '');
      videoRef.current.setAttribute('muted', '');
      videoRef.current.setAttribute('playsinline', '');
      videoRef.current.srcObject = mediaStream;
    }
  }, [mediaStream]);

  function handleClear() {
    const context = photoRef.current.getContext('2d');
    context.clearRect(0, 0, photoRef.current.width, photoRef.current.height);
    videoRef.current.srcObject = null;
  }

  return (
    <DivMain>
      <VerificationStyled>
        <DivCameraBox>
          <Video ref={videoRef} onCanPlay={handleCanPlay} controls={false}></Video>
          <Canvas ref={photoRef}></Canvas>
        </DivCameraBox>
        <VerificationTextStyled>{isFront ? t('front_of_the_card') : t('back_of_the_card')}</VerificationTextStyled>
        <VerificationSmallTextStyled>
          {isFront ? t('position_the_front_of_the_card_in_the_frame') : t('position_the_back_of_the_card_in_the_frame')}
        </VerificationSmallTextStyled>
      </VerificationStyled>
      <DivFlex>
        <CameraBottomWithButton
          onClick={takePhoto}
          onCancel={handleCancel}
          onReTake={handleRetake}
          cancel={t('cancel')}
          retake={t('retake')}
        />
      </DivFlex>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['camera_pic'])),
  },
});

export default CameraPic;
