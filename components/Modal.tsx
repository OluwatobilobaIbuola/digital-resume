import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import { BaseModal } from "react-spring-modal";
import { Scrollbar } from "./ScrollBar";
import { CloseIcon } from "./assets/Close";

type SpringModalProps = {
  children: React.ReactNode;
  style?: any;
  isOpen: boolean;
  setOpen: () => void;
};

type Styless = { [k: string]: any };

const SpringModal: React.FC<SpringModalProps> = ({
  children,
  style = {},
  isOpen,
  setOpen,
}) => {
  const transition = useTransition(isOpen, {
    from: { transform: "translateY(100%) translateY(55px) translateX(-50%)" },
    enter: { transform: "translateY(0%) translateY(0) translateX(-50%)" },
    leave: { transform: "translateY(100%) translateY(55px) translateX(-50%)" },
  });

  const staticStyles: Styless = {
    position: "absolute",
    bottom: 0,
    padding: "0",
    width: "calc(100% + 1px)",
    height: "100%",
    maxHeight: "70vh",
    backgroundColor: "#ffffff",
    borderRadius: "0px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    zIndex: 99999,
    border: "2px solid red",
  };

  const buttonStyle = {
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    color: "#0D1136",
    border: 0,
    outline: 0,
    boxShadow: "none",
    borderRadius: "50%",
    position: "absolute" as "absolute",
    top: -55,
    left: "100%",
    transform: "translateX(-50%)",
    cursor: "pointer",

    ":focus": {
      outline: 0,
      boxShadow: "none",
    },
  };

  const scrollbarStyle = {
    height: "100%",
    maxHeight: "100%",
  };

  return (
    <BaseModal isOpen={isOpen} onDismiss={() => setOpen()}>
      {transition(
        (transitionStyles, item) =>
          item && (
            <animated.div style={transitionStyles}>
              <div style={staticStyles}>
                <button
                  type="button"
                  onClick={() => setOpen()}
                  style={{ ...buttonStyle }}
                >
                  <CloseIcon style={{ width: 12, height: 12 }} />
                </button>
                <Scrollbar style={{ ...scrollbarStyle }}>
                  <div className="p-[30px]">{children}</div>
                </Scrollbar>
              </div>
            </animated.div>
          )
      )}
    </BaseModal>
  );
};

export default SpringModal;
