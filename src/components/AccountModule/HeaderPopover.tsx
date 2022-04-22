import { GU, Popover, springs } from "@1hive/1hive-ui";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { a, Spring, useTransition } from "@react-spring/web";
import styled from "styled-components";

type PopoverProps = {
  children: ReactNode;
  direction: -1 | 1;
  heading?: string;
  onClose: () => void;
  opener: ReactNode;
  screenId: number | string;
  visible: boolean;
  width: number | string;
};

export const HeaderPopover = ({
  children,
  direction,
  onClose,
  opener,
  screenId,
  visible,
  width,
}: PopoverProps) => {
  const [height, setHeight] = useState(30 * GU);

  // Prevents to lose the focus on the popover when a screen leaves while an
  // element inside is focused (e.g. when clicking on the “disconnect” button).
  const popoverFocusElement = useRef<HTMLElement | null>();

  const popupTransition = useTransition(screenId, {
    config: springs.smooth,
    keys: screenId,
    from: {
      opacity: 0,
      transform: `translate3d(${10 * GU * direction}px, 0, 0)`,
    },
    enter: {
      opacity: 1,
      transform: `translate3d(0, 0, 0)`,
    },
  });

  useEffect(() => {
    if (popoverFocusElement.current) {
      popoverFocusElement.current.focus();
    }
  }, [screenId]);

  return (
    <StyledPopover
      closeOnOpenerFocus
      onClose={onClose}
      opener={opener}
      placement="bottom-end"
      visible={visible}
      width={width}
    >
      <Container>
        <Spring
          config={springs.smooth}
          from={{ height: 33 * GU }}
          to={{ height }}
        >
          {({ height }) => (
            <a.div
              // @ts-ignore
              ref={popoverFocusElement}
              tabIndex={0}
              style={{
                height: height,
                position: "relative",
                flexGrow: 1,
                width: "100%",
                overflow: "hidden",
                outline: 0,
              }}
            >
              {popupTransition(({ opacity, transform }) => (
                <a.div
                  ref={(elt) => {
                    if (elt) {
                      setHeight(elt.clientHeight);
                    }
                  }}
                  style={{
                    opacity,
                    transform,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                  }}
                >
                  {children}
                </a.div>
              ))}
            </a.div>
          )}
        </Spring>
      </Container>
    </StyledPopover>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledPopover = styled(Popover)`
  margin-top: 3px;
  width: ${(props) => `${props.width}px`};
`;
