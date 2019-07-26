const generateUrl = ({ latitude, longitude, name, travelMode }) =>
  `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${name.replace(
    / /g,
    '+'
  )}&travelmode=${travelMode}`;

export default generateUrl;
