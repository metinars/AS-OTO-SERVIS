const images = {};

function importAll(r) {
  r.keys().forEach((key) => (images[key] = r(key)));
}

importAll(
  // eslint-disable-next-line no-undef
  require.context('./images/home/services', false, /\.(png|jpe?g|svg)$/)
);

export default images;
