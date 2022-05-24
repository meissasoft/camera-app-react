import { useState, useEffect } from 'react';

export function useUserMedia(requestedMedia: MediaStreamConstraints | undefined, resetMediaStream: boolean) {
  const [mediaStream, setMediaStream] = useState<MediaStream | null | undefined>(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      } catch (err) {
        // Removed for brevity
      }
    }
    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream, requestedMedia]);

  useEffect(() => {
    if (resetMediaStream === true) {
      setMediaStream(null);
    }
  }, [resetMediaStream]);

  console.log('media', mediaStream);

  return mediaStream;
}
