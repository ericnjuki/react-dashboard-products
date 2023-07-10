import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type IDraftEditorProps = {
  value: string;
  onChange: (val: string) => any;
  [key:string]: any;
}
function DraftEditor({ value, onChange }: IDraftEditorProps) {
  // TODO: Quill will soon be archived. Check out Plate, or Lexical
  // (https://www.reddit.com/r/reactjs/comments/ud3x8v/comment/i6f2c47/?utm_source=share&utm_medium=web2x&context=3)
  return <ReactQuill value={value} onChange={onChange} />;
}
export default DraftEditor;
