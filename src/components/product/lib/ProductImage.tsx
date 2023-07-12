const ProductImageComponent = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`
    bg-cover
    h-96
    border-b-4
    bg-[--secondary-color]
    `}
    ></div>
  );
};

export default ProductImageComponent;
