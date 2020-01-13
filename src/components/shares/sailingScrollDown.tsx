import React, { useRef, useState, useEffect } from 'react';
import clsx from 'clsx';
import EventListener from 'react-event-listener';
import { AppState } from '../../reducers/app';

interface SailingScrollDownProps {
  text: string;
}

const SailingScrollDown: React.FC<SailingScrollDownProps & AppState> = ({
  text,
  windows
}) => {
  const sailingScrollDownEl = useRef<HTMLDivElement>(null);
  const [targetBox, setTargetBox] = useState({
    fixedPoint: 0,
    width: 0,
    height: 0,
    top: 0
  });
  const [isFixed, setIsFixed] = useState(false);
  const [isFeature, setIsFeature] = useState(false);
  const handleScroll = () => {
    let timer = 200;
    if (timer > 0) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      if (sailingScrollDownEl.current) {
        const clientRect: any = sailingScrollDownEl.current
          ? sailingScrollDownEl.current.getBoundingClientRect()
          : null;
        if (clientRect) {
          setTargetBox({
            ...targetBox,
            width: clientRect.width,
            height: clientRect.height,
            top: clientRect.top
          });
        }
      }
    }, timer);

    const { scrollTop, width, vw, vh } = windows;
    const isSmartPhone = width < 768;
    let headerHeight = 96;
    if (isSmartPhone) {
      headerHeight = 56;
    }
    const point = targetBox.fixedPoint - headerHeight - 4;

    if (point < scrollTop) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    if (point < scrollTop - targetBox.height / 2) {
      setIsFeature(true);
    } else {
      setIsFeature(false);
    }
  };

  const handleResize = () => {
    const scrollTop: number =
      Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) || 0;

    setIsFixed(false);
    const { width } = windows;
    const isSmartPhone = width < 768;
    let headerHeight = 76;
    if (isSmartPhone) {
      headerHeight = 56;
    }

    if (sailingScrollDownEl.current) {
      const clientRect: any = sailingScrollDownEl.current
        ? sailingScrollDownEl.current.getBoundingClientRect()
        : null;

      if (clientRect) {
        setTargetBox({
          ...targetBox,
          fixedPoint: clientRect.top + scrollTop
        });
      }
    }

    const point = targetBox.fixedPoint - headerHeight - 4;
    if (point < scrollTop) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    if (point < scrollTop - targetBox.height / 2) {
      setIsFeature(true);
    } else {
      setIsFeature(false);
    }
  };

  useEffect(() => {
    const { width } = windows;
    const isSmartPhone = width < 768;
    let headerHeight = 76;
    if (isSmartPhone) {
      headerHeight = 56;
    }
    const scrollTop: number =
      Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      ) || 0;
    let fixedPoint = 0;
    if (sailingScrollDownEl.current) {
      const clientRect: any = sailingScrollDownEl.current
        ? sailingScrollDownEl.current.getBoundingClientRect()
        : null;
      fixedPoint = clientRect.top + scrollTop;

      if (clientRect) {
        setTargetBox({
          fixedPoint: fixedPoint,
          width: clientRect.width,
          height: clientRect.height,
          top: clientRect.top
        });
      }
    }

    const point = fixedPoint - headerHeight - 4;
    if (point < scrollTop) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    if (point < scrollTop - targetBox.height / 2) {
      setIsFeature(true);
    } else {
      setIsFeature(false);
    }
  }, []);

  return (
    <div
      ref={sailingScrollDownEl}
      className={clsx({
        sailingScrollDown: true,
        fixed: isFixed,
        feature: isFeature
      })}
    >
      <EventListener
        target="window"
        onScroll={handleScroll}
        onResize={handleResize}
      />
      <div className="sailingScrollDown__inner">
        <span className="sailingScrollDown__txt">{text}</span>
      </div>
      <span className="sailingScrollDown__arrow"></span>
    </div>
  );
};

export default SailingScrollDown;
