"use client";

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog";
import {ReactNode} from "react";

import {Icons} from "./icons";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  buttonComponent: ReactNode;
}

export function Dialog({title, description, children, buttonComponent}: Props) {
  return (
    <Root>
      <Trigger>{buttonComponent}</Trigger>
      <Portal>
        <Overlay className="fixed inset-0 bg-slate-950/40 data-[state=open]:animate-overlayShow" />
        <Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Title className="m-0 text-3xl font-medium">{title}</Title>
          <Description className="mb-5 mt-[10px] text-xl leading-normal">
            {description}
          </Description>
          {children}
          <Close asChild style={{top: 3, right: 3, position: "absolute"}}>
            <button aria-label="Close">
              <Icons.x />
            </button>
          </Close>
        </Content>
      </Portal>
    </Root>
  );
}
