const Card = ({ product, onDelete }) => {
  const handleDelete = () => {
    onDelete(product._id);
  };
  const handleUpdate = () => {};
  return (
    <section className="  bg-base-300 py-6 px-9 shadow-lg m-6">
      <div className="flex justify-between">
        <h1>{product.name}</h1>

        <h1>{product.category}</h1>

        <h1>
          <span className="font-bold text-green-800">Ksh</span> {product.price}
        </h1>

        <div className="text-white space-x-2">
          <button
            className="bg-green-500  px-2 py-1 rounded-md "
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="bg-red-500 t px-2 py-1 rounded-md"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
