"use client";

import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "~/app/components/ui/dialog";

import { useRouter } from "next/navigation";

export function Modal({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const router = useRouter();

  function handleOpenChange() {
    router.back();
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      <DialogOverlay>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
