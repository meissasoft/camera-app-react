import router from 'next/router';

import { useEffect, useRef, useState } from 'react';

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
  const [isDone, setIsDone] = useState(false);
  const [words, setWords] = useState('');
  const [instruction, setinstruction] = useState('Position your face');
  const [description, setDescriptoin] = useState(
    `Keep your face within the oval to start recording and follow the instructions`
  );

  const videoRef = useRef(null);
  const mediaRecorder: any = useRef(null);
  const blobsRecorded: any = [];

  const dispatch = useAppDispatch();

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        const video = videoRef.current as any;
        video.srcObject = stream;
        video.play();
        mediaRecorder.current = new MediaRecorder(stream, { mimeType: 'video/webm' });
        mediaRecorder.current.addEventListener('dataavailable', function (e: any) {
          blobsRecorded.push(e.data);
        });
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

  const handleRetake = () => {};

  const startVideoRecording = () => {
    setIsDone(false);
    mediaRecorder?.current?.start(1000);
    setTimeout(() => {
      setinstruction('Instruction - 1');
      setDescriptoin('Look over your right shoulder and back');
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
    setinstruction('Instruction - 2');
    setDescriptoin('Say each digit out loud');
  };

  const stop = () => {
    mediaRecorder?.current?.stop();
    setIsDone(true);
    dispatch(setRecordedVideo(URL.createObjectURL(new Blob(blobsRecorded, { type: 'video/webm' }))));
    router.push('/video_screen');
  };

  return (
    <>
      <DivMain>
        <VerificationStyled>
          <DivCameraBox background={isDone}>
            <Video ref={videoRef} isDone={isDone}></Video>
            <DiveDone>{isDone && <DoneIcon />}</DiveDone>
          </DivCameraBox>
          <VerificationTextStyled>{instruction}</VerificationTextStyled>
          <VerificationSmallTextStyled>{description}</VerificationSmallTextStyled>
          <DivWords>{words.length > 0 && words}</DivWords>
        </VerificationStyled>
        <CameraBottomWithButton isVideo onClick={startVideoRecording} onCancel={handleCancel} onReTake={handleRetake} />
      </DivMain>
    </>
  );
};

export default Verification;
