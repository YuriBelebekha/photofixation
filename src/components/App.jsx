import { Editor } from './Editor';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        background: 'grey',
        alignItems: 'center',
        // fontSize: 40,
        // color: 'salmon',
      }}
    >
      <Editor />
    </div>
  );
};
