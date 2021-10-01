import { toCanvas } from 'html-to-image';
import { Options } from 'html-to-image/es/options';

interface exportImageProps {
  DOMNode: HTMLElement | null;
  options?: Options;
  userName?: string;
}

const exportImage = ({ DOMNode, userName, options }: exportImageProps): void => {
  if (DOMNode === null) return;

  const clonedElement = DOMNode?.cloneNode(true) as HTMLElement | null;

  // image file name
  const fileName = userName ? `${userName.replace(' ', '')}_tProfile` : 'tProfile';

  // image aspect ratio = 1.16
  const imageWidth = 400;
  const imageHeight = imageWidth * 1.16;

  // image screenshot size
  if (clonedElement) {
    clonedElement.style.width = `${imageWidth}px`;
    clonedElement.style.height = `${imageHeight}px`;
    document.body.appendChild(clonedElement);
  }

  if (clonedElement) {
    toCanvas(clonedElement, {
      canvasWidth: imageWidth,
      canvasHeight: imageHeight,
      pixelRatio: 1,
      ...options,
    })
      .then((canvas) => {
        const imageFile = canvas.toDataURL('image/png', 1.0);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = imageFile;
        link.click();
        clonedElement.remove();
      })
      .catch((error) => error);
  }
};

export default exportImage;
