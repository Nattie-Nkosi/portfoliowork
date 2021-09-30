import './text-editor.css';
import { useState, useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

interface TextEditorProps {
  cell: Cell
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if(ref.current && event.target && ref.current.contains(event.target as Node)) {
        return;
      }

      setEditing(false)
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    }
  }, []);

  if(editing) {
    return (
      <div className="text-editor" ref={ref}>
        <MDEditor value={cell.content} onChange={(v) => updateCell(cell.id, v || '')} />
      </div>
    )
  }
  const initialText = (
    '# JSBOARD \n  This is an interactive coding environment. You can write JavaScript, see it executed, and write comprehensive documentation using markdown. \n - Click any text cell to edit it. \n - The code in eact code editor is all joined together into one file. If you define a variable in cell #1, you can refer to it in any cell. \n - You can show any React component, **string**, **number**, or anything else by calling the `show()` function. This is a function build into this environment. \n - Call `show()` multiple time to show multiple values. \n - Re-order or delete cells using the buttons on the to right. \n - Add new cells by hovering on the divider between each cell. \n --- \n All of your changes get saved to the file you opened jsboard with.'
  );

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || initialText} />
      </div>
    </div>
  );
};

export default TextEditor;