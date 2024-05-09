import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

export const Editor = () => {
  const myTheme = {
    // Theme object to extends default dark theme.
  };

  const props = {
    includeUI: {
      // loadImage: {
      //   path: 'img/sampleImage.jpg',
      //   name: 'SampleImage',
      // },
      theme: myTheme,
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
      initMenu: 'filter',
      uiSize: {
        width: '1200px',
        height: '700px',
      },
      menuBarPosition: 'bottom',
    },
    cssMaxHeight: 500,
    cssMaxWidth: 700,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70,
    },
    usageStatistics: false,
  };

  console.log(props);

  return <ImageEditor {...props} />;
};
