const Service = ({ service: { image, title, description } }) => {
  return (
    <>
      <div className="flex justify-center">
        <img src={image} />
      </div>
      <div>
        <div className="text-2xl font-semibold mb-4">{title}</div>
        <div>{description}</div>
      </div>
      <div className="text-navy-blue">
        <a href="">View details &gt;</a>
      </div>
    </>
  );
};

export default Service;
