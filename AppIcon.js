const AppIcon = ({ icon, width, height }) => {
  return (
    <svg
      style={{
        width: `${width}px`,
        height: `${height}px`,
        fill: 'currentcolor',
        verticalAlign: 'middle',
      }}
    >
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
};

export default AppIcon;
