const ScrollDownMouse = ({ onClick }) => {
  return (
    <div className="w-full h-full flex-center" onClick={onClick}>
      <div className="scrolldown">
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollDownMouse;
