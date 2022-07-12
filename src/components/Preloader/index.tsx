import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import ShapeOverlays from "../../libs/shapeOverlays";
import {setShowPreloader} from "../../redux/slices/settingsSlice";
import {useAppDispatch} from "../../redux/store";

const Loading = styled.div`
  position: fixed;
  z-index: 103;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  transition: 0.25s opacity;
`;
const Counter = styled.h1`
  color: #eee;
  font-size: 500px;

  pointer-events: none;
  opacity: 0;

  transition: 0.4s opacity;

  @media (max-width: ${theme.media.tab}) {
    font-size: 200px;
  }
`;
const Overlay = styled.svg`
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: white;
  pointer-events: none;
`;
const Path = styled.path`
  &:nth-child(1),
  &:nth-child(4) {
    fill: white;
  }
  &:nth-child(2) {
    fill: ${theme.colors.green};
  }
  &:nth-child(3) {
    fill: ${theme.colors.darkBlue};
  }
`;
const textObject = {
  overlayClass: "js-preloader-overlay",
  preloaderClass: "js-preloader",
  preloaderTitleClass: "js-preloader-title",
};

export const Preloader: React.FC = () => {
  const dispatch = useAppDispatch();

  const loadPreloader = () => {
    const $overlay = document.querySelector(`.${textObject.overlayClass}`) as HTMLElement;
    const $preloader = document.querySelector(`.${textObject.preloaderClass}`) as HTMLElement;
    const $title = document.querySelector(`.${textObject.preloaderTitleClass}`) as HTMLElement;

    if (!$overlay) return;
    const overlay = new ShapeOverlays($overlay);
    let counter = 0;

    if(!$title)
      return;

    $title.style.opacity = "1";
    let interval = setInterval(() => {
      $title.innerHTML = `${counter}`;
      counter++;

      if (counter == 85) {
        $preloader.style.opacity = "0";
        $preloader.style.pointerEvents = "none";
      }
      if (counter == 95) {
        clearInterval(interval);
        overlay.toggle();
        $overlay.style.background = "transparent";

        setTimeout(function () {
          dispatch(setShowPreloader(false));
        }, 1500);
      }
    }, 10);
  };

  React.useEffect(() => {loadPreloader();}, []);

  return (
    <div>
      <Loading className={`${textObject.preloaderClass}`}>
        <Counter className={`${textObject.preloaderTitleClass}`}>0</Counter>
      </Loading>
      <Overlay
        className={`${textObject.overlayClass}`}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <Path />
        <Path />
        <Path />
        <Path />
      </Overlay>
    </div>
  );
}
