'use client';

import { withProps } from '@udecode/cn';
import {
    createPlateEditor,
    Plate,
    ParagraphPlugin,
    PlateLeaf,
} from '@udecode/plate-common/react';
import { HeadingPlugin } from '@udecode/plate-heading/react';
import { HorizontalRulePlugin } from '@udecode/plate-horizontal-rule/react';
import { LinkPlugin } from '@udecode/plate-link/react';
import { ImagePlugin } from '@udecode/plate-media/react';
import { TogglePlugin } from '@udecode/plate-toggle/react';
import { ColumnPlugin, ColumnItemPlugin } from '@udecode/plate-layout/react';
import { CaptionPlugin } from '@udecode/plate-caption/react';
import {
    MentionPlugin,
    MentionInputPlugin,
} from '@udecode/plate-mention/react';
import {
    TablePlugin,
    TableRowPlugin,
    TableCellPlugin,
    TableCellHeaderPlugin,
} from '@udecode/plate-table/react';
import { TodoListPlugin } from '@udecode/plate-list/react';
import { DatePlugin } from '@udecode/plate-date/react';
import {
    BoldPlugin,
    ItalicPlugin,
    UnderlinePlugin,
    StrikethroughPlugin,
    CodePlugin,
    SubscriptPlugin,
    SuperscriptPlugin,
} from '@udecode/plate-basic-marks/react';
import {
    FontColorPlugin,
    FontBackgroundColorPlugin,
    FontSizePlugin,
} from '@udecode/plate-font';
import { HighlightPlugin } from '@udecode/plate-highlight/react';
import { KbdPlugin } from '@udecode/plate-kbd/react';
import { AlignPlugin } from '@udecode/plate-alignment';
import { IndentPlugin } from '@udecode/plate-indent/react';
import { IndentListPlugin } from '@udecode/plate-indent-list/react';
import { LineHeightPlugin } from '@udecode/plate-line-height';
import { BlockSelectionPlugin } from '@udecode/plate-selection/react';
import { EmojiPlugin } from '@udecode/plate-emoji/react';
import { ExitBreakPlugin, SoftBreakPlugin } from '@udecode/plate-break/react';
import { NodeIdPlugin } from '@udecode/plate-node-id';
import { ResetNodePlugin } from '@udecode/plate-reset-node/react';
import { DeletePlugin } from '@udecode/plate-select';
import { TabbablePlugin } from '@udecode/plate-tabbable/react';
import { TrailingBlockPlugin } from '@udecode/plate-trailing-block';
import { CommentsPlugin } from '@udecode/plate-comments/react';
import { AutoformatPlugin } from '@udecode/plate-autoformat/react';
import { DndPlugin } from '@udecode/plate-dnd';
import { DocxPlugin } from '@udecode/plate-docx';
import { HEADING_KEYS } from '@udecode/plate-heading';

import { HrElement } from '@/components/plate-ui/hr-element';
import { ImageElement } from '@/components/plate-ui/image-element';
import { LinkElement } from '@/components/plate-ui/link-element';
import { LinkFloatingToolbar } from '@/components/plate-ui/link-floating-toolbar';
import { ToggleElement } from '@/components/plate-ui/toggle-element';
import { ColumnGroupElement } from '@/components/plate-ui/column-group-element';
import { ColumnElement } from '@/components/plate-ui/column-element';
import { HeadingElement } from '@/components/plate-ui/heading-element';
import { MentionElement } from '@/components/plate-ui/mention-element';
import { MentionInputElement } from '@/components/plate-ui/mention-input-element';
import { ParagraphElement } from '@/components/plate-ui/paragraph-element';
import { TableElement } from '@/components/plate-ui/table-element';
import { TableRowElement } from '@/components/plate-ui/table-row-element';
import {
    TableCellElement,
    TableCellHeaderElement,
} from '@/components/plate-ui/table-cell-element';
import { TodoListElement } from '@/components/plate-ui/todo-list-element';
import { CodeLeaf } from '@/components/plate-ui/code-leaf';
import { CommentLeaf } from '@/components/plate-ui/comment-leaf';
import { CommentsPopover } from '@/components/plate-ui/comments-popover';
import { HighlightLeaf } from '@/components/plate-ui/highlight-leaf';
import { KbdLeaf } from '@/components/plate-ui/kbd-leaf';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { withPlaceholders } from '@/components/plate-ui/placeholder';
import { withDraggables } from '@/components/plate-ui/with-draggables';

