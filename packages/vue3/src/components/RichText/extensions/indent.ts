/* eslint-disable max-statements-per-line */
import { Extension } from '@tiptap/core';
import type { Attrs, Mark, Node, NodeType } from '@tiptap/pm/model';
import type { EditorState, Transaction } from '@tiptap/pm/state';
import { AllSelection, TextSelection } from '@tiptap/pm/state';

interface IndentOptions {
  types: string[]
  indentLevels: number[]
  defaultIndentLevel: number
}

declare module '@tiptap/core' {
  interface ExtendedCommandProps {
    tr: ExtendedTransaction
    state: EditorState
    dispatch: ((args?: any) => any) | undefined
  }
  type ExtendedCommand = (props: ExtendedCommandProps) => boolean;
  interface Commands {
    indent: {
      indent: () => ExtendedCommand
      outdent: () => ExtendedCommand
    }
  }
}
interface ExtendedTransaction extends Transaction {
  doc: Node
  setNodeMarkup: (pos: number, type: NodeType, attrs?: Attrs, marks?: readonly Mark[]) => ExtendedTransaction
  docChanged: boolean

}

export function clamp(val: number, min: number, max: number): number {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }

  return val;
}

export enum IndentProps {
  min = 0,
  max = 210,

  more = 30,
  less = -30,
}

export function isBulletListNode(node: Node): boolean {
  return node.type.name === 'bullet_list';
}

export function isOrderedListNode(node: Node): boolean {
  return node.type.name === 'order_list';
}

export function isTodoListNode(node: Node): boolean {
  return node.type.name === 'todo_list';
}

export function isListNode(node: Node): boolean {
  return isBulletListNode(node)
        || isOrderedListNode(node)
        || isTodoListNode(node);
}

function setNodeIndentMarkup(tr: ExtendedTransaction, pos: number, delta: number): ExtendedTransaction {
  if (!tr.doc) { return tr; }

  const node = tr.doc.nodeAt(pos);
  if (!node) { return tr; }

  const minIndent = IndentProps.min;
  const maxIndent = IndentProps.max;

  const indent = clamp(
    (node.attrs.indent || 0) + delta,
    minIndent,
    maxIndent,
  );

  if (indent === node.attrs.indent) { return tr; }

  const nodeAttrs = {
    ...node.attrs,
    indent,
  };

  return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
}

function updateIndentLevel(tr: ExtendedTransaction, delta: number): ExtendedTransaction {
  const { doc, selection } = tr;

  if (!doc || !selection) { return tr; }

  if (!(selection instanceof TextSelection || selection instanceof AllSelection)) {
    return tr;
  }

  const { from, to } = selection;

  doc.nodesBetween(from, to, (node: Node, pos: number) => {
    const nodeType = node.type;

    if (nodeType.name === 'paragraph' || nodeType.name === 'heading') {
      tr = setNodeIndentMarkup(tr, pos, delta);

      return false;
    } if (isListNode(node)) {
      return false;
    }

    return true;
  });

  return tr;
}

export const Indent = Extension.create<IndentOptions>({
  name: 'indent',

  addOptions() {
    return {
      types: ['heading', 'paragraph'],
      indentLevels: [0, 30, 60, 90, 120, 150, 180, 210],
      defaultIndentLevel: 0,
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: this.options.defaultIndentLevel,
            renderHTML: attributes => ({
              style: `margin-left: ${attributes.indent}px!important;`,
            }),
            parseHTML: element => ({
              indent: parseInt(element.style.marginLeft) || this.options.defaultIndentLevel,
            }),
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      indent: () => ({ tr, state, dispatch }) => {
        const { selection } = state;
        tr = tr.setSelection(selection);
        tr = updateIndentLevel(tr, IndentProps.more);

        if (tr.docChanged) {
          dispatch && dispatch(tr);

          return true;
        }

        return false;
      },
      outdent: () => ({ tr, state, dispatch }) => {
        const { selection } = state;
        tr = tr.setSelection(selection);
        tr = updateIndentLevel(tr, IndentProps.less);

        if (tr.docChanged) {
          dispatch && dispatch(tr);

          return true;
        }

        return false;
      },
    };
  },
  // @ts-expect-error addKeyboardShortcuts should accept this
  addKeyboardShortcuts() {
    return {
      'Tab': () => this.editor.commands.indent(),
      'Shift-Tab': () => this.editor.commands.outdent(),
    };
  },
});

export default Indent;
