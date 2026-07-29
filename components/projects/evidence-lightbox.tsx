"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import styles from "./evidence-lightbox.module.css";

export type LightboxVisual = {
  readonly id: string;
  readonly kindLabel: string;
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly title: string;
  readonly caption: string;
  readonly unoptimized: boolean;
};

type EvidenceLightboxProps = {
  readonly visuals: readonly LightboxVisual[];
};

export function EvidenceLightbox({ visuals }: EvidenceLightboxProps) {
  const [selectedVisual, setSelectedVisual] =
    useState<LightboxVisual | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openingButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  const closeDialog = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleDialogClose = useCallback(() => {
    const openingButton = openingButtonRef.current;

    setSelectedVisual(null);
    window.requestAnimationFrame(() => {
      if (openingButton?.isConnected) {
        openingButton.focus();
      }
    });
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    const gallery = dialog?.closest("section");

    if (!gallery) {
      return;
    }

    const handleGalleryClick = (event: Event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const button = event.target.closest<HTMLButtonElement>(
        "button[data-lightbox-visual-id]",
      );

      if (!button || !gallery.contains(button)) {
        return;
      }

      const visual = visuals.find(
        (item) => item.id === button.dataset.lightboxVisualId,
      );

      if (!visual) {
        return;
      }

      openingButtonRef.current = button;
      setSelectedVisual(visual);
    };

    gallery.addEventListener("click", handleGalleryClick);
    return () => gallery.removeEventListener("click", handleGalleryClick);
  }, [visuals]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !selectedVisual) {
      return;
    }

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousPaddingRight = root.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;

    root.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      root.style.paddingRight = `${scrollbarWidth}px`;
    }

    dialog.showModal();
    closeButtonRef.current?.focus();

    return () => {
      root.style.overflow = previousOverflow;
      root.style.paddingRight = previousPaddingRight;

      if (dialog.open) {
        dialog.close();
      }
    };
  }, [selectedVisual]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={selectedVisual ? titleId : undefined}
      aria-describedby={selectedVisual ? descriptionId : undefined}
      aria-modal="true"
      onClose={handleDialogClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeDialog();
        }
      }}
    >
      {selectedVisual ? (
        <div className={styles.panel}>
          <div className={styles.toolbar}>
            <button
              ref={closeButtonRef}
              className={styles.closeButton}
              type="button"
              onClick={closeDialog}
            >
              Close
            </button>
          </div>
          <div className={styles.figure}>
            <figure className={styles.imageStage}>
              <Image
                className={styles.image}
                src={selectedVisual.src}
                width={selectedVisual.width}
                height={selectedVisual.height}
                alt={selectedVisual.alt}
                sizes="(max-width: 48rem) calc(100vw - 2rem), 90vw"
                unoptimized={selectedVisual.unoptimized}
              />
              <figcaption className={styles.caption}>
                <p className={styles.kind}>{selectedVisual.kindLabel}</p>
                <h2 id={titleId}>{selectedVisual.title}</h2>
                <p id={descriptionId}>{selectedVisual.caption}</p>
                <a
                  className={styles.originalLink}
                  href={selectedVisual.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open original asset: ${selectedVisual.title} in a new tab`}
                >
                  Open original asset
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
