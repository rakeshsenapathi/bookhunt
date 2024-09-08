'use client';

import { useEditor, EditorContent, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

interface EditorProps {
    children?: React.ReactNode;
}

const Editor: React.FC<EditorProps> = ({ children }) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
    });

    return (
        <div className="">
            <EditorContent editor={editor} />
        </div>
    );
};

export default Editor;
