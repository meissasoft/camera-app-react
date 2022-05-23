import router from 'next/router';

import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CameraBottomWithButton from '@/components/core/CameraBottomWithButton';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setCardBack, setCardFront } from '@/store/app/appSlice';

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
 * @returns Verification page
 */

const Verification = () => {
  const [isFront, setIsFront] = useState(true);
  const [cardFront, setcardFront] = useState('');
  const [cardBack, setcardBack] = useState('');

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const dispatch = useAppDispatch();

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 1920,
          height: 1080,
          facingMode: {
            exact: 'environment',
          },
        },
      })
      .then((stream) => {
        const video = videoRef.current as any;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log('Error', err);
      });
  };
  useEffect(() => {
    getVideo();
  }, [videoRef]);

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
      dispatch(setCardFront(dataUrl));
      setcardFront(dataUrl);
    } else if (cardBack.length < 5) {
      setcardBack(dataUrl);
      dispatch(setCardBack(dataUrl));
      router.push('/aadhaar_card');
    }
    setIsFront(false);
  };
  const { t } = useTranslation('camera_pic');
  return (
    <DivMain>
      <VerificationStyled>
        <DivCameraBox>
          <Video ref={videoRef}></Video>
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

export default Verification;
