import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const SpeechToText = () => {
//   const { transcript, listening, startListening, stopListening } = useSpeechRecognition();

//   React.useEffect(() => {
//     SpeechRecognition.startListening({ continuous: true });

//     return () => {
//       SpeechRecognition.stopListening();
//     };
//   }, []);

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <span>Speech recognition is not supported by your browser.</span>;
//   }

//   return (
//     <div>
//       <button onClick={startListening} disabled={listening}>
//         Start
//       </button>
//       <button onClick={stopListening} disabled={!listening}>
//         Stop
//       </button>
//       <p>{transcript}</p>
//     </div>
//   );
// };

// export default SpeechToText;
