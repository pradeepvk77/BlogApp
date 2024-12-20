/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';
import { conf } from '../conf/conf';

export default function RTE({ control, content='Write Here....'}) {

  const editorRef = useRef(null);
  const firstValue = '<p>'+content+'</p>';
  const [editorValue, setEditorValue] = useState(content);

  return (
    <div>
      <Controller
        name='EditorControl'
        control={control}
        render={({ field :{onChange}}) => (
          <Editor
            apiKey={conf.text_editor_base_url}
            initialValue={firstValue}
            ref={editorRef}
            value={editorValue}
            onChange={(e)=>{setEditorValue(e.target.value)}}
            onEditorChange={onChange}
            init={{
              branding: false,
              height: 300,
              menubar: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        )}
      />

    </div>
  );
}