const editor = createPlateEditor({
    plugins: [
        ParagraphPlugin,
        HeadingPlugin,
        HorizontalRulePlugin,
        LinkPlugin.configure({
            render: { afterEditable: () => <LinkFloatingToolbar /> },
        }),
        ImagePlugin,
        TogglePlugin,
        ColumnPlugin,
        CaptionPlugin.configure({
            options: { plugins: [ImagePlugin] },
        }),
        MentionPlugin,
        TablePlugin,
        TodoListPlugin,
        DatePlugin,
        BoldPlugin,
        ItalicPlugin,
        UnderlinePlugin,
        StrikethroughPlugin,
        CodePlugin,
        SubscriptPlugin,
        SuperscriptPlugin,
        FontColorPlugin,
        FontBackgroundColorPlugin,
        FontSizePlugin,
        HighlightPlugin,
        KbdPlugin,
        AlignPlugin.configure({
            inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
        }),
        IndentPlugin.configure({
            inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
        }),
        IndentListPlugin.configure({
            inject: { targetPlugins: ['p', 'h1', 'h2', 'h3'] },
        }),
        LineHeightPlugin.configure({
            inject: {
                nodeProps: {
                    defaultNodeValue: 1.5,
                    validNodeValues: [1, 1.2, 1.5, 2, 3],
                },
                targetPlugins: ['p', 'h1', 'h2', 'h3'],
            },
        }),
        BlockSelectionPlugin,
        EmojiPlugin,
        ExitBreakPlugin.configure({
            options: {
                rules: [
                    {
                        hotkey: 'mod+enter',
                    },
                    {
                        before: true,
                        hotkey: 'mod+shift+enter',
                    },
                    {
                        hotkey: 'enter',
                        level: 1,
                        query: {
                            allow: ['h1', 'h2', 'h3'],
                            end: true,
                            start: true,
                        },
                        relative: true,
                    },
                ],
            },
        }),
        NodeIdPlugin,
        ResetNodePlugin.configure({
            options: {
                rules: [
                    // Usage: https://platejs.org/docs/reset-node
                ],
            },
        }),
        DeletePlugin,
        SoftBreakPlugin.configure({
            options: {
                rules: [
                    { hotkey: 'shift+enter' },
                    {
                        hotkey: 'enter',
                        query: {
                            allow: ['code_block', 'blockquote', 'td', 'th'],
                        },
                    },
                ],
            },
        }),
        TabbablePlugin,
        TrailingBlockPlugin.configure({
            options: { type: 'p' },
        }),
        CommentsPlugin,
        AutoformatPlugin.configure({
            options: {
                enableUndoOnDelete: true,
                rules: [
                    // Usage: https://platejs.org/docs/autoformat
                ],
            },
        }),
        DndPlugin.configure({
            options: { enableScroller: true },
        }),
        DocxPlugin,
    ],
    override: {
        components: withDraggables(
            withPlaceholders({
                [HorizontalRulePlugin.key]: HrElement,
                [ImagePlugin.key]: ImageElement,
                [LinkPlugin.key]: LinkElement,
                [TogglePlugin.key]: ToggleElement,
                [ColumnPlugin.key]: ColumnGroupElement,
                [ColumnItemPlugin.key]: ColumnElement,
                [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: 'h1' }),
                [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: 'h2' }),
                [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: 'h3' }),
                [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: 'h4' }),
                [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: 'h5' }),
                [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: 'h6' }),
                [MentionPlugin.key]: MentionElement,
                [MentionInputPlugin.key]: MentionInputElement,
                [ParagraphPlugin.key]: ParagraphElement,
                [TablePlugin.key]: TableElement,
                [TableRowPlugin.key]: TableRowElement,
                [TableCellPlugin.key]: TableCellElement,
                [TableCellHeaderPlugin.key]: TableCellHeaderElement,
                [TodoListPlugin.key]: TodoListElement,
                [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
                [CodePlugin.key]: CodeLeaf,
                [CommentsPlugin.key]: CommentLeaf,
                [HighlightPlugin.key]: HighlightLeaf,
                [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
                [KbdPlugin.key]: KbdLeaf,
                [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
                [SubscriptPlugin.key]: withProps(PlateLeaf, { as: 'sub' }),
                [SuperscriptPlugin.key]: withProps(PlateLeaf, { as: 'sup' }),
                [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),
            })
        ),
    },
});

export function PlateEditor() {
    return (
        <div className="relative rounded-lg border bg-background border-border mt-3">
            <Plate editor={editor}>
                <FixedToolbar>
                    <FixedToolbarButtons />
                </FixedToolbar>

                <Editor className="border-none ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0" />

                <FloatingToolbar>
                    <FloatingToolbarButtons />
                </FloatingToolbar>
                <CommentsPopover />
            </Plate>
        </div>
    );
}
