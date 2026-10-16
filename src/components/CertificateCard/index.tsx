import { useEffect, useRef, useState } from "react";
import "./style.css";
import { Document, Page, pdfjs } from "react-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Proporção da moldura (A4 paisagem)
const FRAME_RATIO = 1.414;

interface CertificateCardProps {
  title: string;
  description: string;
  file: string;
  credential?: string;
  buttonText: string;
}

function CertificateCard({ title, description, file, credential, buttonText }: CertificateCardProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();
  const [pageRatio, setPageRatio] = useState<number>(FRAME_RATIO);

  const frameHeight = width ? width / FRAME_RATIO : undefined;
  const pageWidth = width && pageRatio < FRAME_RATIO ? frameHeight! * pageRatio : width;

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="certificate-card-container">
      <div className="certificate-card-inside-container">
        <div className="certificate-card-image" ref={imageRef} style={{ height: frameHeight }}>
          <Document file={file} loading={null}>
            <Page
              pageNumber={1}
              width={pageWidth}
              onLoadSuccess={(page) => setPageRatio(page.originalWidth / page.originalHeight)}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>

          <div className="certificate-card-title">
            <h2>{title}</h2>
          </div>

          {credential && (
            <a className="certificate-card-button" href={credential} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ marginRight: '6px' }} />
              {buttonText}
            </a>
          )}
        </div>

        <div className="certificate-card-info">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
