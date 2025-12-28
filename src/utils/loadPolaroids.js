export const loadPolaroidImages = () => {
  const images = import.meta.glob(
    "../assets/polaroids/*.{jpg,jpeg,png}",
    { eager: true }
  );

  return Object.values(images).map((img) => img.default);
};
