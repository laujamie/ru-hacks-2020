import React, { useState, useEffect } from 'react';
import { ReactMic } from 'react-mic';
import PropTypes from 'prop-types';
import blobToBase64 from '../utils/blobToBase64';

function saveRecording(audioBlob, dispatch) {
  dispatch({ type: 'SET_BLOB', blob: audioBlob });
}

const Recorder = ({ record, store, dispatch }) => {
  const [recording, setRecording] = useState(record);
  useEffect(() => {
    setRecording(record);
  }, [record]);

  const onStop = (recordedBlob) => {
    console.log(`recorded blob is ${recordedBlob}`);
    saveRecording(recordedBlob, dispatch);
  };

  return (
    <div style={{ display: recording ? 'block' : 'none' }}>
      <ReactMic record={recording} onStop={onStop} />
    </div>
  );
};

Recorder.propTypes = {
  record: PropTypes.bool,
};

Recorder.defaultProps = {
  record: false,
};

export default Recorder;
