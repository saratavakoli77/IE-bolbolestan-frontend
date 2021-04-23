const SvgSprite = () => {
  const svgContext = require.context(
    '!svg-inline-loader?&removingTagAttrs=fill' + '!@/assets/icons', // search this directory
    true, // search subdirectories
    /\w+\.svg$/i // only include SVG files
  );
  const symbols = svgContext.keys().map((path) => {
    // get SVG file content
    const content = svgContext(path);
    // extract icon id from filename
    const id = path.replace(/^\.\/(.*)\.\w+$/, '$1');
    // replace svg tags with symbol tags and id attribute
    return content
      .replace('<svg', `<symbol id="${id}"`)
      .replace('svg>', 'symbol>');
  });

  const content = symbols.join('\n');

  return (
    <svg
      width="0"
      height="0"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={content}
      v-html="$options.svgSprite"
    />
  );
};

export default SvgSprite;
