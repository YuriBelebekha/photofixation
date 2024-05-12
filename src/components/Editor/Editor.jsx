import React, { useRef, useEffect } from 'react';
import TuiImageEditor from 'tui-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import { whiteTheme } from 'theme/white-theme';

const useEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const myTheme = {
      whiteTheme,
      // Theme object to extends default dark theme.
    };

    if (!editorRef.current) {
      return;
    }

    const tuiImageEditor = new TuiImageEditor(editorRef.current, {
      includeUI: {
        loadImage: {
          path: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
          name: 'SampleImage',
        },
        theme: myTheme.whiteTheme,
        menu: [
          'crop',
          'rotate',
          'draw',
          'icon',
          'shape',
          'text',
          'mask',
          'flip',
          'filter',
        ],
        // initMenu: 'filter',
        uiSize: {
          width: '1000px',
          height: '500px',
        },
        menuBarPosition: 'bottom',
      },
      cssMaxHeight: 300,
      cssMaxWidth: 500,
      selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70,
      },
      usageStatistics: false,
    });

    console.log('tuiImageEditor in useEditor: ', tuiImageEditor);
  }, []);

  return editorRef;
};

export const Editor = () => {
  const ref = useEditor();

  return <div ref={ref} />;
};

// import 'tui-image-editor/dist/tui-image-editor.css';
// import ImageEditor from '@toast-ui/react-image-editor';  // npm install @toast-ui/react-image-editor
// // import { whiteTheme } from 'theme/white-theme';

// export const Editor = () => {
//   const myTheme = {
//     // Theme object to extends default dark theme.
//   };

//   const props = {
//     includeUI: {
//       // loadImage: {
//       //   path: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg',
//       //   name: 'SampleImage',
//       // },
//       theme: myTheme,
//       menu: [
//         'crop',
//         'rotate',
//         'draw',
//         'icon',
//         'shape',
//         'text',
//         'mask',
//         'flip',
//         'filter',
//       ],
//       // initMenu: 'filter',
//       uiSize: {
//         width: '1200px',
//         height: '700px',
//       },
//       menuBarPosition: 'bottom',
//     },
//     cssMaxHeight: 500,
//     cssMaxWidth: 700,
//     selectionStyle: {
//       cornerSize: 20,
//       rotatingPointOffset: 70,
//     },
//     usageStatistics: false,
//   };

//   // console.log(props);

//   return <ImageEditor {...props} />;
// };
