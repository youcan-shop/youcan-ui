import type { Range } from 'quill';
import Quill from 'quill';

export async function customImage(quill: Quill | null, range: Range | undefined) {
  if (!quill || !range) {
    return;
  }

  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.className = 'ql-image';

  fileInput.addEventListener('change', async (event) => {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const imageDataUrl = await readFileAsDataURL(file);
    if (!imageDataUrl) {
      return;
    }

    if (quill) {
      quill.insertEmbed(range.index, 'image', imageDataUrl, Quill.sources.USER);
      quill.setSelection(range.index + 1, 0, Quill.sources.USER);
    }
  });

  fileInput.click();
}

async function readFileAsDataURL(file: File): Promise<string | null> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

export function undoChange(quill: Quill | null) {
  if (quill) {
    const history = quill.history;
    if (history) {
      history.undo();
    }
  }
}

export function redoChange(quill: Quill | null) {
  if (quill) {
    const history = quill.history;
    if (history) {
      history.redo();
    }
  }
}
