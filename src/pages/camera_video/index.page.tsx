import router from 'next/router';

import { useEffect, useRef, useState } from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { detect } from 'detect-browser';
import { DoneIcon } from '@/assets/svg/done-icon';
import CameraBottomWithButton from '@/components/core/CameraBottomWithButton';
import { useAppDispatch } from '@/hooks/useReduxTypedHooks';
import { setRecordedVideo } from '@/store/app/appSlice';

import {
  DivCameraBox,
  DiveDone,
  DivMain,
  DivWords,
  VerificationSmallTextStyled,
  VerificationStyled,
  VerificationTextStyled,
  Video,
} from './index.styles';

/**
 *
 * @returns Verification page
 */

const Verification = () => {
  const { t } = useTranslation('camera_video');
  const [isDone, setIsDone] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(20);
  const [startRecording, setStartRecording] = useState<boolean>(false);

  const [words, setWords] = useState('');
  const [instruction, setInstruction] = useState<any>(t('position_your_face'));
  const [description, setDescriptoin] = useState<any>(
    t(`keep_your_face_within_the_oval_to_start_recording_and_follow_the_instructions`)
  );
  const browser = detect();
  const videoRef = useRef(null);
  const mediaRecorder: any = useRef(null);
  const blobsRecorded: any = [];

  const dispatch = useAppDispatch();

  const getVideo = () => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 1920, height: 1080 },
          audio: true,
        })
        .then((stream) => {
          const video = videoRef.current as any;
          video.setAttribute('autoplay', '');
          video.setAttribute('muted', '');
          video.setAttribute('playsinline', '');
          video.srcObject = stream;
          video.play();
          mediaRecorder.current = new MediaRecorder(stream, {
            mimeType: browser?.name === 'chrome' ? 'video/webm' : 'video/mp4',
          });
          mediaRecorder.current.addEventListener('dataavailable', function (e: any) {
            blobsRecorded.push(e.data);
          });
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  };
  useEffect(() => {
    getVideo();
  }, [videoRef]);

  useEffect(() => {
    if (startRecording === true) {
      if (counter > 0) {
        const timer = setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
      }
      setStartRecording(false);
    }
  }, [startRecording, counter]);

  const handleCancel = () => {
    router.push('/verification');
  };

  const handleRetake = () => {};

  const handleOnClick = () => {
    if (mediaRecorder && mediaRecorder.current) {
      try {
        mediaRecorder.current.start(1000);
      } catch (err) {
        console.log('');
      }
    }
    setStartRecording(true);
    startVideoRecording();
  };

  const startVideoRecording = () => {
    setIsDone(false);
    setTimeout(() => {
      setInstruction(t('instruction_1'));
      setDescriptoin(t('look_over_your_right_shoulder_and_back'));
    }, 3000);
    setTimeout(faceDone, 8000);
    setTimeout(stop, 20000);
  };

  const faceDone = () => {
    setIsDone(true);
    setTimeout(startWord, 2000);
  };

  const startWord = () => {
    setIsDone(false);
    setWords(`3 - 0 - 1 - 4`);
    setInstruction(t('instruction_2'));
    setDescriptoin(t('say_each_digit_out_loud'));
  };

  const stop = () => {
    try {
      mediaRecorder?.current?.stop();
    } catch (err) {
      console.log('');
    }
    setIsDone(true);
    dispatch(setRecordedVideo(URL.createObjectURL(new Blob(blobsRecorded, { type: 'video/mp4' }))));
    router.push('/video_screen');
  };

  return (
    <DivMain>
      <VerificationStyled>
        <DivCameraBox background={isDone}>
          <Video ref={videoRef} isDone={isDone} muted></Video>
          <DiveDone>{isDone && <DoneIcon />}</DiveDone>
        </DivCameraBox>
        <VerificationTextStyled>{instruction}</VerificationTextStyled>
        <VerificationSmallTextStyled>{description}</VerificationSmallTextStyled>
        <DivWords>{words.length > 0 && words}</DivWords>
      </VerificationStyled>
      <CameraBottomWithButton
        isVideo
        onClick={handleOnClick}
        onCancel={handleCancel}
        onReTake={handleRetake}
        counter={`00:00:${counter}`}
        cancel={t('cancel')}
        retake={t('retake')}
      />
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['camera_video'])),
  },
});

export default Verification;
