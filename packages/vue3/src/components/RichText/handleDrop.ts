import type { Slice } from 'prosemirror-model';
import type { EditorView } from 'prosemirror-view';

const UPLOAD_IMAGE_BASE_URL = 'https://seller-area.youcan.shop/admin/upload/file/others';

const MAX_IMAGE_SIZE_MB = 10;
const MAX_IMAGE_WIDTH = 2000;
const MAX_IMAGE_HEIGHT = 2000;

async function uploadImage(file: File): Promise<string> {
  const data = new FormData();
  data.append('image', file);
  const response = await fetch(UPLOAD_IMAGE_BASE_URL, {
    method: 'POST',
    body: data,
  });

  const responseData = await response.json();

  if (response.ok) {
    const { link } = responseData;
    return link;
  }

  throw new Error('failed to upload image');
}

export default function (view: EditorView, event: DragEvent, slice: Slice, moved: boolean) {
  if (!moved && event.dataTransfer && event.dataTransfer.files && event.dataTransfer.files[0]) {
    const file = event.dataTransfer.files[0];
    const filesize = ((file.size / 1024) / 1024).toFixed(4);
    if ((file.type === 'image/jpeg' || file.type === 'image/png') && Number(filesize) < MAX_IMAGE_SIZE_MB) {
      const _URL = window.URL || window.webkitURL;
      const img = new Image();
      img.src = _URL.createObjectURL(file);
      img.onload = async function () {
        if (this.width > MAX_IMAGE_WIDTH || this.height > MAX_IMAGE_HEIGHT) {
          alert(`image not valid max image size is ${MAX_IMAGE_WIDTH} x ${MAX_IMAGE_HEIGHT}`);
        }
        else {
          const src = await uploadImage(file);
          const { schema } = view.state;
          const coordinates = view.posAtCoords({ left: event.clientX, top: event.clientY })!;
          const node = schema.nodes.image.create({ src });
          const transaction = view.state.tr.insert(coordinates.pos, node);
          return view.dispatch(transaction);
        }
      };
    }
    else {
      alert('image not valid');
    }
    return true;
  }
  return false;
}
